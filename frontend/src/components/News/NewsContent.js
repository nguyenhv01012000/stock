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


export default function NewsContent(props) {

    const monthNames = [
        "1", "2", "3", "4", "5", "6",
        "7", "8", "9", "10", "11", "12"
    ];
    const news = props.news
    const newsView = props.newsView

    const [newsList, setNewsList] = useState([])
    const [test, setTest] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {
        if (news && news.newContent) {
            let a = EditorState.createWithContent(convertFromRaw(JSON.parse(news.newContent)))
            setTest(draftToHtml(convertToRaw(a.getCurrentContent())).replaceAll("none", "center"))
            const date = new Date(news.newTime)
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            setDate(`${day}-${monthNames[month]}-${year}`)
        }
    }, [props.news])

    return (
        <div>
            <div className="container-fluid" style={{ marginTop: '100px' }}>
                <div className="container">
                    <nav className="breadcrumb bg-transparent m-0 p-0">
                        <Link className="breadcrumb-item" to="/">Trang chủ</Link>
                        <Link className="breadcrumb-item" to={`/news/category/${news.newCate}`}>{news.newCate}</Link>
                        <span className="breadcrumb-item active">{news.newTitle}</span>
                    </nav>
                </div>
            </div>

            <div className="container-fluid py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* News Detail Start */}
                            <div className="position-relative mb-3">
                                <img className="img-fluid w-100 news-content-img" src={news.newImg} style={{ objectFit: 'cover' }} />
                                <div className="overlay position-relative bg-light">
                                    <div className="mb-3">
                                        <a href>{news.newCate}</a>
                                        <span className="px-1">/</span>
                                        <span>{date}</span>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">{news.newTitle}</h3>
                                        <p>{news.newIntro}</p>

                                        <div className="mb-5">
                                            <h3>Đọc thêm Bài viết XỊN:</h3>
                                            {
                                                newsView.map((item, index) => {
                                                    return (
                                                        <div>
                                                        <Link href="https://cophieux.com/tan-man-ve-dinh-gia-co-phieu-nhung-dieu-can-luu-y/">{item.newTitle}</Link>
                                                        <br/>
                                                        </div>
                                                    )
                                                })
                                            }
                                    
                                        </div>
                                        <div className="mb-3 pb-3">
                                            <a href><img className="img-fluid" src="https://cophieux.com/wp-content/uploads/2023/05/BANNER-KHOA-HOC-2023-GIF.gif" alt="" /></a>
                                        </div>
                                        {
                                            news &&
                                            <div className="newscontent-text"
                                                dangerouslySetInnerHTML={{ __html: test }}
                                            >
                                            </div>
                                        }
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


        </div>
    )
}