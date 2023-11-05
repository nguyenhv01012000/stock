import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import DashboardEditor from '../News/DashboardEditor';
import { BACKEND } from '../../../../env';


export default function DashboardProductEdit(props) {

    const createForm = useRef();
    const cateInput = useRef();
    const groupCateInput = useRef();
    const [isCheckedSmall, setIsCheckedSmall] = useState(false);
    const [isCheckedMedium, setIsCheckedMedium] = useState(false);
    const [isCheckedLarge, setIsCheckedLarge] = useState(false);
    const [inputValue, setInputValue] = useState([])
    const [cate, setCate] = useState([])
    const [file, setFile] = useState([])
    const product = props.product


    const [productImg, setProductImg] = useState([])
    const [productName, setProductName] = useState("")
    const [productSale, setProductSale] = useState(0)
    const [productPrice, setProductPrice] = useState(0)
    const [productDes, setProductDes] = useState("")
    const [productTitle, setProductTitle] = useState("")
    const [productVideo, setProductVideo] = useState("")
    const [learn, setLearn] = useState([""])
    const [content, setContent] = useState([""])
    const [subContent, setSubContent] = useState([[""]])
    const [toDate, setToDate] = useState("")
    const [fromDate, setFromDate] = useState("")
    const [productTimeCourse, setProductTimeCourse] = useState("")
    const [productBookNumber, setproductBookNumber] = useState("")
    const [deleteImgId, setDeleteImgId] = useState(null)


    const handleOnChangeLearn = (event, index) => {
        let learnClone = [...learn]
        learnClone[index] = event.target.value;
        setLearn(learnClone);
    }

    const handleOnAcionLearn = (number, position) => {
        if (number == 1) {
            setLearn([...learn, ""])
        }
        else {
            setLearn(learn.filter((item, index) => {
                return index !== position
            }))
        }
    }

    const handleOnChangeContent = (event, index) => {
        let contentClone = [...content]
        contentClone[index] = event.target.value;
        setContent(contentClone);
    }

    const handleOnAcionContent = (number, position) => {
        if (number == 1) {
            setContent([...content, ""])
            setSubContent([...subContent, [""]])
        }
        else {
            setContent(content.filter((item, index) => {
                return index !== position
            }))
            setSubContent(subContent.filter((item, index) => {
                return index !== position
            }))
        }
    }

    const handleOnChangeSubContent = (event, index, subIndex) => {
        let subContentClone = [...subContent];
        subContentClone[index][subIndex] = event.target.value;
        setSubContent(subContentClone);
    }

    const handleOnAcionSubContent = (number, position, subPosition) => {
        if (number == 1) {
            let subContentClone = [...subContent];
            subContentClone[position].push("");
            setSubContent(subContentClone);
        }
        else {
            let subContentClone = [...subContent];
            subContentClone[position] = subContentClone[position].filter((item, index) => {
                return index !== subPosition
            })
            setSubContent(subContentClone);
        }
    }

    useEffect(() => {
        if (product) {
            setProductName(product.productName)
            setProductImg([product.productImg])
            setProductSale(product.productSale)
            setProductPrice(product.productPrice)
            setProductDes(product.productDes)
            setProductTitle(product.productTitle)
            setProductVideo(product.productVideo)
            setProductTimeCourse(product.productTimeCourse)
            setproductBookNumber(product.productBookNumber)
            setLearn(product.productLearn)
            setContent(product.productContent)
            setSubContent(product.productSubContent)
            setToDate(convertDate(product.productToDate))
            setFromDate(convertDate(product.productFromDate))
        }
    }, [product])

    const convertDate = (dateString) => {
        const date = new Date(dateString)
        let day = '' + date.getDate();
        let month = '' + (date.getMonth() + 1);
        let year = date.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        const shortedDate = year + '-' + month + '-' + day;
        return shortedDate;
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const formData = new FormData();

        const imageArr = Array.from(file);
        imageArr.forEach(image => {
            formData.append('productImg', image);
        });

        formData.append("productName", productName);
        formData.append("productSale", productSale);
        formData.append("productPrice", productPrice);
        formData.append("productDes", productDes);
        formData.append("productTimeCourse", productTimeCourse);
        formData.append("productBookNumber", productBookNumber);
        formData.append("productLearn", learn.join("`"));
        formData.append("productContent", content.join("`"));
        formData.append("productFromDate", fromDate);
        formData.append("productToDate", toDate);
        formData.append("productTitle", productTitle);
        formData.append("productVideo", productVideo);
        let subContentClone = [...subContent];
        let subContentString = "";
        subContentClone.forEach(i => {
            subContentString += i.join("`") + "``"
        })
        formData.append("productSubContent", subContentString);
        formData.append("deleteImgId", deleteImgId);

        axios.post(BACKEND + `/products/update/${product._id}`, formData, config)
        props.setCloseEditFunc(false);
        props.setToastFunc(true);
    }

    const deleteImg = (event) => {
        const id = event.target.id
        const virutalFile = [...file]
        virutalFile.splice(id, 1)
        setFile(virutalFile)

        const items = [...productImg]
        items.splice(id, 1)
        setProductImg(items)
        setDeleteImgId(1)
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box">
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        Thông Tin Khóa Học
                    </div>
                    <div
                        className="create-box-title-close flex-center"
                        onClick={() => {
                            props.setCloseEditFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                {product &&
                    <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Tên</div>
                            <div className="dashboard-right">
                                <input
                                    type="text" name="name"
                                    value={productName}
                                    onChange={(event) => {
                                        setProductName(event.target.value)
                                    }} required
                                ></input>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Tiêu đề</div>
                            <div className="dashboard-right">
                                <textarea style={{ width: "100%", height: "150px", padding: "10px" }}
                                    type="text" name="title"
                                    value={productTitle}
                                    onChange={(event) => {
                                        setProductTitle(event.target.value)
                                    }}
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Link video</div>
                            <div className="dashboard-right">
                                <input type="text" name="video"
                                    value={productVideo}
                                    onChange={(event) => {
                                        setProductVideo(event.target.value)
                                    }} required></input>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Hình Ảnh </div>
                            <div className="dashboard-right">
                                <input
                                    onChange={(event) => {
                                        const files = event.target.files;
                                        for (let i = 0; i < files.length; i++) {
                                            setProductImg([URL.createObjectURL(files[i])])
                                        }
                                        const fileArr = Array.prototype.slice.call(files)
                                        fileArr.forEach(item => {
                                            setFile(file => [...file, item])
                                        })
                                    }}
                                    type="file"
                                    name="productImg"
                                    className="noborder"
                                    multiple="multiple"
                                    style={{ height: '50px' }}
                                ></input>
                                <div className="flex" style={{ overflowY: 'hidden', flexWrap: 'wrap' }}>
                                    {productImg &&
                                        productImg.map((item, index) => {
                                            return (
                                                <div className="create-box-img">
                                                    <img key={index} src={item} alt=""></img>
                                                    <div
                                                        className="create-box-img-overlay"
                                                    >
                                                        <p
                                                            id={index}
                                                            onClick={deleteImg}
                                                            className="icon">X
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Giá </div>
                            <div className="dashboard-right">
                                <input
                                    type="number" name="price"
                                    placeholder="VND"
                                    value={productPrice}
                                    onChange={(event) => {
                                        setProductPrice(event.target.value)
                                    }} required
                                ></input>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Giảm Giá </div>
                            <div className="dashboard-right flex-center">
                                <input
                                    type="number" placeholder="%"
                                    style={{ width: "100px" }}
                                    name="sale"
                                    value={productSale}
                                    onChange={(event) => {
                                        setProductSale(event.target.value)
                                    }}
                                    required></input>
                                <label>Từ: </label>
                                <input type="date" name="fromdate"
                                    value={fromDate}
                                    onChange={(event) => {
                                        setFromDate(event.target.value)
                                    }} placeholder="dd/mm/yyyy"
                                    pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)" />
                                <label>Đến: </label>
                                <input type="date" name="todate"
                                    value={toDate}
                                    onChange={(event) => {
                                        setToDate(event.target.value)
                                    }} placeholder="dd/mm/yyyy" pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)" />
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Thời Lượng </div>
                            <div className="dashboard-right flex-center">
                                <input required type="text" name="timeCourse" value={productTimeCourse}
                                    onChange={(event) => {
                                        setProductTimeCourse(event.target.value)
                                    }} />
                                <label style={{ marginLeft: "10%", width: "30%" }}>Số giáo trình </label>
                                <input type="number" style={{ width: "100px" }}
                                    value={productBookNumber}
                                    onChange={(event) => {
                                        setproductBookNumber(event.target.value)
                                    }} name="numberBook" required></input>
                            </div>
                        </div>

                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Bạn Học Được Gì </div>
                            <div className="dashboard-right">
                                {learn &&
                                    learn.map((item, index) => {
                                        return (
                                            <div className="flex">
                                                <input required type="text" name="learn" value={item} onChange={event => handleOnChangeLearn(event, index)} style={{ marginRight: "10%", width: "60%", marginBottom: "10px" }} />
                                                <div
                                                    className="action-item flex-center action-blue"
                                                    onClick={() => handleOnAcionLearn(1, index)}
                                                >
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </div>
                                                {
                                                    learn.length > 1 && <div
                                                        className="action-item flex-center action-red"
                                                        onClick={() => handleOnAcionLearn(-1, index)}
                                                    >
                                                        <FontAwesomeIcon icon={faTimes} />
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Giới thiệu khóa học </div>
                            <div className="dashboard-right">
                                {/* <textarea style={{ width: "100%", height: "150px", padding: "10px" }}
                                    type="text" name="des"
                                    value={productDes || ""}
                                    onChange={(event) => {
                                        setProductDes(event.target.value)
                                    }}
                                    required
                                ></textarea> */}
                                <div style={{ border: '1px #ddd solid', padding: "10px" }}>
                                    <DashboardEditor
                                        newsContent={productDes}
                                        setNewsContent={setProductDes}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Nội dung khóa học </div>
                            <div className="dashboard-right">
                                {content &&
                                    content.map((item, index) => {
                                        return (
                                            <div>
                                                <div className="flex">
                                                    <input required type="text" name="learn" value={item} onChange={event => handleOnChangeContent(event, index)} style={{ marginRight: "5%", width: "80%", marginBottom: "10px" }} />
                                                    <div
                                                        className="action-item flex-center action-blue"
                                                        onClick={() => handleOnAcionContent(1, index)}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </div>
                                                    {
                                                        content.length > 1 && <div
                                                            className="action-item flex-center action-red"
                                                            onClick={() => handleOnAcionContent(-1, index)}
                                                        >
                                                            <FontAwesomeIcon icon={faTimes} />
                                                        </div>
                                                    }
                                                </div>
                                                {subContent &&
                                                    subContent[index].map((subItem, subIndex) => {
                                                        return (<div className="flex">
                                                            <input type="text" name="learn" value={subItem} onChange={event => handleOnChangeSubContent(event, index, subIndex)} style={{ marginLeft: "15%", marginRight: "5%", width: "60%", marginBottom: "10px" }} required />
                                                            <div
                                                                className="action-item flex-center action-blue"
                                                                onClick={() => handleOnAcionSubContent(1, index, subIndex)}
                                                            >
                                                                <FontAwesomeIcon icon={faPlus} />
                                                            </div>
                                                            {subContent[index] &&
                                                                subContent[index].length > 1 && <div
                                                                    className="action-item flex-center action-red"
                                                                    onClick={() => handleOnAcionSubContent(-1, index, subIndex)}
                                                                >
                                                                    <FontAwesomeIcon icon={faTimes} />
                                                                </div>
                                                            }
                                                        </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="flex-center" style={{ marginTop: '40px' }}>
                            <button className="create-box-btn btn">
                                Cập nhập khóa học
                            </button>
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}