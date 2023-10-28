import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../App.css'
import '../../Styles/News.css'
import News from './News';
import draftToHtml from "draftjs-to-html";
import { EditorState, ContentState, convertToRaw, convertFromHTML, convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { convertToHTML } from 'draft-convert';


export default function NewsContent(props) {

    const news = props.news
    const [newsList, setNewsList] = useState([])
    const [test, setTest] = useState("")


    useEffect(()=>{ 
        if (news && news.newContent) {
            let a = EditorState.createWithContent(convertFromRaw(JSON.parse(news.newContent)))
            setTest(draftToHtml(convertToRaw(a.getCurrentContent())).replaceAll("none", "center"))
            //setTest(stateToHTML(a.getCurrentContent()))

            Axios.get(`http://localhost:4000/news`)
            .then(res => { 
                const arr = []
                for (let i in res.data) { 
                    if (res.data[i]._id !== news._id) { 
                        if (res.data[i].newCate === news.newCate) {
                            arr.push(res.data[i])
                        } else {
                            arr.push(res.data[i])
                        }
                    }
                }
                setNewsList(arr)
            }
        )
        }
    },[props.news])  

    return (
        <div className="NewsContent">
            {
                news && 
                <div className="newscontent-text"
                    dangerouslySetInnerHTML={{__html: test}}
                >
                </div>
            }
            <div className="invitejoin-title">
                <p>Những blog khác...</p>
            </div>
            <div className="productrecomend-list flex">
                {
                    newsList.slice(0,4).map((item, index) => {
                        return (
                            <News
                                key={index}
                                news={item}
                            />
                        )
                    })
                } 
            </div> 
            <div className="line"></div>
        </div>
    )
}