import React from 'react'
import '../../Styles/Home.css'
import '../../App.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Banner12 from '../../assets/banner1.2.png'
import Banner22 from '../../assets/banner2.2.png'
import { withRouter } from 'react-router-dom'

function Banner(props) {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }

    return (
        <div className="container-fluid py-3" style={{marginTop: "100px"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="position-relative mb-3 mb-lg-0">
                        <div className="position-relative overflow-hidden cover-image">
                            <img className="img-fluid h-100" src="https://cophieux.com/wp-content/uploads/2023/05/BANNER-KHOA-HOC-2023-GIF.gif" style={{objectFit: "cover"}}/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                        <h3 className="m-0">TIN MỚI NHÂT</h3>
                        <a className="text-secondary font-weight-medium text-decoration-none" href="">Xem Tất Cả</a>
                    </div>
                    <div className="overflow-auto" style={{maxHeight: "350px"}}>
                        <div className="d-flex mb-3">
                            <img src="img/news-100x100-1.jpg" style={{width: "100px",height: "100px",objectFit: "cover"}}/>
                            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: "100px"}}>
                                <div className="mb-1" style={{fontSize: "13px"}}>
                                    <a href="">Chứng khoán cho NĐT mới</a>
                                    <span className="px-1">/</span>
                                    <span>10-11-2023</span>
                                </div>
                                <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản & Siêu Hiệu Quả</a>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <img src="img/news-100x100-1.jpg" style={{width: "100px",height: "100px",objectFit: "cover"}}/>
                            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: "100px"}}>
                                <div className="mb-1" style={{fontSize: "13px"}}>
                                    <a href="">Chứng khoán cho NĐT mới</a>
                                    <span className="px-1">/</span>
                                    <span>10-11-2023</span>
                                </div>
                                <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản & Siêu Hiệu Quả</a>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <img src="img/news-100x100-1.jpg" style={{width: "100px",height: "100px",objectFit: "cover"}}/>
                            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: "100px"}}>
                                <div className="mb-1" style={{fontSize: "13px"}}>
                                    <a href="">Chứng khoán cho NĐT mới</a>
                                    <span className="px-1">/</span>
                                    <span>10-11-2023</span>
                                </div>
                                <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản & Siêu Hiệu Quả</a>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <img src="img/news-100x100-1.jpg" style={{width: "100px",height: "100px",objectFit: "cover"}}/>
                            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: "100px"}}>
                                <div className="mb-1" style={{fontSize: "13px"}}>
                                    <a href="">Chứng khoán cho NĐT mới</a>
                                    <span className="px-1">/</span>
                                    <span>10-11-2023</span>
                                </div>
                                <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản & Siêu Hiệu Quả</a>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <img src="img/news-100x100-1.jpg" style={{width: "100px",height: "100px",objectFit: "cover"}}/>
                            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: "100px"}}>
                                <div className="mb-1" style={{fontSize: "13px"}}>
                                    <a href="">Chứng khoán cho NĐT mới</a>
                                    <span className="px-1">/</span>
                                    <span>10-11-2023</span>
                                </div>
                                <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản & Siêu Hiệu Quả</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default withRouter(Banner)