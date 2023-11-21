import React, { useContext, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, withRouter } from 'react-router-dom'
import Axios from 'axios'
import { UserContext } from '../../contexts/User'
import { CartContext } from '../../contexts/Cart'
import Div100vh from 'react-div-100vh';
import classNames from 'classnames';
import { faSearch, faUser, faCartPlus, faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";

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

    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const openMobileMenuFunc = () => {
        setOpenMobileMenu(true)
        document.body.style.overflow = 'hidden';
    }

    const [closeAnimation, setCloseAnimation] = useState(false)
    const closeMobileMenuFunc = () => {
        document.body.style.overflow = 'unset';
        setCloseAnimation(true)
        setTimeout(() => {
            setOpenMobileMenu(false)
            setCloseAnimation(false)
        }, 700)
    }

    const redirect = (event) => {
        window.scrollTo(0, 0);
        props.history.push(`${event.target.id}`)
        closeMobileMenuFunc()
    }

    const [searchMobile, setSearchMobile] = useState("")

    const navBar = [
        {
            id: "1",
            label: "Trang Chủ",
            url: "/",
            dropdownContent: []
        },
        {
            id: "2",
            label: "Giới Thiệu",
            url: "/introduction",
            dropdownContent: []
        },
        {
            id: "3",
            label: "Học Đầu Tư",
            url: "/news/category",
            dropdownContent: [
                {
                    dropdownTitle: "Kiến Thức",
                    dropdownList: ["Chứng khoán cho NĐT mới","Kiến thức Phân tích cơ bản","Kiến thức Phân tích kỹ thuật","Kiến thức Đầu tư tổng hợp","Tản mạn & Góc chia sẻ"]
                },
                {
                    dropdownTitle: "Góc Nhìn Và Thị Trường",
                    dropdownList: ["Tin tức vĩ mô","Nhận định thị trường","Phân Tích Cổ Phiếu"] 
                },
                {
                    dropdownTitle: "Sách Hay Sưu Tầm",
                    dropdownList: ["Sách phân tích cơ bản","Sách phân tích kỹ thuật"]
                }
            ]
        },
        {
            id: "4",
            label: 'Dành Cho Hội Viên',
            url: "/account",
            dropdownContent: []
        },
        {
            id: "5",
            label: "Khóa Học",
            url: "/course",
            dropdownContent: []
        },
    ]

    const location = props.history.location.pathname;
    const path = props.history.location.pathname.slice(12);

    const subHeight = useRef()

    const [openSubMenu, setOpenSubMenu] = useState(null)


    return (
        <div className="fixed-top">

            <div className="container-fluid">
                <div className="row align-items-center px-lg-5 bg-secondary">
                    <div className="col-12 col-md-8 text-white">
                        <span>
                            <img src="/img/icon_email.png" />
                            hungnh.src@gmail.com
                        </span>
                        <span className="ml-4">
                            <img src="/img/icon_hotline.png" />
                            039.508.1346
                        </span>
                    </div>
                </div>
            </div>


            <div className="container-fluid p-0 mb-3">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5">
                    <Link to="/" className="navbar-brand d-block">
                        <h1 className="m-0 display-5 text-uppercase">
                            <img style={{ height: "45px" }} src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/370016223_1460259698038526_3393128236471153605_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHfvfSLREhvF07sYoa-838qjt6dDNsXYy6O3p0M2xdjLtoIc6yFv07FD6vqlZVC9EInRWDDUYRWZvFt7GBiQna-&_nc_ohc=DRRISp89_4UAX9oV9co&_nc_ht=scontent.fhan3-5.fna&oh=03_AdTwcyle2jxCBLwdBQycvdl0WLBYY2k-cP-S2KdYbjodtg&oe=6573298E" />
                            <span className="text-primary">DOMINO</span>STOCK</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {
                        openMobileMenu === true &&
                        <Div100vh className="menu-mobile-box flex">
                            <div className={classNames("menu-mobile-left flex-col", {
                                openMenuMobile: openMobileMenu,
                                closeMenuMobile: closeAnimation
                            })}>
                                <div className="menu-mobile-search flex-center">
                                    <input
                                        onChange={(e) => {
                                            setSearchMobile(e.target.value)
                                        }}
                                        value={searchMobile}
                                        className="input" placeholder="Tìm Kiếm..." style={{ fontSize: '16px', height: '50px' }}
                                    ></input>
                                    <div onClick={() => {
                                        //props.history.push(`/shop/${searchMobile}`)
                                        closeMobileMenuFunc()
                                    }}>
                                        <FontAwesomeIcon icon={faSearch} style={{ marginLeft: '10px', color: '#777' }} />
                                    </div>
                                </div>
                                <div 
                                className="menu-mobile-list"
                            >
                                {
                                    navBar.map((item, index)=> {
                                        return (
                                            <div 
                                                key={index}
                                                style={{color: '#111', maxHeight: openSubMenu === item.id ? `1000px` : '40px'}}
                                                className={classNames("menu-mobile-item a", {
                                                    menu_mobile_item_active: location === item.url.toLowerCase() || 
                                                    (item.url.toLowerCase() =="/news/category" && location.indexOf("/news/category") != -1),
                                                })}
                                            >
                                                <div className="flex" style={{justifyContent: 'space-between',fontWeight: "bold"}}>
                                                    <p
                                                        id = {item.url.toLowerCase()}
                                                        onClick={(event) => {
                                                            if(item.url.toLowerCase() != "/news/category") redirect(event)
                                                            else {
                                                                if (!openSubMenu) {
                                                                    setOpenSubMenu(item.id)
                                                                } else {
                                                                    if (openSubMenu === item.id) {
                                                                        setOpenSubMenu(null)
                                                                    } else {
                                                                        setOpenSubMenu(item.id)
                                                                    }
                                                                }
                                                            }
                                                        }}
                                                    >{item.label}</p>
                                                    { item.dropdownContent.length > 0 && 
                                                        <div
                                                            style={{ 
                                                                width: '30px',
                                                            }}
                                                            className="flex-center"
                                                            onClick={()=>{
                                                                if (!item.dropdownContent.length > 0) {
                                                                    props.history.push(item.url);
                                                                } else {
                                                                    if (!openSubMenu) {
                                                                        setOpenSubMenu(item.id)
                                                                    } else {
                                                                        if (openSubMenu === item.id) {
                                                                            setOpenSubMenu(null)
                                                                        } else {
                                                                            setOpenSubMenu(item.id)
                                                                        }
                                                                    }
                                                                }
                                                            }}>
                                                            <FontAwesomeIcon icon={faAngleDown}/>
                                                        </div>
                                                    }
                                                </div>
                                                <div 
                                                    className="menu-mobile-sub"
                                                    ref={subHeight}
                                                >
                                                    { item.dropdownContent.map((item2, index)=>{ 
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="menu-item-sub-item"
                                                            >
                                                                <p
                                                                    id = {`${item.url.toLowerCase()}/${item2.dropdownTitle.replace(/\s+/g, '')}`}
                                                                    style={{fontWeight: "bold", color:"black"}}
                                                                >{item2.dropdownTitle}</p>
                                                                {
                                                                    item2.dropdownList.map((item3,index)=>{
                                                                        return (
                                                                            <div
                                                                                className="menu-item-sub-item2"
                                                                                key={index} 
                                                                            >
                                                                                <p
                                                                                    id = {`${item.url.toLowerCase()}/${item3}`}
                                                                                    onClick={redirect}
                                                                                    style={{fontWeight : location.indexOf(item3) != -1 ? "bold" : "normal"}}
                                                                                >{item3}</p>
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
                                        )
                                    })
                                }
                            </div>
                            </div>
                            <div
                                className="menu-mobile-right"
                                onClick={closeMobileMenuFunc}
                            ></div>
                        </Div100vh>

                    }
                    <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className={props.location.pathname == '/' ? "nav-item nav-link active" : "nav-item nav-link"} >Trang Chủ</Link>
                            <Link to="/introduction" className={props.location.pathname == '/introduction' ? "nav-item nav-link active" : "nav-item nav-link"}>Giới Thiệu</Link>
                            <div className="nav-item dropdown" onMouseEnter={() => {
                                setHover(1)
                            }}
                                onMouseLeave={() => {
                                    setHover(0)
                                }}>
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Học Đầu Tư</a>
                                <div className={hover ? "dropdown-menu rounded-0 m-0 show" : "dropdown-menu rounded-0 m-0"}>
                                    <div className="menu-content row">
                                        <div className="col-lg-4" style={{ marginTop: "15px" }}>
                                            <b style={{ color: "black" }}>Kiến Thức</b>
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
                                            <b style={{ color: "black" }}>Góc Nhìn Và Thị Trường</b>
                                            <Link to="/news/category/Tin tức vĩ mô"
                                                className={props.location.pathname.indexOf('Tin tức vĩ mô') != -1 ? "nav-link active" : "nav-link"}>
                                                Tin tức vĩ mô</Link>
                                            <Link to="/news/category/Nhận định thị trường"
                                                className={props.location.pathname.indexOf('Nhận định thị trường') != -1 ? "nav-link active" : "nav-link"}>
                                                Nhận định thị trường</Link>
                                            <Link to="/news/category/Phân Tích Cổ Phiếu"
                                                className={props.location.pathname.indexOf('Phân Tích Cổ Phiếu') != -1 ? "nav-link active" : "nav-link"}>
                                                Phân Tích Cổ Phiếu</Link>
                                        </div>
                                        <div className="col-lg-4" style={{ marginTop: "15px" }}>
                                            <b style={{ color: "black" }}>Sách Hay Sưu Tầm</b>
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
                            <Link to={userInfo ? "/account" : "/login"} className={(props.location.pathname == '/account' || props.location.pathname == '/login') ? "nav-item nav-link active" : "nav-item nav-link"}>Dành Cho Hội Viên <i className="fa fa-lock"></i></Link>
                            <Link to="/course" className={props.location.pathname == '/course' ? "nav-item nav-link active" : "nav-item nav-link"}>Khóa Học</Link>
                        </div>
                        <div className="input-group ml-auto" style={{ width: "100%", maxWidth: "300px" }}>
                            <input type="text" className="form-control" placeholder="Tìm Kiếm..." />
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
