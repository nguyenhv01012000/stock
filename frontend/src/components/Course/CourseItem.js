import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function CourseItem(props) {

    const course = props.course 

    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="position-relative mb-3 course-popover">
          <Link to={"/course/" + encodeURIComponent(course.productName)} className="course-box-slider pop">
            <span className="sale-off">-{course.productSale}%</span>
            <div className="img-course">
              <img className="img-responsive " src={course.productImg} alt={course.productName} style={{ height:'140px'}} loading="lazy" />
            </div>
            <div className="content-course">
              <h3 className="title-course">
                <p>{course.productName}</p>
              </h3>
              <div className="name-gv">
                <b style={{ float: 'left' }}>{course.teacherName}</b>
                <span className="price-b">{course.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<sup>đ</sup></span>
              </div>
            </div>
            <div className="price-course" style={{ clear: 'both' }}>
              {/* <div className="rate-combo">
                <p>
                  <span className="star-rate">
                    <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                </p>
              </div> */}
              <span className="price-a">{course.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<sup>đ</sup></span>
            </div>
          </Link>
          <div className="detail-popover">
            <div className="popover-content">
              <a href="detail-course.html">
                <h3 className="title-course">{course.productName}</h3>
              </a>
              <div className="course-complement">
              </div>
              <p className="description">{course.productTitle}</p>
              <ul>
              {course.productLearn &&
                  course.productLearn.map((item, index) => {
                    return (
                        <li><span className="desc-checked" /><p>{item}</p></li>
                    )
                  })
                }
              </ul>
              <div className="block-btn">
              <Link course_id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" to={"/checkout/"+course._id} className="btn-buy-course" rel="nofollow">Đăng ký ngay</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default withRouter(CourseItem);