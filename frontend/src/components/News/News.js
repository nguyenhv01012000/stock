import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'
function News(props) {

    const news = props.news 

    const [date, setDate] = useState("")

    useEffect(()=>{
        const monthNames = [
            "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
            "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
        ];
        if (news) {
            const date = new Date(news.newDate)
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            setDate(`${day} ${monthNames[month]} ${year}`)
        }
    },[news])

    return (
        <div 
            className="news"
            onClick={()=>{ 
                props.history.push(`/news/detail/${encodeURIComponent(news.newTitle)}`)
            }}
        >
            {news &&
                <div className="news-img">
                    <img src={news.newImg} alt=""></img>
                    <div className="news-cate">{news.newCate}</div>
                </div>
            }
            {news &&
                <div className="news-time">{date}</div>
            }
            {news &&
                <div className="news-title">{news.newTitle}</div>
            }
            {news &&
                <div className="news-content">{news.newIntro.replace(/<[^>]+>/g, '')}</div>
            }
            {news &&
                <div className="news-readmore">Đọc Thêm...</div>
            }
        </div>
    )
}
export default withRouter(News);