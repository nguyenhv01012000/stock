import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'
import NewsAds from './NewsAds'
import Axios from 'axios';
import News from '../News/News';
import { Link } from 'react-router-dom/cjs/react-router-dom'

function NewsCategory(props) {

    const category = props.category

    const [newsView, setNewsView] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([1]);
    const [count, setCount] = useState(1);

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
                const arr = [...res.data.news]
                setNewsView(arr)
                setCount(Math.ceil(Number(res.data.count) / 9))
                let pageNumbers = []
                for (let i = 1; i <= Math.min(Math.ceil(Number(res.data.count) / 9), 5); i++) {
                    pageNumbers.push(i);
                }
                setPages(pageNumbers)
            }
            )
    }, [category])

    const choosePage = (number) => {
        if(number == 1){
            let pagesClone = pages;
            pagesClone.shift();
            pagesClone.push(pagesClone[3] + 1);
            console.log(pagesClone)
            setPages(pagesClone);
        }else{
            let pagesClone = pages;
            pagesClone.pop();
            pagesClone.unshift(pagesClone[0] - 1);
            setPages(pagesClone);
        }
        if(currentPage + number >= 1 && currentPage + number <= 5) setCurrentPage(currentPage + number);
    }

    return (<div>
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
                                        <li className={pages[0] == 1 ? "page-item disabled" : "page-item" }>
                                            <div className="page-link" aria-label="Previous" onClick={() => choosePage(-1)}>
                                                <span className="fa fa-angle-double-left" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                            </div>
                                        </li>
                                        {
                                            pages.map((item, index) => {
                                                return (
                                                    <li className={item == currentPage ? "page-item active": "page-item"}><div className="page-link" onClick={() => setCurrentPage(item)}>{item}</div></li>
                                                )
                                            })
                                        }
                                        <li className={pages[pages.length -1] == count ? "page-item disabled" : "page-item" }>
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