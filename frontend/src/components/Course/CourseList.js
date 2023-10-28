import React from 'react'
import '../../App.css'
import '../../Styles/Home.css'
import NewsAds from '../News/NewsAds'
import { Link, withRouter } from 'react-router-dom'

export default function CourseList(props) {

  return (
    <div>
      {/* Breadcrumb Start */}
      <div className="container-fluid" style={{ marginTop: '100px' }}>
        <div className="container">
          <nav className="breadcrumb bg-transparent m-0 p-0">
            <a className="breadcrumb-item" href="index.html">Trang chủ</a>
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
              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">TOP BÁN CHẠY</h3>
                    <a className="text-secondary font-weight-medium text-decoration-none" href>Xem Tất Cả</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <Link to="/course/123" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </Link>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                    <h3 className="m-0">KHÓA HỌC MỚI RA MẮT</h3>
                    <a className="text-secondary font-weight-medium text-decoration-none" href>Xem Tất Cả</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="position-relative mb-3 course-popover">
                    <a href="detail-course.html" className="course-box-slider pop">
                      <span className="sale-off">-29%</span>
                      <div className="img-course">
                        <img className="img-responsive " src="https://static.unica.vn/upload/images/2021/06/70d074195b31af6ff620_m_1624502386.jpg" alt="Làm chủ photoshop cùng Huy Quần Hoa" style={{ width: '100%' }} loading="lazy" />
                      </div>
                      <div className="content-course">
                        <h3 className="title-course">
                          <p>Làm chủ photoshop cùng Huy Quần Hoa</p>
                        </h3>
                        <div className="name-gv">
                          <b style={{ float: 'left' }}>Mai Xuân Huy (Huy Quần Hoa)</b>
                          <span className="price-b">700.000<sup>đ</sup></span>
                        </div>
                      </div>
                      <div className="price-course" style={{ clear: 'both' }}>
                        <div className="rate-combo">
                          <p>
                            <span className="star-rate">
                              <i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /><i className="fa fa-star co-or" aria-hidden="true" /> (47) </span>
                          </p>
                        </div>
                        <span className="price-a">499.000<sup>đ</sup></span>
                      </div>
                    </a>
                    <div className="detail-popover">
                      <div className="popover-content">
                        <a href="detail-course.html">
                          <h3 className="title-course">Làm chủ photoshop cùng Huy Quần Hoa</h3>
                        </a>
                        <div className="course-complement">
                        </div>
                        <p className="description">Khóa học sẽ giúp bạn bổ sung kiến thức về photoshop một&nbsp;cách bài bản theo lộ trình, dễ học&nbsp;và hiệu quả, kèm theo đó là những mẹo hữu ích, những kỹ năng độc đáo về ghép ảnh và chỉnh sửa hình ảnh</p>
                        <ul>
                          <li><span className="desc-checked" /><p>
                            Thành thạo kỹ năng ghép và chỉnh sửa ảnh bằng Photoshop</p></li>
                          <li><span className="desc-checked" /><p>
                            Tự thiết kế hình ảnh cho website, Fanpage facebook, Group</p></li>
                          <li><span className="desc-checked" /><p>
                            Cắt ghép ảnh cùng các idol yêu thích</p></li>
                        </ul>
                        <a data-id="dGpHbjBCNitobE0yRzdQTG0vWUJoQT09" id={2119} price_sale={499000} href="javascript:void(0)" onclick="addcart(this,23)" className="btn-cart-course btn-add_cart"><i className="fa fa-cart-plus" aria-hidden="true" />Thêm vào giỏ hàng</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NewsAds />
          </div>
        </div>
      </div>
      {/* News With Sidebar End */}
    </div>
  )
}