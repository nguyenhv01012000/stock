import React from 'react'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import News from '../News/News';
import NewsSmall from '../News/NewsSmall';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export default function Features(props) {

    const [newsView, setNewsView] = useState([]);
    const [newsHot, setNewsHot] = useState([]);



    useEffect(() => {
        window.scrollTo(0, 0)
        let config = {
            params: {
                page: 0,
                limit: 6,
                sort: "view"
            },
        }
        Axios.get(`http://localhost:4000/news`, config)
            .then(res => {
                 const arr = [...res.data.news]
                setNewsView(arr)
            }
            )
        config = {
            params: {
                page: 0,
                limit: 6,
                sort: "hot"
            },
        }
        Axios.get(`http://localhost:4000/news`, config)
            .then(res => {
                 const arr = [...res.data.news]
                setNewsHot(arr)
            }
            )
    }, [])

    return (
        <div className="Features">
            <div>
                <div className="container-fluid py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                                            <h3 className="m-0">BÀI VIẾT ĐỌC NHIỀU</h3>
                                            <Link className="text-secondary font-weight-medium text-decoration-none" to="/news/category/BÀI VIẾT ĐỌC NHIỀU">Xem Tất Cả</Link>
                                        </div>
                                    </div>
                                    {
                                        newsView.map((item, index) => {
                                            return (
                                                <div className="col-lg-4">
                                                    <News   
                                                        key={index}
                                                        news={item}
                                                    />
                                               </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="col-lg-4 pt-3 pt-lg-0">
                                {/* Popular News Start */}
                                <div className="pb-3">
                                    <div className="bg-light py-2 px-4 mb-3">
                                        <h3 className="m-0">KIẾN THỨC HAY</h3>
                                    </div>
                                    {
                                        newsHot.map((item, index) => {
                                            return (
                                                <NewsSmall   
                                                    key={index}
                                                    news={item}
                                                />
                                            )
                                        })
                                    }
                                </div>
                                {/* Popular News End */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container-fluid py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                                            <h3 className="m-0">KIẾN THỨC ĐẦU CƠ</h3>
                                            <a className="text-secondary font-weight-medium text-decoration-none" href>Xem Tất Cả</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="position-relative mb-3">
                                            <img className="img-fluid w-100" src="img/news-500x280-5.jpg" style={{ objectFit: 'cover' }} />
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
                                    <div className="col-lg-4">
                                        <div className="position-relative mb-3">
                                            <img className="img-fluid w-100" src="img/news-500x280-6.jpg" style={{ objectFit: 'cover' }} />
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
                                    <div className="col-lg-4">
                                        <div className="position-relative mb-3">
                                            <img className="img-fluid w-100" src="img/news-500x280-6.jpg" style={{ objectFit: 'cover' }} />
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
                                    <div className="col-lg-4">
                                        <div className="position-relative mb-3">
                                            <img className="img-fluid w-100" src="img/news-500x280-5.jpg" style={{ objectFit: 'cover' }} />
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
                                    <div className="col-lg-4">
                                        <div className="position-relative mb-3">
                                            <img className="img-fluid w-100" src="img/news-500x280-6.jpg" style={{ objectFit: 'cover' }} />
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
                                    <div className="col-lg-4">
                                        <div className="position-relative mb-3">
                                            <img className="img-fluid w-100" src="img/news-500x280-6.jpg" style={{ objectFit: 'cover' }} />
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
                            </div>
                            <div className="col-lg-4 pt-3 pt-lg-0">
                                <div className="pb-3">
                                    <div className="bg-light py-2 px-4 mb-3">
                                        <h3 className="m-0">TẶNG 1000 EBOOK</h3>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <img src="img/news-100x100-1.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                        <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
                                            <div className="mb-1" style={{ fontSize: '13px' }}>
                                                <a href>Chứng khoán cho NĐT mới</a>
                                                <span className="px-1">/</span>
                                                <span>10-11-2023</span>
                                            </div>
                                            <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu Hiệu Quả</a>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <img src="img/news-100x100-2.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                        <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
                                            <div className="mb-1" style={{ fontSize: '13px' }}>
                                                <a href>Chứng khoán cho NĐT mới</a>
                                                <span className="px-1">/</span>
                                                <span>10-11-2023</span>
                                            </div>
                                            <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu Hiệu Quả</a>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <img src="img/news-100x100-2.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                        <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
                                            <div className="mb-1" style={{ fontSize: '13px' }}>
                                                <a href>Chứng khoán cho NĐT mới</a>
                                                <span className="px-1">/</span>
                                                <span>10-11-2023</span>
                                            </div>
                                            <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu Hiệu Quả</a>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <img src="img/news-100x100-3.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                        <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
                                            <div className="mb-1" style={{ fontSize: '13px' }}>
                                                <a href>Chứng khoán cho NĐT mới</a>
                                                <span className="px-1">/</span>
                                                <span>10-11-2023</span>
                                            </div>
                                            <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu Hiệu Quả</a>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <img src="img/news-100x100-4.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                        <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
                                            <div className="mb-1" style={{ fontSize: '13px' }}>
                                                <a href>Chứng khoán cho NĐT mới</a>
                                                <span className="px-1">/</span>
                                                <span>10-11-2023</span>
                                            </div>
                                            <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu Hiệu Quả</a>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <img src="img/news-100x100-5.jpg" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                        <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
                                            <div className="mb-1" style={{ fontSize: '13px' }}>
                                                <a href>Chứng khoán cho NĐT mới</a>
                                                <span className="px-1">/</span>
                                                <span>10-11-2023</span>
                                            </div>
                                            <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu Hiệu Quả</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}