import React from 'react'
import '../../App.css'
import '../../Styles/Home.css'
import NewsAds from '../News/NewsAds'
import { Link, withRouter } from 'react-router-dom'

export default function CourseInfo(props) {

  return (
    <div>
      {/* Breadcrumb Start */}
      <div className="container-fluid" style={{ marginTop: '100px', marginBottom: '10px' }}>
        <div className="container">
          <nav className="breadcrumb bg-transparent m-0 p-0">
            <a className="breadcrumb-item" href="index.html">Trang chủ</a>
            <a className="breadcrumb-item" href="course.html">Khóa Học</a>
            <span className="breadcrumb-item active">Làm chủ photoshop cùng Huy Quần Hoa</span>
          </nav>
        </div>
      </div>
      {/* Breadcrumb End */}
      <div className="u-course-highlight">
        <div className="container">
          <div className="u-detail-block-title">
            <h1 itemProp="itemReviewed">
              <span itemProp="name" style={{ color: 'white' }}>Làm chủ photoshop cùng Huy Quần Hoa</span>
            </h1>
            <div className="u-detail-desc" itemProp="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop
              một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích,
              những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh </div>
            <div className="u-detail-tea" itemProp="author">
              <img className="picture-teacher-circle" src="https://unica.vn/uploads//March262019340pm_mai-xuan-huy-huy-quan-hoa_thumb.jpg" align loading="lazy" />
              <a href="teacher/mai-xuan-huy-huy-quan-hoa"> <span itemProp="name">Mai Xuân Huy (Huy Quần
                Hoa)</span></a>
            </div>
            <div className="u-detail-rate">
              <span className="star-rate"><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /></span>
              <span>47</span>
              Đánh giá
            </div>
            <div className="u-detail-students">
              <span>
                <i className="fa fa-users" aria-hidden="true" /> 9402 Học viên </span>
            </div>
          </div>
          <div className="container-fluid">
            <div>
              <div className="scroll-bar-detail" style={{ display: 'none' }}>
                <div className="container">
                  <div className="u-detail-rate">
                    <span className="star-rate"><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /></span>
                    <span>47</span>
                    Đánh giá
                  </div>
                  <div className="u-detail-students">
                    <span>
                      &nbsp;<i className="fa fa-users" aria-hidden="true" /> 9402 Học viên </span>
                  </div>
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
                    <iframe id="iframe-video-intro" className="embed-responsive-item img-responsive" src="https://www.youtube.com/embed/GcpU8S-aOKY?rel=0&showinfo=0" width="100%" height="auto" style={{}} scrolling="no" frameBorder={0} allowFullScreen>
                    </iframe>
                  </div>
                </div>
                <div className="hidden-lg">
                  <div className="block-buy">
                    <div className="u-sm-left">
                      <div className="block-price">
                        <div><span className="big-price">499.000đ</span><span className="small-price2">700.000đ</span></div>
                        <div className="discount-price2" data-percent={29}>Tiết kiệm: <span className="discount_percent">29% </span></div>
                      </div>
                      <div className="time-uudai"><i className="fa fa-tachometer" aria-hidden="true" /> Thời
                        gian ưu đãi còn 1 ngày</div>
                      <div className="block-btn">
                        <a course_id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" href="https://unica.vn/order/step1?id=2119" className="btn-buy-course" rel="nofollow">Đăng ký ngay</a>
                        <div className="change-register text-success" style={{ transform: 'translateY(0px)' }}>
                          <i className="fa fa-user-plus text-danger" />
                          <span className="name_register">Nguyễn Khải</span>
                          <span>vừa đăng ký</span>
                        </div>
                        <div className="pending-register hide" />
                      </div>
                    </div>
                    <div className="u-sm-right" style={{}}>
                      <div className="block-ulti">
                        <ul style={{ marginLeft: 0 }}>
                          <li><i className="fa fa-clock" aria-hidden="true" /> Thời lượng:
                            <p>07 giờ 55 phút</p>
                          </li>
                          <li><i className="fa fa-play-circle" aria-hidden="true" /> Giáo trình:
                            <p>38 bài giảng</p>
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
                  {/* <p class="h3_title">Bạn sẽ học được gì</p> */}
                  <div className="content">
                    <div className="row">
                      <div className="col-sm-6 form-group" style={{ marginTop: '0px' }}>
                        <div className="title-learn" style={{ lineHeight: '21px', marginBottom: '0px', fontSize: '15px' }}>
                          Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</div>
                      </div>
                      <div className="col-sm-6 form-group" style={{ marginTop: '0px' }}>
                        <div className="title-learn" style={{ lineHeight: '21px', marginBottom: '0px', fontSize: '15px' }}>
                          Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</div>
                      </div>
                      <div className="col-sm-6 form-group" style={{ marginTop: '0px' }}>
                        <div className="title-learn" style={{ lineHeight: '21px', marginBottom: '0px', fontSize: '15px' }}>
                          Cắt ghép ảnh cùng các idol yêu thích</div>
                      </div>
                      <div className="col-sm-6 form-group" style={{ marginTop: '0px' }}>
                        <div className="title-learn" style={{ lineHeight: '21px', marginBottom: '0px', fontSize: '15px' }}>
                          Thỏa sức sáng tạo hình ảnh, tự thực hiện các ý tưởng của bạn qua hình ảnh
                          cùng Photoshop</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-des-course" id="u-des-course" style={{ fontSize: '15px' }}>
                  <p className="detail_h2_title">Giới thiệu khóa học</p>
                  <p>Bạn tự mày mò lục lọi tài liệu tự <a href="https://unica.vn/tag/photoshop">học
                    Photoshop</a> trên mạng để phục vụ cho đam mê, cho công việc? Nhưng rồi phải bỏ cuộc
                    chán nản vì làm không đúng với bài hướng dẫn, khi gặp vấn đề trục trặc không biết hỏi
                    ai, kiến thức chắp vá không theo quy trình, lủng đoạn, mất căn bản... Tất cả những điều
                    này khiến bạn mất khá nhiều thời gian, vì vậy khóa học <strong style={{ color: 'black' }}>Làm
                      chủ Photoshop cùng
                      Huy quần hoa&nbsp;</strong>sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách
                    bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những
                    kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh từ giảng viên HUY QUẦN HOA.</p>
                  <p>Nhanh tay đăng ký khóa học để hưởng ưu đãi tốt nhất bạn nhé!</p>
                </div>
                <div className="u-list-course" id="u-list-course">
                  <p className="detail_h2_title">Nội dung khóa học</p>
                  <div className="content">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        {/* phần */}
                        <div className="panel-heading">
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" className aria-expanded="true">
                                  <i className="fa fa-minus-square" aria-hidden="true" />
                                  Phần 1: MỞ ĐẦU</a>
                              </h2>
                            </div>
                          </div>
                        </div>
                        {/* bài */}
                        <div id="collapse1" className="panel-collapse collapse in show" aria-expanded="true">
                          <div className="panel-body">
                            <div className="col">
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="col-xs-7 col-md-10">
                                    <div className="title">
                                      <a>
                                        <i className="fa fa-play-circle" aria-hidden="true" data-toggle="popover" data-content="Khóa học video" data-original-title title /> Bài 1:
                                        Lời nói đầu, cách học </a>
                                    </div>
                                  </div>
                                  <div className="col-xs-3 col-md-2">
                                    <div className="time">02:03</div>
                                  </div>
                                </div>
                              </div><a>
                              </a>
                            </div><a>
                            </a>
                            <div className="col"><a>
                            </a>
                              <div className="container-fluid"><a>
                              </a>
                                <div className="row"><a>
                                </a>
                                  <div className="col-xs-7 col-md-10"><a>
                                  </a>
                                    <div className="title"><a>
                                    </a><a>
                                        <i className="fa fa-play-circle" aria-hidden="true" data-toggle="popover" data-content="Khóa học video" data-original-title title /> Bài 2:
                                        Hướng dẫn cài đặt phần mềm photoshop cc 2020
                                      </a></div><a>
                                    </a>
                                  </div>
                                  <div className="col-xs-3 col-md-2">
                                    <div className="time">05:49</div>
                                  </div>
                                </div><a>
                                </a>
                              </div><a>
                              </a>
                            </div><a>
                            </a>
                            <div className="col"><a>
                            </a>
                              <div className="container-fluid"><a>
                              </a>
                                <div className="row"><a>
                                </a>
                                  <div className="col-xs-7 col-md-8"><a>
                                  </a>
                                    <div className="title"><a>
                                    </a><a>
                                        <i className="fa fa-play-circle" aria-hidden="true" data-toggle="popover" data-content="Khóa học video" data-original-title title /> Bài 3:
                                        Tìm hiểu định dạng file trong photoshop </a>
                                    </div><a>
                                    </a>
                                  </div><a>
                                  </a>
                                  <div className="col-xs-2 col-md-2"><a>
                                  </a>
                                    <div className="link"><a>
                                    </a><a className="btn-preview" href="javascript:void(0)" data-id={90786}>Học thử</a>
                                    </div>
                                  </div>
                                  <div className="col-xs-3 col-md-2">
                                    <div className="time">18:29</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                    <div><span className="big-price" data-gtm-vis-recent-on-screen12808849_131={4095} data-gtm-vis-first-on-screen12808849_131={4095} data-gtm-vis-total-visible-time12808849_131={100} data-gtm-vis-has-fired12808849_131={1}>499.000đ</span><span className="small-price2">700.000đ</span></div>
                    <div className="discount-price2" data-percent={29}>Tiết kiệm: <span className="discount_percent">29% </span></div>
                  </div>
                  <div className="time-uudai"><i className="fa fa-tachometer" aria-hidden="true" /> Thời gian ưu đãi
                    còn 1 ngày</div>
                  <div className="block-btn">
                    <a course_id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" href="https://unica.vn/order/step1?id=2119" className="btn-buy-course" rel="nofollow">Đăng ký ngay</a>
                    <div className="change-register text-success" style={{ transform: 'translateY(0px)' }}>
                      <i className="fa fa-user-plus text-danger" />
                      <span className="name_register">Bùi Thành Tín</span>
                      <span>vừa đăng ký</span>
                    </div>
                    <div className="pending-register hide" />
                  </div>
                </div>
                <div className="u-sm-right">
                  <div className="block-ulti">
                    <ul style={{ marginLeft: 0 }}>
                      <li><i className="fa fa-clock" aria-hidden="true" />Thời lượng:
                        <p>07 giờ 55 phút</p>
                      </li>
                      <li><i className="fa fa-play-circle" aria-hidden="true" /> Giáo trình:
                        <p>38 bài giảng</p>
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