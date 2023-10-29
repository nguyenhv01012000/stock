import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'
import Axios from 'axios';
import NewsSmall from '../News/NewsSmall';

function NewsAds(props) {

  const [newsLatest, setNewsLatest] = useState([]);
  const [newsView, setNewsView] = useState([]);

  useEffect(() => {
    let config = {
      params: {
        page: 0,
        limit: 4,
        sort: "latest"
      },
    }
    Axios.get(`http://localhost:4000/news`, config)
      .then(res => {
        const arr = [...res.data]
        setNewsLatest(arr)
      }
      )
    config = {
      params: {
        page: 0,
        limit: 4,
        sort: "view"
      },
    }
    Axios.get(`http://localhost:4000/news`, config)
      .then(res => {
        const arr = [...res.data]
        setNewsView(arr)
      }
      )
  }, [])

  return (
    <div className="col-lg-4 pt-3 pt-lg-0">
      {/* Ads Start */}
      <div className="mb-3 pb-3">
        <a href><img className="img-fluid" src="https://cophieux.com/wp-content/uploads/2023/05/BANNER-KHOA-HOC-2023-GIF.gif" alt="" /></a>
      </div>
      {/* Ads End */}
      {/* Ads Start */}
      <div className="mb-3 pb-3">
        <a href><img className="img-fluid" src="https://cophieux.com/wp-content/uploads/2022/05/Tu-van-dau-tu-0522-gif.gif" alt="" /></a>
      </div>
      {/* Ads End */}
      {/* Popular News Start */}
      <div className="pb-3">
        <div className="bg-light py-2 px-4 mb-3">
          <h3 className="m-0">ĐỌC NHIỀU</h3>
        </div>
        {
          newsView.map((item, index) => {
            return (
              <NewsSmall
                key={index}
                news={item}
              />
            )
          })
        }
      </div>
      {/* Popular News End */}
      {/* Popular News Start */}
      <div className="pb-3">
        <div className="bg-light py-2 px-4 mb-3">
          <h3 className="m-0">MỚI NHẤT</h3>
        </div>
        {
          newsLatest.map((item, index) => {
            return (
              <NewsSmall
                key={index}
                news={item}
              />
            )
          })
        }
      </div>
      {/* Popular News End */}
    </div>
  )
}
export default withRouter(NewsAds);