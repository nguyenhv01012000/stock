import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function NewsSmall(props) {

    const news = props.news

    const [date, setDate] = useState("")

    useEffect(() => {
        const monthNames = [
            "1", "2", "3", "4", "5", "6",
            "7", "8", "9", "10", "11", "12"
        ];
        if (news) {
            const date = new Date(news.newTime)
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            setDate(`${day}-${monthNames[month]}-${year}`)
        }
    }, [])

    return (
        <div className="d-flex mb-3" style={{ cursor: "pointer" }}
        >
            <Link className="h6 m-0" to={`/news/detail/${news._id}`}> <img src={news.newImg} style={{ width: '100px', height: '100px', objectFit: 'cover' }} /></Link>
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
                <div className="mb-1" style={{ fontSize: '13px' }}>
                    <Link to={`/news/category/${news.newCate}`}>{news.newCate}</Link>
                    <span className="px-1">/</span>
                    <span>{date}</span>
                </div>
                <Link className="h6 m-0" to={`/news/detail/${news._id}`} style={{fontWeight: "bold"}}>{news.newTitle}</Link>
            </div>
        </div>
    )
}
export default withRouter(NewsSmall);