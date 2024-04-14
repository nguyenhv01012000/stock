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
            const date = new Date(news.newDate)
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            setDate(`${day}-${monthNames[month]}-${year}`)
        }
    }, [])

    function toNonAccentVietnamese(str) {
        str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/Đ/g, "D");
        str = str.replace(/đ/g, "d");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
        return str.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }

    return (
        <div className="d-flex mb-3" style={{ cursor: "pointer" }}
        >
            <Link className="h6 m-0" to={`/news/detail/${toNonAccentVietnamese(news.newTitle)}`}> <img src={news.newImg} style={{ width: '100px', height: '100px' }} /></Link>
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
                <div className="mb-1" style={{ fontSize: '13px' }}>
                    <Link to={`/news/category/${news.newCate}`}>{news.newCate}</Link>
                    <span className="px-1">/</span>
                    <span>{date}</span>
                </div>
                <Link className="h6 m-0" to={`/news/detail/${toNonAccentVietnamese(news.newTitle)}`} style={{fontWeight: "bold"}}>{news.newTitle}</Link>
            </div>
        </div>
    )
}
export default withRouter(NewsSmall);