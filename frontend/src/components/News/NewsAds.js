import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'

function NewsAds(props) {

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
          <div className="d-flex mb-3">
            <img src="img/news-100x100-1.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: '100px'}}>
              <div className="mb-1" style={{fontSize: '13px'}}>
                <a href>Chứng khoán cho NĐT mới</a>
                <span className="px-1">/</span>
                <span>10-11-2023</span>
              </div>
              <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu
                Hiệu Quả</a>
            </div>
          </div>
          <div className="d-flex mb-3">
            <img src="img/news-100x100-2.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: '100px'}}>
              <div className="mb-1" style={{fontSize: '13px'}}>
                <a href>Chứng khoán cho NĐT mới</a>
                <span className="px-1">/</span>
                <span>10-11-2023</span>
              </div>
              <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu
                Hiệu Quả</a>
            </div>
          </div>
          <div className="d-flex mb-3">
            <img src="img/news-100x100-3.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: '100px'}}>
              <div className="mb-1" style={{fontSize: '13px'}}>
                <a href>Chứng khoán cho NĐT mới</a>
                <span className="px-1">/</span>
                <span>10-11-2023</span>
              </div>
              <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu
                Hiệu Quả</a>
            </div>
          </div>
          <div className="d-flex mb-3">
            <img src="img/news-100x100-4.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: '100px'}}>
              <div className="mb-1" style={{fontSize: '13px'}}>
                <a href>Chứng khoán cho NĐT mới</a>
                <span className="px-1">/</span>
                <span>10-11-2023</span>
              </div>
              <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu
                Hiệu Quả</a>
            </div>
          </div>
          <div className="d-flex mb-3">
            <img src="img/news-100x100-5.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: '100px'}}>
              <div className="mb-1" style={{fontSize: '13px'}}>
                <a href>Chứng khoán cho NĐT mới</a>
                <span className="px-1">/</span>
                <span>10-11-2023</span>
              </div>
              <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu
                Hiệu Quả</a>
            </div>
          </div>
        </div>
        {/* Popular News End */}
        {/* Popular News Start */}
        <div className="pb-3">
          <div className="bg-light py-2 px-4 mb-3">
            <h3 className="m-0">MỚI NHẤT</h3>
          </div>
          <div className="d-flex mb-3">
            <img src="img/news-100x100-1.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: '100px'}}>
              <div className="mb-1" style={{fontSize: '13px'}}>
                <a href>Chứng khoán cho NĐT mới</a>
                <span className="px-1">/</span>
                <span>10-11-2023</span>
              </div>
              <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu
                Hiệu Quả</a>
            </div>
          </div>
          <div className="d-flex mb-3">
            <img src="img/news-100x100-2.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: '100px'}}>
              <div className="mb-1" style={{fontSize: '13px'}}>
                <a href>Chứng khoán cho NĐT mới</a>
                <span className="px-1">/</span>
                <span>10-11-2023</span>
              </div>
              <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu
                Hiệu Quả</a>
            </div>
          </div>
          <div className="d-flex mb-3">
            <img src="img/news-100x100-3.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: '100px'}}>
              <div className="mb-1" style={{fontSize: '13px'}}>
                <a href>Chứng khoán cho NĐT mới</a>
                <span className="px-1">/</span>
                <span>10-11-2023</span>
              </div>
              <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu
                Hiệu Quả</a>
            </div>
          </div>
          <div className="d-flex mb-3">
            <img src="img/news-100x100-4.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: '100px'}}>
              <div className="mb-1" style={{fontSize: '13px'}}>
                <a href>Chứng khoán cho NĐT mới</a>
                <span className="px-1">/</span>
                <span>10-11-2023</span>
              </div>
              <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu
                Hiệu Quả</a>
            </div>
          </div>
          <div className="d-flex mb-3">
            <img src="img/news-100x100-5.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: '100px'}}>
              <div className="mb-1" style={{fontSize: '13px'}}>
                <a href>Chứng khoán cho NĐT mới</a>
                <span className="px-1">/</span>
                <span>10-11-2023</span>
              </div>
              <a className="h6 m-0" href="single.html">11+ Công thức ĐỊNH GIÁ cổ phiếu: Đơn Giản &amp; Siêu
                Hiệu Quả</a>
            </div>
          </div>
        </div>
        {/* Popular News End */}
      </div>
    )
}
export default withRouter(NewsAds);