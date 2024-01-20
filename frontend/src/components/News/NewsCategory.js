import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'
import NewsAds from './NewsAds'
import Axios from 'axios';
import News from '../News/News';
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { BACKEND } from '../../env'
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';
import {Helmet} from "react-helmet";

function NewsCategory(props) {

    const category = props.category

    const [newsView, setNewsView] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([1]);
    const [count, setCount] = useState(1);
    const amount = 9;
    const [isActive1, setIsActive1] = useState(false)


    useEffect(() => {
        setIsActive1(() => true)
        window.scrollTo(0, 0)
        let config = {
            params: {
                page: 0,
                limit: amount,
                sort: category
            },
        }
        Axios.get(BACKEND + `/news`, config)
            .then(res => {
                const arr = [...res.data.news]
                setNewsView(arr)
                setCount(Math.ceil(Number(res.data.count) / amount))
                let pageNumbers = []
                for (let i = 1; i <= Math.min(Math.ceil(Number(res.data.count) / amount), 5); i++) {
                    pageNumbers.push(i);
                }
                setPages(pageNumbers)
                setIsActive1(() => false)
            }
            )
    }, [category])

    const choosePage = (number) => {
        if (number == -1) {
            let pageNumbers = []
            for (let i = 1; i <= Math.min(count, 5); i++) {
                pageNumbers.push(i);
            }
            setPages(pageNumbers)
            setCurrentPage(pageNumbers[0]);
        } else {
            let pageNumbers = []
            for (let i = Math.max(count - 4, 1); i <= count; i++) {
                pageNumbers.push(i);
            }
            setPages(pageNumbers)
            setCurrentPage(pageNumbers[pageNumbers.length -1]);
        }
    }

    useEffect(() => {
        setIsActive1(() => true)
        if(currentPage == pages[pages.length -1] && currentPage < count){
            let pageNumbers = []
            for (let i = Math.max(currentPage - 3, 1); i <= Math.min(currentPage + 1, count); i++) {
                pageNumbers.push(i);
            }
            setPages(pageNumbers)
        }
        if(currentPage == pages[0] && currentPage > 1){
            let pageNumbers = []
            for (let i = Math.max(currentPage - 1, 1); i <= Math.min(currentPage + 3, count); i++) {
                pageNumbers.push(i);
            }
            setPages(pageNumbers)
        }
        let config = {
            params: {
                page: currentPage - 1,
                limit: amount,
                sort: category
            },
        }
        Axios.get(BACKEND + `/news`, config)
            .then(res => {
                const arr = [...res.data.news]
                setNewsView(arr)
                setIsActive1(() => false)
            }
            )
    }, [currentPage])

    return (<div>
        <Helmet>
                <title>{category}</title>
                <meta name="description" content={category} />
                <link rel="canonical" href={`https://chungkhoandomino.com/news/category/${category}`}/>
                <meta property="og:locale" content="vi_VN" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={category} />
                <meta property="og:url" content={`https://chungkhoandomino.com/news/detail/${category}`} />
                <meta property="og:image" content={category} />
            </Helmet>
        {/* Breadcrumb Start */}
        <div className="container-fluid" style={{ marginTop: '100px' }}>
            <div className="container">
                <nav className="breadcrumb bg-transparent m-0 p-0">
                    <Link className="breadcrumb-item" to="/">Trang chủ</Link>
                    <span className="breadcrumb-item active">{category}</span>
                </nav>
            </div>
        </div>
        {/* Breadcrumb End */}
        <div className="container-fluid py-3">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-8">
                        <LoadingOverlay
                            active={isActive1}
                            spinner={<BounceLoader />}
                        >
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
                            {
                                newsView.length == 0 && <div className="col"><h3 style={{display: "flex",justifyContent: "center"}}>Không có bài viết nào</h3></div>
                            }
                        </div>
                        </LoadingOverlay>
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className={pages[0] == 1 ? "page-item disabled" : "page-item"}>
                                            <div className="page-link" aria-label="Previous" onClick={() => choosePage(-1)}>
                                                <span className="fa fa-angle-double-left" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                            </div>
                                        </li>
                                        {
                                            pages.map((item, index) => {
                                                return (
                                                    <li className={item == currentPage ? "page-item active" : "page-item"}><div className="page-link" onClick={() => setCurrentPage(item)}>{item}</div></li>
                                                )
                                            })
                                        }
                                        <li className={pages[pages.length - 1] == count ? "page-item disabled" : "page-item"}>
                                            <div className="page-link" aria-label="Next" onClick={() => choosePage(1)}>
                                                <span className="fa fa-angle-double-right" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                            </div>
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