import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'
import Axios from 'axios'
import { UserContext } from '../../contexts/User'
import { CartContext } from '../../contexts/Cart'

function Header(props) {

    const [hover, setHover] = useState(0)
    const [totalCart, setTotalCart] = useState(0)

    const {
        setUserInfoFunc,
        userInfo
    } = useContext(UserContext)

    const {
        cartItems,
        total,
        openCartBox,
        setOpenCartBox,
        closeCartBox,
        setCloseCartBox,
        minusCount,
        plusCount,
        removeFromCart
    } = useContext(CartContext);

    useEffect(() => {
        // Axios.get(`http://localhost:4000/users/${localStorage.getItem('user-id')}`, {
        //     headers: { "authorization": `Bearer ${localStorage.getItem('token')}` }
        // })
        //     .then(res => {
        //         setUserInfoFunc(res.data.user);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })

        // let totalCartVirtual = 0;
        // for (let i in cartItems) {
        //     totalCartVirtual += cartItems[i].count
        // }
        // setTotalCart(totalCartVirtual)
    }, [cartItems])



    return (
        <div className="fixed-top">

            <div className="container-fluid">
                <div className="row align-items-center px-lg-5 bg-secondary">
                    <div className="col-12 col-md-8 text-white">
                        <span>
                            <img src="/img/icon_email.png" />
                            nguyenhuungo@gmail
                        </span>
                        <span className="ml-4">
                            <img src="/img/icon_hotline.png" />
                            096.774.6668
                        </span>
                    </div>
                </div>
            </div>


            <div className="container-fluid p-0 mb-3">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5">
                    <Link to="/" className="navbar-brand d-block">
                        <h1 className="m-0 display-5 text-uppercase"><span className="text-primary">X</span>COPHIEU</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className={props.location.pathname == '/' ? "nav-item nav-link active" : "nav-item nav-link"} >TRANG CHỦ</Link>
                            <Link to="/introduction" className={props.location.pathname == '/introduction' ? "nav-item nav-link active" : "nav-item nav-link"}>GIỚI THIỆU</Link>
                            <div className="nav-item dropdown" onMouseEnter={() => {
                                setHover(1)
                            }}
                                onMouseLeave={() => {
                                    setHover(0)
                                }}>
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">HỌC ĐẦU TƯ</a>
                                <div className={hover ? "dropdown-menu rounded-0 m-0 show" : "dropdown-menu rounded-0 m-0"}>
                                    <div className="menu-content row">
                                        <div className="col-lg-4" style={{ marginTop: "15px" }}>
                                            <b style={{ color: "black" }}>KIẾN THỨC</b>
                                            <Link to="/news/category/Chứng khoán cho NĐT mới"
                                                className={props.location.pathname.indexOf('Chứng khoán cho NĐT mới') != -1 ? "nav-link active" : "nav-link"}>Chứng khoán cho NĐT mới</Link>
                                            <Link to="/news/category/Kiến thức Phân tích cơ bản"
                                                className={props.location.pathname.indexOf('Kiến thức Phân tích cơ bản') != -1 ? "nav-link active" : "nav-link"}>
                                                Kiến thức Phân tích cơ bản</Link>
                                            <Link to="/news/category/Kiến thức Phân tích kỹ thuật"
                                                className={props.location.pathname.indexOf('Kiến thức Phân tích kỹ thuật') != -1 ? "nav-link active" : "nav-link"}>
                                                Kiến thức Phân tích kỹ thuật</Link>
                                            <Link to="/news/category/Kiến thức Đầu tư tổng hợp"
                                                className={props.location.pathname.indexOf('Kiến thức Đầu tư tổng hợp') != -1 ? "nav-link active" : "nav-link"}>
                                                Kiến thức Đầu tư tổng hợp</Link>
                                            <Link to="/news/category/Tản mạn & Góc chia sẻ"
                                                className={props.location.pathname.indexOf('Tản mạn & Góc chia sẻ') != -1 ? "nav-link active" : "nav-link"}>
                                                Tản mạn & Góc chia sẻ</Link>
                                        </div>
                                        <div className="col-lg-4" style={{ marginTop: "15px" }}>
                                            <b style={{ color: "black" }}>GÓC NHÌN VÀ THỊ TRƯỜNG</b>
                                            <Link to="/news/category/Tin tức vĩ mô"
                                                className={props.location.pathname.indexOf('Tin tức vĩ mô') != -1 ? "nav-link active" : "nav-link"}>
                                                Tin tức vĩ mô</Link>
                                            <Link to="/news/category/Nhận định thị trường"
                                                className={props.location.pathname.indexOf('Nhận định thị trường') != -1 ? "nav-link active" : "nav-link"}>
                                                Nhận định thị trường</Link>
                                        </div>
                                        <div className="col-lg-4" style={{ marginTop: "15px" }}>
                                            <b style={{ color: "black" }}>SÁCH HAY SƯU TẦM</b>
                                            <Link to="/news/category/Sách phân tích cơ bản"
                                                className={props.location.pathname.indexOf('Sách phân tích cơ bản') != -1 ? "nav-link active" : "nav-link"}>
                                                Sách phân tích cơ bản</Link>
                                            <Link to="/news/category/Sách phân tích kỹ thuật"
                                                className={props.location.pathname.indexOf('Sách phân tích kỹ thuật') != -1 ? "nav-link active" : "nav-link"}>
                                                Sách phân tích kỹ thuật</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to={userInfo ? "/account" : "/login"} className={(props.location.pathname == '/account' || props.location.pathname == '/login') ? "nav-item nav-link active" : "nav-item nav-link"}>DÀNH CHO HỘI VIÊN <i className="fa fa-lock"></i></Link>
                            <Link to="/course" className={props.location.pathname == '/course' ? "nav-item nav-link active" : "nav-item nav-link"}>KHÓA HỌC</Link>
                        </div>
                        <div className="input-group ml-auto" style={{ width: "100%", maxWidth: "300px" }}>
                            <input type="text" className="form-control" placeholder="Keyword" />
                            <div className="input-group-append">
                                <button className="input-group-text text-secondary"><i
                                    className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default withRouter(Header)
