import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'
import draftToHtml from "draftjs-to-html";
import { EditorState, ContentState, convertToRaw, convertFromHTML, convertFromRaw } from "draft-js";
function News(props) {

    const news = props.news 

    const [date, setDate] = useState("")
    const [intro, setIntro] = useState("")

    useEffect(()=>{
        const monthNames = [
            "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
            "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
        ];
        if (news) {
            const date = new Date(news.newTime)
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            setDate(`${day} ${monthNames[month]} ${year}`)
        }
        if (news && news.newIntro) {
            let a = EditorState.createWithContent(convertFromRaw(JSON.parse(news.newIntro)))
            setIntro(draftToHtml(convertToRaw(a.getCurrentContent())).replaceAll("none", "center"))
        }
    },[news])

    return (
        <div 
            className="news"
            onClick={()=>{ 
                props.history.push(`/news/detail/${news._id}`)
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
                <div className="news-content">{intro.replace(/<[^>]+>/g, '')}</div>
            }
            {news &&
                <div className="news-readmore">Đọc Thêm...</div>
            }
        </div>
    )
}
export default withRouter(News);