import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'
import NewsAds from './NewsAds'
import Axios from 'axios';
import News from '../News/News';

function NewsCategory(props) {

    const category = props.category

    const [newsView, setNewsView] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
        let config = {
            params: {
                page: 0,
                limit: 9,
                sort: category
            },
        }
        Axios.get(`http://localhost:4000/news`, config)
            .then(res => {
                const arr = [...res.data]
                setNewsView(arr)
            }
            )
    }, [category])

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
                    <NewsAds />
                </div>
            </div>
        </div>
    </div>
    )
}
export default withRouter(NewsCategory);