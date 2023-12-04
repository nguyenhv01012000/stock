import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../App.css'
import '../../Styles/News.css'
import News from './News';
import draftToHtml from "draftjs-to-html";
import { EditorState, ContentState, convertToRaw, convertFromHTML, convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { convertToHTML } from 'draft-convert';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom';
import NewsAds from './NewsAds';
import { BACKEND } from '../../env';
import draftToMarkdown from 'draftjs-to-markdown';
import ReactQuill from 'react-quill';
import TOC from './TOC';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';


export default function NewsContent1(props) {

    const monthNames = [
        "1", "2", "3", "4", "5", "6",
        "7", "8", "9", "10", "11", "12"
    ];

    const [news, setNews] = useState({})
    const [isActive, setIsActive] = useState(false)


    useEffect(() => {
        setIsActive(() => true)
        let config = {
            params: {
                page: 0,
                limit: 1,
                sort: props.match.params.id
            },
        }
        Axios.get(BACKEND + `/news`, config)
            .then(res => {
                const arr = [...res.data.news]
                if (arr.length) setNews(arr[0])
                else setNews({})
                setIsActive(()=>false)
            })
        if (news._id) {
            Axios.post(BACKEND + `/news/update/${news._id}`, {
                countId: news._id
            })
        }
    }, [props.match.params.id])

    return (
        <div>
            <Header></Header>
            <LoadingOverlay
                active={isActive}
                spinner={<BounceLoader />}
            >
                           <div className="container-fluid" style={{ marginTop: '100px' }}>
                <div className="container">
                    <nav className="breadcrumb bg-transparent m-0 p-0">
                        <Link className="breadcrumb-item" to="/">Trang chủ</Link>
                        <span className="breadcrumb-item active">{news.newCate}</span>
                    </nav>
                </div>
            </div>

            <div className="news123 container-fluid py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* News Detail Start */}
                            <div className="position-relative mb-3">
                                <div className="overlay position-relative bg-light">
                                    {/* <div className="mb-3">
                                        <a href style={{fontSize:"16px"}}>{news.newCate}</a>
                                        <span className="px-1">/</span>
                                        <span style={{fontSize:"16px"}}>{date}</span>
                                    </div> */}
                                    <h3 className="mb-3">{news.newTitle}</h3>
                                    <div className="quill-css"
                                    >
                                        <ReactQuill value={news.newIntro} readOnly theme={"bubble"} />
                                    </div>
                                    <TOC selector=".ql-editor" data={news} />
                                    <div className="newscontent-text"
                                    >
                                        <ReactQuill value={news.newContent} readOnly theme={"bubble"} />
                                    </div>

                                </div>
                            </div>
                            {/* News Detail End */}
                            {/* Comment List Start */}
                            {/* <div className="bg-light mb-3" style={{ padding: '30px' }}>
                                <h3 className="mb-4">3 Comments</h3>
                                <div className="media mb-4">
                                    <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: '45px' }} />
                                    <div className="media-body">
                                        <h6><a href>John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                            Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                            consetetur at sit.</p>
                                        <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                    </div>
                                </div>
                                <div className="media">
                                    <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: '45px' }} />
                                    <div className="media-body">
                                        <h6><a href>John Doe</a> <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                            Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                            consetetur at sit.</p>
                                        <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                        <div className="media mt-4">
                                            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: '45px' }} />
                                            <div className="media-body">
                                                <h6><a href>John Doe</a> <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                                    labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                                    eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                                                    ipsum diam tempor consetetur at sit.</p>
                                                <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* Comment List End */}
                            {/* Comment Form Start */}
                            {/* <div className="bg-light mb-3" style={{ padding: '30px' }}>
                                <h3 className="mb-4">Leave a comment</h3>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name *</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="website">Website</label>
                                        <input type="url" className="form-control" id="website" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea id="message" cols={30} rows={5} className="form-control" defaultValue={""} />
                                    </div>
                                    <div className="form-group mb-0">
                                        <input type="submit" defaultValue="Leave a comment" className="btn btn-success font-weight-semi-bold py-2 px-3" />
                                    </div>
                                </form>
                            </div> */}
                            {/* Comment Form End */}
                        </div>
                        <NewsAds />
                    </div>
                </div>
            </div>
            </LoadingOverlay>
            <Footer />
        </div >
    )
}