import React, { useEffect, useState } from 'react'
import '../../App.css'
import '../../Styles/Home.css'
import NewsAds from '../News/NewsAds'
import { Link, withRouter } from 'react-router-dom'
import Axios from 'axios';
import CourseItem from './CourseItem'
import { BACKEND } from '../../env'
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';

export default function CourseList(props) {

  const [courseView, setCourseView] = useState([]);
  const [courseLatest, setCourseLatest] = useState([]);
  const [isActive1, setIsActive1] = useState(false)
  const [isActive2, setIsActive2] = useState(false)

  useEffect(() => {
    setIsActive1(() => true)
    setIsActive2(() => true)
    window.scrollTo(0, 0)

    let config = {
      params: {
        page: 0,
        limit: 9,
        sort: "view"
      },
    }
    Axios.get(BACKEND + `/products`, config)
      .then(res => {
        const arr = [...res.data.products]
        setCourseView(arr)
        setIsActive1(() => false)
      }
      )
    config = {
      params: {
        page: 0,
        limit: 9,
        sort: "latest"
      },
    }
    Axios.get(BACKEND + `/products`, config)
      .then(res => {
        const arr = [...res.data.products]
        setCourseLatest(arr)
        setIsActive2(() => false)
      }
      )
  }, [])

  return (
    <div>
      {/* Breadcrumb Start */}
      <div className="container-fluid" style={{ marginTop: '100px' }}>
        <div className="container">
          <nav className="breadcrumb bg-transparent m-0 p-0">
            <Link className="breadcrumb-item" to="/">Trang chủ</Link>
            <span className="breadcrumb-item active">Khóa Học</span>
          </nav>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* News With Sidebar Start */}
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
                      <h3 className="m-0">TOP BÁN CHẠY</h3>
                      <Link className="text-secondary font-weight-medium text-decoration-none" to="course-category/TOP BÁN CHẠY">Xem Tất Cả</Link>
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
              <LoadingOverlay
                active={isActive1}
                spinner={<BounceLoader />}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                      <h3 className="m-0">KHÓA HỌC MỚI RA MẮT</h3>
                      <Link className="text-secondary font-weight-medium text-decoration-none" to="course-category/KHÓA HỌC MỚI RA MẮT">Xem Tất Cả</Link>
                    </div>
                  </div>
                  {courseLatest &&
                    courseLatest.map((item, index) => {
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
            </div>
            <NewsAds />
          </div>
        </div>
      </div>
      {/* News With Sidebar End */}
    </div>
  )
}