import React, { useEffect, useState } from 'react'
import '../../App.css'
import '../../Styles/Home.css'
import NewsAds from '../News/NewsAds'
import { Link, withRouter } from 'react-router-dom'
import draftToHtml from "draftjs-to-html";
import { EditorState, ContentState, convertToRaw, convertFromHTML, convertFromRaw } from "draft-js";
import ReactQuill from 'react-quill'
export default function CourseInfo(props) {

  const course = props.course

  const [test, setTest] = useState("")

  useEffect(() => {
   
  }, [props.course])

  return (
    <div>
      {/* Breadcrumb Start */}
      <div className="container-fluid" style={{ marginTop: '100px', marginBottom: '10px' }}>
        <div className="container">
          <nav className="breadcrumb bg-transparent m-0 p-0">
            <Link className="breadcrumb-item" to="/">Trang chủ</Link>
            <a className="breadcrumb-item" href="course.html">Khóa Học</a>
            <span className="breadcrumb-item active">{course.productName}</span>
          </nav>
        </div>
      </div>
      {/* Breadcrumb End */}
      <div className="u-course-highlight">
        <div className="container">
          <div className="u-detail-block-title">
            <h1 itemProp="itemReviewed">
              <span itemProp="name" style={{ color: 'white' }}>{course.productName}</span>
            </h1>
            <div className="u-detail-desc" itemProp="description">{course.productTitle}</div>
            <div className="u-detail-tea" itemProp="author">
              <img className="picture-teacher-circle" src={course.teacherImg} align loading="lazy" />
              <a href="teacher/mai-xuan-huy-huy-quan-hoa"> <span itemProp="name">{course.teacherName}</span></a>
            </div>
            {/* <div className="u-detail-rate">
              <span className="star-rate"><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /></span>
              <span>47</span>
              Đánh giá
            </div>
            <div className="u-detail-students">
              <span>
                <i className="fa fa-users" aria-hidden="true" /> {course.productSold} Học viên </span>
            </div> */}
          </div>
          <div className="container-fluid">
            <div>
              <div className="scroll-bar-detail" style={{ display: 'none' }}>
                <div className="container">
                  {/* <div className="u-detail-rate">
                    <span className="star-rate"><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /></span>
                    <span>47</span>
                    Đánh giá
                  </div>
                  <div className="u-detail-students">
                    <span>
                      &nbsp;<i className="fa fa-users" aria-hidden="true" /> {course.productSold} Học viên </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-3" style={{ marginTop: '10px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="u-detail-block-left">
                <div className="u-video">
                  <div className="embed-responsive embed-responsive-16by9" style={{}}>
                    <div dangerouslySetInnerHTML={{__html: course.productVideo}}></div>
                  </div>
                </div>
                <div className="hidden-lg">
                  <div className="block-buy">
                    <div className="u-sm-left">
                      <div className="block-price">
                        <div><span className="big-price">{course.productFinalPrice && course.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span><span className="small-price2">{course.productPrice && course.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span></div>
                        <div className="discount-price2" data-percent={29}>Tiết kiệm: <span className="discount_percent">{course.productSale}% </span></div>
                      </div>
                      <div className="time-uudai"><i className="fa fa-tachometer" aria-hidden="true" /> Thời
                        gian ưu đãi còn 1 ngày</div><div className="block-btn">
                      
                        <Link course_id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" to={"/checkout/"+course._id} className="btn-buy-course" rel="nofollow">Đăng ký ngay</Link>
                        <div className="change-register text-success" style={{ transform: 'translateY(0px)' }}>
                          {/* <i className="fa fa-user-plus text-danger" />
                          <span className="name_register">Nguyễn Khải</span>
                          <span>vừa đăng ký</span> */}
                        </div>
                        <div className="pending-register hide" />
                      </div>
                    </div>
                    <div className="u-sm-right" style={{}}>
                      <div className="block-ulti">
                        <ul style={{ marginLeft: 0 }}>
                          <li><i className="fa fa-clock-o" aria-hidden="true" /> Thời lượng:
                            <p>{course.productTimeCourse}</p>
                          </li>
                          <li><i className="fa fa-play-circle" aria-hidden="true" /> Giáo trình:
                            <p>{course.productBookNumber} bài giảng</p>
                          </li>
                          <li><i className="fa fa-history" aria-hidden="true" /> Sở hữu khóa học trọn
                            đời</li>
                          <li><i className="fa fa-certificate" aria-hidden="true" />Cấp chứng nhận hoàn
                            thành </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-detail hidden-xs">
                  <ul>
                    <ol><a href="#u-des-course">Giới thiệu</a></ol>
                    <ol><a href="#u-list-course">Nội dung khóa học</a></ol>
                    <ol><a href="#u-course-teacher">Thông tin giảng viên</a></ol>
                    <ol><a href="#u-rate-hv">Đánh giá</a></ol>
                  </ul>
                </div>
                <div className="u-learn-what">
                  <p className="h3_title">Bạn sẽ học được gì</p>
                  <div className="content">
                    <div className="row">
                      {course.productLearn &&
                        course.productLearn.map((item, index) => {
                          return (
                            <div className="col-sm-6 form-group" style={{ marginTop: '0px' }}>
                              <div className="title-learn" style={{ lineHeight: '21px', marginBottom: '0px', fontSize: '15px' }}>
                                {item}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className="u-des-course" id="u-des-course" style={{ fontSize: '15px' }}>
                  <p className="detail_h2_title">Giới thiệu khóa học</p>
                  <div className="quill-css">
                    <ReactQuill value={course.productDes} readOnly theme={"bubble"} />
                  </div>
                </div>
                <div className="u-list-course" id="u-list-course">
                  <p className="detail_h2_title">Nội dung khóa học</p>
                  <div className="content">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        {/* phần */}
                        {course.productContent &&
                          course.productContent.map((item, index) => {
                            return (<div>
                              <div className="panel-heading">
                                <div className="row">
                                  <div className="col-md-12" style={{paddingLeft: "0px"}}>
                                    <h2 className="panel-title">
                                      <a data-toggle="collapse" data-parent="#accordion" href={"#collapse" + index} className aria-expanded="true">
                                        <i className="fa fa-minus-square" aria-hidden="true"/>
                                        Phần {index + 1}: {item}</a>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              {/* bài */}
                              <div id={"collapse" + index} className="panel-collapse collapse in show" aria-expanded="true">
                                <div className="panel-body">
                                  {course.productSubContent[index] &&
                                    course.productSubContent[index].map((subItem, subIndex) => {
                                      return (
                                        <div className="col">
                                          <div className="container-fluid">
                                            <div className="row">
                                              <div className="col-xs-7 col-md-10">
                                                <div className="title">
                                                  <a>
                                                    <i className="fa fa-play-circle" aria-hidden="true" data-toggle="popover" data-content="Khóa học video" data-original-title title /> Bài {subIndex + 1}:
                                                    {subItem} </a>
                                                </div>
                                              </div>
                                              <div className="col-xs-3 col-md-2">
                                                {/* <div className="time">02:03</div> */}
                                              </div>
                                            </div>
                                          </div><a>
                                          </a>
                                        </div>
                                      )
                                    })
                                  }
                                </div>
                              </div>
                            </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 hidden-xs">
              <div className="block-buy block-buy-course-detail">
                <div className="u-sm-left">
                  <div className="block-price">
                    <div><span className="big-price" data-gtm-vis-recent-on-screen12808849_131={4095} data-gtm-vis-first-on-screen12808849_131={4095} data-gtm-vis-total-visible-time12808849_131={100} data-gtm-vis-has-fired12808849_131={1}>{course.productFinalPrice && course.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span><span className="small-price2">{course.productPrice && course.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span></div>
                    <div className="discount-price2" data-percent={29}>Tiết kiệm: <span className="discount_percent">{course.productSale}% </span></div>
                  </div>
                  <div className="time-uudai"><i className="fa fa-tachometer" aria-hidden="true" /> Thời gian ưu đãi
                    còn 1 ngày</div>
                  <div className="block-btn">
                  <Link course_id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" to={"/checkout/"+course._id} className="btn-buy-course" rel="nofollow">Đăng ký ngay</Link>
                    <div className="change-register text-success" style={{ transform: 'translateY(0px)' }}>
                      {/* <i className="fa fa-user-plus text-danger" />
                      <span className="name_register">Bùi Thành Tín</span>
                      <span>vừa đăng ký</span> */}
                    </div>
                    <div className="pending-register hide" />
                  </div>
                </div>
                <div className="u-sm-right">
                  <div className="block-ulti">
                    <ul style={{ marginLeft: 0 }}>
                      <li><i className="fa fa-clock-o" aria-hidden="true" />Thời lượng:
                        <p>{course.productTimeCourse}</p>
                      </li>
                      <li><i className="fa fa-play-circle" aria-hidden="true" /> Giáo trình:
                        <p>{course.productBookNumber} bài giảng</p>
                      </li>
                      <li><i className="fa fa-history" aria-hidden="true" /> Sở hữu khóa học trọn đời</li>
                      <li><i className="fa fa-certificate" aria-hidden="true" />Cấp chứng nhận hoàn thành
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}