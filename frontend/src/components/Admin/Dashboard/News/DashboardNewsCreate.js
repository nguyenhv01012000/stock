import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import DashboardEditor from './DashboardEditor';
import { BACKEND } from '../../../../env';
import DashboardQuill from './DashboardQuill';
import "./DashboardQuill.css";


export default function DashboardNewsCreate(props) {

    const date = new Date()
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const shortedDate = year + '-' + month + '-' + day;

    const createForm = useRef();
    const cateInput = useRef();
    const [inputValue, setInputValue] = useState([])
    const [cateValue, setCateValue] = useState("")
    const [file, setFile] = useState([])
    const [newsContent, setNewsContent] = useState("")
    const [newsImg, setNewsImg] = useState([])
    const [cateList, setCateList] = useState([])
    const [newsIntro, setNewsIntro] = useState("")
    const [newsDate, setNewsDate] = useState(shortedDate)

    const handleOnChange = (event) => {
        setInputValue({ ...inputValue, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        // axios.get(`http://localhost:4000/news`)
        //         .then(res => {
        //             const test = Object.values(res.data.reduce((a, {newCate}) => {
        //                 a[newCate] = a[newCate] || {newCate};
        //                 return a;
        //             }, Object.create(null)));
        //             setCateList(test)
        //         }
        //     )
    }, [])

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
        formData.append("newTime", new Date());
        formData.append("newCate", cateValue);
        formData.append("newTitle", inputValue.title);
        formData.append("newContent", newsContent);
        formData.append("newDate", newsDate);
        formData.append("newIntro", newsIntro);
        axios.post(BACKEND + '/news', formData, config)
        props.setCloseCreateFunc(false);
        props.setToastFunc(true);
    }

    const addNewCate = () => {
        setCateList(cateList => [...cateList, { newCate: inputValue.cate }])
        cateInput.current.value = ""
    }

    const deleteImg = (event) => {
        const virutalFile = [...file]
        virutalFile.splice(event.target.id, 1)
        setFile(virutalFile)

        const items = [...newsImg]
        items.splice(event.target.id, 1)
        setNewsImg(items)
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box">
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        Thông Tin Bài Viết
                    </div>
                    <div
                        className="create-box-title-close flex-center"
                        onClick={() => {
                            props.setCloseCreateFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tiêu Đề</div>
                        <div className="dashboard-right">
                            <input type="text" name="title" onChange={handleOnChange} required></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Hình Ảnh</div>
                        <div className="dashboard-right">
                            <input
                                onChange={(event) => {
                                    const files = event.target.files;
                                    for (let i = 0; i < files.length; i++) {
                                        setNewsImg(news => [...news, URL.createObjectURL(files[i])])
                                    }
                                    const fileArr = Array.prototype.slice.call(files)
                                    fileArr.forEach(item => {

                                        setFile(file => [...file, item])
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
                                onChange={(event) => { setCateValue(event.target.value) }}
                                value={cateValue}
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
                                    <option value="Phân Tích Cổ Phiếu">Phân Tích Cổ Phiếu</option>
                                </optgroup>
                                <optgroup label="SÁCH HAY SƯU TẦM">
                                    <option value="Sách phân tích cơ bản">Sách phân tích cơ bản</option>
                                    <option value="Sách phân tích kỹ thuật">Sách phân tích kỹ thuật</option>
                                </optgroup>
                                <optgroup label="Mở Tài Khoản">
                                    <option value="Tài khoản chứng khoán VPS">Tài khoản chứng khoán VPS</option>
                                    <option value="Tài khoản chứng khoán AIS">Tài khoản chứng khoán AIS</option>
                                    <option value="Tài khoản chứng khoán MBS">Tài khoản chứng khoán MBS</option>
                                </optgroup>
                            </select>
                            <label style={{ marginLeft: "10%", width: "30%" }}>Ngày xuất bản </label>
                            <input type="date" name="Ngày xuất bản" value={newsDate} onChange={(event) => { setNewsDate(event.target.value) }}
                                required dateFormat="DD MMMM YYYY" dataDateFormat="DD MMMM YYYY" placeholder="dd/mm/yyyy" pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)" />
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Giới Thiệu</div>
                        <div className="dashboard-right">
                                <DashboardQuill setBlog={setNewsIntro}/>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Nội Dung</div>
                    </div>
                        <DashboardQuill setBlog={setNewsContent}/>
                    <div className="flex-center" style={{ marginTop: '40px' }}>
                        <button className="create-box-btn btn">
                            Add news
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}