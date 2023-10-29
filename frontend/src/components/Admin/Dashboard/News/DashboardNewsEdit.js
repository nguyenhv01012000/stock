import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import DashboardEditor from './DashboardEditor';

export default function DashboardNewsCreate(props) {

    const createForm = useRef();
    const cateInput = useRef();
    const [inputValue, setInputValue] = useState([])
    const [file, setFile] = useState([])
    const [cateList, setCateList] = useState([])
    const news = props.news;

    const handleOnChange = (event) => {
        setInputValue({ ...inputValue, [event.target.name]: event.target.value })
    }

    const [newsTitle, setNewsTitle] = useState("")
    const [newsIntro, setNewsIntro] = useState("")
    const [newsDate, setNewsDate] = useState("")
    const [newsImg, setNewsImg] = useState([])
    const [newsCate, setNewsCate] = useState("")
    const [newsContent, setNewsContent] = useState("")

    useEffect(() => {
        if (news) {
            setNewsTitle(news.newTitle)
            setNewsImg([news.newImg])
            setNewsCate(news.newCate)
            setNewsContent(news.newContent)
            setNewsIntro(news.newIntro)
            const date = new Date(news.newDate)
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const shortedDate = year + '-' + month + '-' + day;
            setNewsDate(shortedDate)

            // axios.get(`http://localhost:4000/news`)
            //     .then(res => {
            //         const test = Object.values(res.data.reduce((a, {newCate}) => {
            //             a[newCate] = a[newCate] || {newCate};
            //             return a;
            //         }, Object.create(null)));
            //         setCateList(test)
            //     }
            // )
        }
    }, [news])

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
            formData.append('newImg', image);
        });
        formData.append("newCate", newsCate);
        formData.append("newTitle", newsTitle);
        formData.append("newContent", newsContent);
        formData.append("newDate", newsDate);
        formData.append("newIntro", newsIntro);

        axios.post(`http://localhost:4000/news/update/${news._id}`, formData, config)
            .then(() => {
                props.setCloseEditFunc(false);
                props.setToastFunc(true);
            })
    }

    const addNewCate = () => {
        setCateList(cateList => [...cateList, { newCate: inputValue.cate }])
        cateInput.current.value = ""
    }

    const deleteImg = (event) => {
        const id = event.target.id
        const virutalFile = [...file]
        virutalFile.splice(id, 1)
        setFile(virutalFile)

        const items = [...newsImg]
        items.splice(id, 1)
        setNewsImg(items)
        axios.post(`http://localhost:4000/news/update/${news._id}`, {
            deleteImgId: id
        })
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box">
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        Thông tin bài viết
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
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tiêu Đề</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="title"
                                value={newsTitle || ""}
                                onChange={(event) => {
                                    setNewsTitle(event.target.value)
                                }} required
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Hình Ảnh </div>
                        <div className="dashboard-right">
                            <input
                                onChange={(event) => {
                                    const files = event.target.files;
                                    for (let i = 0; i < files.length; i++) {
                                        setNewsImg(news => [URL.createObjectURL(files[i])])
                                    }
                                    const fileArr = Array.prototype.slice.call(files)
                                    fileArr.forEach(item => {
                                        setFile(file => [item])
                                    })
                                }}
                                type="file"
                                name="newsImg"
                                className="noborder"
                                multiple="multiple"
                                style={{ height: '50px' }}
                            ></input>
                            <div className="flex" style={{ overflowY: 'hidden', flexWrap: 'wrap' }}>
                                {newsImg &&
                                    newsImg.map((item, index) => {
                                        return (
                                            <div key={index} className="create-box-img">
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
                        <div className="dashboard-left flex">Thể Loại </div>
                        <div className="dashboard-right flex-center">
                            <select style={{ width: "350px" }}
                                onChange={(event) => { setNewsCate(event.target.value) }}
                                value={newsCate}
                                required
                            >
                                <option value="" disabled>-- Chọn thể loại --</option>
                                <optgroup label="Kiến Thức">
                                    <option value="Chứng khoán cho NĐT mới">Chứng khoán cho NĐT mới</option>
                                    <option value="Kiến thức Phân tích cơ bản">Kiến thức Phân tích cơ bản</option>
                                    <option value="Kiến thức Phân tích kỹ thuật">Kiến thức Phân tích kỹ thuật</option>
                                    <option value="Kiến thức Đầu tư tổng hợp">Kiến thức Đầu tư tổng hợp</option>
                                    <option value="Tản mạn & Góc chia sẻ">Tản mạn & Góc chia sẻ</option>
                                </optgroup>
                                <optgroup label="GÓC NHÌN VÀ THỊ TRƯỜNG">
                                    <option value="Tin tức vĩ mô">Tin tức vĩ mô</option>
                                    <option value="Nhận định thị trường">Nhận định thị trường</option>
                                </optgroup>
                                <optgroup label="SÁCH HAY SƯU TẦM">
                                    <option value="Sách phân tích cơ bản">Sách phân tích cơ bản</option>
                                    <option value="Sách phân tích kỹ thuật">Sách phân tích kỹ thuật</option>
                                </optgroup>
                            </select>
                            <label style={{ marginLeft: "10%", width: "30%" }}>Ngày xuất bản </label>
                            <input type="date" name="Ngày xuất bản" value={newsDate} onChange={(event) => { setNewsDate(event.target.value) }}
                                required placeholder="mm/dd/yyyy" pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)" />
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Giới Thiệu</div>
                        <div className="dashboard-right">
                            <textarea style={{ width: "100%", height: "150px", padding: "10px" }}
                                type="text" name="Intro"
                                value={newsIntro || ""}
                                onChange={(event) => {
                                    setNewsIntro(event.target.value)
                                }} required
                            ></textarea>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Nội Dung </div>
                    </div>
                    <div style={{ border: '1px #ddd solid', padding: "10px" }}>
                        <DashboardEditor
                            newsContent={newsContent}
                            setNewsContent={setNewsContent}
                        />
                    </div>
                    <div className="flex-center" style={{ marginTop: '40px' }}>
                        <button className="create-box-btn btn">
                            Edit news
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}