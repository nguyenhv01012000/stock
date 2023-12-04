import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'
import Axios from 'axios';
import NewsAds from '../News/NewsAds';
import CourseItem from './CourseItem';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { BACKEND } from '../../env';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';

function CourseCategory(props) {

    const category = props.category

    const [courseView, setCourseView] = useState([]);
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
        Axios.get(BACKEND + `/products`, config)
            .then(res => {
                const arr = [...res.data.products]
                setCourseView(arr)
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
            setCurrentPage(pageNumbers[pageNumbers.length - 1]);
        }
    }

    useEffect(() => {
        setIsActive1(() => true)

        if (currentPage == pages[pages.length - 1] && currentPage < count) {
            let pageNumbers = []
            for (let i = Math.max(currentPage - 3, 1); i <= Math.min(currentPage + 1, count); i++) {
                pageNumbers.push(i);
            }
            setPages(pageNumbers)
        }
        if (currentPage == pages[0] && currentPage > 1) {
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
        Axios.get(BACKEND + `/products`, config)
            .then(res => {
                const arr = [...res.data.products]
                setCourseView(arr)
                setIsActive1(() => false)

            }
            )
    }, [currentPage])

    return (<div>
        {/* Breadcrumb Start */}
        <div className="container-fluid" style={{ marginTop: '100px' }}>
            <div className="container">
                <nav className="breadcrumb bg-transparent m-0 p-0">
                    <Link className="breadcrumb-item" to="/">Trang chủ</Link>
                    <Link className="breadcrumb-item" to="/course">Khóa Học</Link>
                    <span className="breadcrumb-item active">{category}</span>
                </nav>
            </div>
        </div>
        {/* Breadcrumb End */}
        <div className="container-fluid py-3">
            <div className="container">
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
                                {courseView &&
                                    courseView.map((item, index) => {
                                        return (
                                            <CourseItem
                                                key={index}
                                                course={item}
                                            />
                                        )
                                    })
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
export default withRouter(CourseCategory);