import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'
import NewsAds from './NewsAds'

function NewsCategory(props) {

    const category = props.category

    return (<div>
        {/* Breadcrumb Start */}
        <div className="container-fluid" style={{ marginTop: '100px' }}>
            <div className="container">
                <nav className="breadcrumb bg-transparent m-0 p-0">
                    <a className="breadcrumb-item" href="index.html">Trang chủ</a>
                    <span className="breadcrumb-item active">{category}</span>
                </nav>
            </div>
        </div>
        {/* Breadcrumb End */}
        <div className="container-fluid py-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                                    <h3 className="m-0">{category}</h3>
                                    <a className="text-secondary font-weight-medium text-decoration-none" href>Xem Tất Cả</a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="position-relative mb-3">
                                    <img className="img-fluid w-100" src="img/news-500x280-1.jpg" style={{ objectFit: 'cover' }} />
                                    <div className="overlay position-relative bg-light">
                                        <div className="mb-2" style={{ fontSize: '14px' }}>
                                            <a href>Chứng khoán cho NĐT mới</a>
                                            <span className="px-1">/</span>
                                            <span>10-11-2023</span>
                                        </div>
                                        <a className="h4" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu Hiệu Quả</a>
                                        <p className="m-0">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span className="fa fa-angle-double-left" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span className="fa fa-angle-double-right" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <NewsAds/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default withRouter(NewsCategory);