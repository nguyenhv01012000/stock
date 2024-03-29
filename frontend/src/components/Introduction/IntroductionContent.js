import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from 'axios'
import { BACKEND } from '../../env'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import ReactQuill from 'react-quill'

function IntroductionContent(props) {

  const [settingSlider, setSettingSlider] = useState({})
  const [moblie, setMoblie] = useState(true)
  const [courseView, setCourseView] = useState([]);


  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }

  const settingsMobile = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }

  useEffect(() => {
    let amount = 3;
    if (window.innerWidth <= 700) {
      amount = 1;
      setSettingSlider(settingsMobile)
      setMoblie(true)
    } else {
      setSettingSlider(settings)
      setMoblie(false);
    }

    let config = {
      params: {
        page: 0,
        limit: amount,
        sort: "view"
      },
    }
    axios.get(BACKEND + `/products`, config)
      .then(res => {
        const arr = [...res.data.products]
        setCourseView(arr)
      }
      )
  }, [])

  return (
    <div>
      {/* Main News Slider Start */}
      <div style={{ marginTop: '80px', height: '726.8px' }} className="position-relative">
        <div class="bg fill bg-fill bg-loaded"></div>
        <video className="video-bg" preload playsInline autoPlay muted loop>
          <source src="../img/Market-Loop-Background-Video-High-Resolution.mp4" type="video/mp4" />
        </video>
        <div className="text-box-content text dark overlay-center">
          <div className="text-inner text-center">
            <div id="text-1501799246" className="text text-title">
              <h3>CHÀO MỪNG BẠN ĐẾN VỚI</h3>
              <h1><span className="block-7">DOMINO STOCK</span></h1>
              <style dangerouslySetInnerHTML={{ __html: "\n                        #text-1501799246 {\n                            font-size: 1.6rem;\n                            color: #fff\n                        }\n\n                        #text-1501799246>* {\n                            color: #fff\n                        }\n                    " }} />
            </div>
            <p style={{ padding: '0% 20%' }}>Đầu tư thực chiến, chia sẻ kiến thức cho Nhà đầu tư chứng khoán, Nhà đầu tư
              F0, Nhà đầu tư tài chính với 10 năm kinh nghiệm đầu tư thành công từ DOMINO STOCK</p>
          </div>
        </div>
      </div>
      {/* Main News Slider End */}
      {/* News With Sidebar Start */}
      <div className="container-fluid py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="col-inner" style={{ paddingRight: '30px' }}>
                <div className="img has-hover x md-x lg-x y md-y lg-y" id="image_1932253147">
                  <div className="img-inner dark"  >
                    {/* <img src="https://smtfx.vn/wp-content/uploads/2023/06/logo-smattrading.png" style={{width: '200px'}} alt="Logo Smattrading" decoding="async" fetchpriority="high" /> */}
                  </div>
                </div>
                <div id="text-1302763023" className="text sub-title" style={{ marginTop: '60px' }}>
                  <h1>Thái độ tạo nên giá trị</h1>
                </div>
                <div id="text-1461884634" className="text text-title">
                  <h3>Đồng hành cùng TRADER <br />Sứ mệnh trở thành cầu nối <br />Kết nối đầu tư tài chính</h3>
                </div>
                <p>Với đội ngũ các chuyên gia điều hành nhiều năm làm việc tại các tổ chức tài chính trong và
                  ngoài nước và kinh nghiệm đầu tư dày dặn, kiến thức sâu rộng và độ am hiểu về hoạt động
                  doanh nghiệp, DOMINO STOCK định hướng chiến lược đầu tư vào các doanh nghiệp đầu ngành</p>
                <div className="row" id="row-2099975083">
                  <div id="col-1809089182" className="col col-text-run small-12 large-12" data-animate="bounceIn" data-animated="true">
                    <div className="col-inner">
                      <div id="text-3614865646" className="text text-run">
                        <p><span className="count-up active">75</span>%</p>
                        <p>Xác suất đúng trên hệ thống giao dịch&nbsp;</p>
                      </div>
                      <div id="text-8842167" className="text text-run">
                        <p>1/<span className="count-up active">3</span></p>
                        <p>Tỷ lệ RR tối thiểu được đảm bảo</p>
                      </div>
                      <div id="text-3068273942" className="text text-run">
                        <p><span className="count-up active">1</span>%</p>
                        <p>Quản lý vốn theo phần trăm tối đa tài khoản cho phép&nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="box has-hover has-hover box-label box-text-bottom position-relative" style={{ height: '428px' }}>
                <div className="box-image">
                  <div className>
                    <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src="../img/01-1.png" decoding="async" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* News With Sidebar End 	*/}
      <div className="position-relative course">
        <img className="video-banner" src="../img/Group-148-e1685774742406.png" decoding="async" />
        <div className="overlay-center">
          <div className="col-inner text-center">
            <div id="text-609430387" className="text text-title" style={{ color: '#fff', marginBottom: "30px" }}>
              <h3 style={{ color: '#fff' }}>Khóa học nổi bật</h3>
              <p>DOMINO STOCK mang tới những khóa học từ cơ bản tới nâng cao nhằm đồng hành trên quá trình đầu tư
                của quý khách</p>
            </div>
          </div>
          <div className={moblie ? "" : "row"}>
            {courseView &&
              courseView.map((item, index) => {
                return (
                  <div className={moblie ? "slick-slide slick-current slick-active" : "slick-slide slick-current slick-active col-lg-4"} data-slick-index={0} aria-hidden="false" style={{ width: moblie ? '100%' : '377px', display: 'flex' }}>
                    <div>
                      <div className="col" style={{ width: '100%', display: 'inline-block' }}>
                        <div className="col-inner">
                          <div className="badge-container absolute left top z-1" />
                          <div className="product-small box has-hover box-normal box-text-bottom">
                            <div className="box-image">
                              <div className="image-cover">
                                <Link to={"/course/" + encodeURIComponent(item.productName)} aria-label="Khóa học Chứng khoán Free" tabIndex={0}>
                                  <img width={1191} height={1191} src={item.productImg} className="attachment-original size-original" alt="Z4486508269138 8fced4ced0e9a6cf38aaf8c002cf0642" decoding="async" /> </Link>
                              </div>
                              <div className="image-tools top right show-on-hover" />
                              <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover">
                              </div>
                            </div>
                            <div className="box-text" style={{ height: '231.2px' }}>
                              <p className="category uppercase is-smaller no-text-overflow product-cat op-7">
                                Khóa học</p>
                              <div className="title-wrapper">
                                <p className="name product-title woocommerce-loop-product__title" style={{ height: '19px' }}>
                                  <Link to={"/course/" + item._id} className="woocommerce-LoopProduct-link woocommerce-loop-product__link" tabIndex={0}>{item.productName}</Link></p>
                              </div>
                              {!item.productPrice && <div className="price-wrapper" style={{ height: '18px' }}>
                                <span className="price"><span className="amount">Miễn phí</span></span>
                              </div>
                              }
                              {item.productPrice && <div className="price-wrapper" style={{ height: '18px' }}>
                                <span className="price"><del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi>{item.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className="woocommerce-Price-currencySymbol">₫</span></bdi></span></del>
                                  <ins><span className="woocommerce-Price-amount amount"><bdi>{item.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className="woocommerce-Price-currencySymbol">₫</span></bdi></span></ins></span>
                              </div>}
                              <p className="box-excerpt is-small" style={{ height: '54px' }}>{item.productTitle}</p>
                                <Link  to={"/checkout/"+item._id} className="button btn-xemtl" tabIndex={0}>Đăng ký ngay</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ padding: '50px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="col-inner text-center">
                <p>
                  <a aria-label="Khóa học Chứng khoán Free" tabIndex={0}>
                    <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src="../img/business-man-holding-phone-260nw-1049641082.png" alt="Z4486508269138 8fced4ced0e9a6cf38aaf8c002cf0642" decoding="async" /> </a>
                </p>
                <p style={{ marginTop: "10px" }}>
                  <a className="button primary lowercase btn-type-1" href='http://zalo.me/0395081346'>
                    <span>Đăng ký nhận tư vấn</span>
                  </a>
                </p>
                <p>Hoặc liên hệ hotline: 039.508.1346</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="col-inner">
                <div id="text-679856918" className="text text-title">
                  <h3>Tại sao bạn nên <br />Đầu tư Chứng khoán</h3>
                </div>
                <div className="box-txt-run">
                  <div id="text-3776913968" className="text text-run-1">
                    <p><span className="count-up active">18,446</span></p>
                    <p>Nhà đầu tư&nbsp;</p>
                  </div>
                  <div id="text-3917788320" className="text text-run-1">
                    <p><span className="count-up active">932</span></p>
                    <p>Nhà tư vấn&nbsp;</p>
                  </div>
                  <div id="text-3160203137" className="text text-run-1">
                    <p><span className="count-up active">34,794</span></p>
                    <p>Tín hiệu sinh lời&nbsp;</p>
                  </div>
                </div>
                <div className="box-icon-lydo">
                  <div className="box has-hover   has-hover box-vertical box-text-bottom-1">
                    <div className="box-image" style={{ width: '20%' }}>
                      <div className>
                        <img style={{ height: '60px', width: '60px' }} src="../img/in-liquid-icon-8.png" className="attachment-original size-original" alt="In Liquid Icon 8" decoding="async" loading="lazy" />
                      </div>
                    </div>
                    <div className="text-left" style={{ width: '80%' }}>
                      <div className="box-text-1 box-text-inner">
                        <p>Chứng khoán là kênh<br />đầu tư linh hoạt</p>
                      </div>
                    </div>
                  </div>
                  <div className="box has-hover   has-hover box-vertical box-text-bottom-1">
                    <div className="box-image" style={{ width: '20%' }}>
                      <div className>
                        <img style={{ height: '60px', width: '60px' }} src="../img/in-liquid-icon-81.png" className="attachment-original size-original" alt="In Liquid Icon 81" decoding="async" loading="lazy" />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="box-text-1 box-text-inner">
                        <p>Khả năng mang lại lợi<br />nhuận cao</p>
                      </div>
                    </div>
                  </div>
                  <div className="box has-hover   has-hover box-vertical box-text-bottom-1">
                    <div className="box-image" style={{ width: '20%' }}>
                      <div className>
                        <img style={{ height: '60px', width: '60px' }} src="../img/Group-149.png" className="attachment-original size-original" alt="Group 149" decoding="async" loading="lazy" />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="box-text-1 box-text-inner">
                        <p>Tính thanh khoản<br />vượt trội</p>
                      </div>
                    </div>
                  </div>
                  <div className="box has-hover   has-hover box-vertical box-text-bottom-1">
                    <div className="box-image" style={{ width: '20%' }}>
                      <div className>
                        <img style={{ height: '60px', width: '60px' }} src="../img/in-liquid-icon-83.png" className="attachment-original size-original" alt="In Liquid Icon 83" decoding="async" loading="lazy" />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="box-text-1 box-text-inner">
                        <p>Có thể bắt đầu với số<br />vốn nhỏ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative kyluat">
        <img className="video-banner" src="../img/Group-130-e1685782787135.png" decoding="async" />
        <div className="overlay-center">
          <div className="container-fluid py-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="col-inner">
                    <div id="text-157779933" className="text text-title" style={{ color: '#fff' }}>
                      <h3 style={{ color: '#fff' }}>Nguyên tắc Kỷ luật <br />Trong đầu tư bạn cần biết</h3>
                      <p>Điều quan trọng là bạn phải nhất quán và kỷ luật có nguyên tắc. Nguyên tắc và kỷ
                        luật
                        trong trading chính là khắc tinh của mọi cảm xúc. Thành công không nằm ở cơ chế
                        giao
                        dịch của bạn mà là cách bạn đưa nó vào thực tiễn. Yếu tố cơ bản nhất của thành
                        công là
                        bạn phải tuân thủ nghiêm túc những nguyên tắc và yêu cầu của chính cơ chế hệ
                        thống bạn
                        đã chọn.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="img-inner dark">
                    <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src="../img/symbol-trading-on-stock-market-260nw-1914701269.png" alt="Symbol Trading On Stock Market 260nw 1914701269" decoding="async" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="row row-small align-equal row-kyluat reveal active" id="row-651823102">
                <div id="col-198035244" className="col medium-3 small-6 large-3">
                  <div className="col-inner text-center">
                    <h3>01</h3>
                    <p>Quản lý rủi ro theo phần trăm tài khoản nghiêm ngặt.</p>
                  </div>
                </div>
                <div id="col-1592462656" className="col medium-3 small-6 large-3">
                  <div className="col-inner text-center">
                    <h3>02</h3>
                    <p>Tối đa hóa lợi nhuận, giảm thiểu rủi ro.</p>
                  </div>
                </div>
                <div id="col-2096080091" className="col medium-3 small-6 large-3">
                  <div className="col-inner text-center">
                    <h3>03</h3>
                    <p>Phân tích thật kỹ trước khi tham gia vào thị trường.</p>
                  </div>
                </div>
                <div id="col-1540665467" className="col medium-3 small-6 large-3">
                  <div className="col-inner text-center">
                    <h3>04</h3>
                    <p>Chỉ tham gia vào thị trường khi bạn đã chuẩn bị kế hoạch cho mọi kịch bản có thể xảy
                      ra.</p>
                  </div>
                </div>
                <div id="col-72979512" className="col medium-3 small-6 large-3">
                  <div className="col-inner text-center">
                    <h3>05</h3>
                    <p>Khi khó phân tích, thay vì tham gia hãy đứng ngoài quan sát.</p>
                  </div>
                </div>
                <div id="col-2027589644" className="col medium-3 small-6 large-3">
                  <div className="col-inner text-center">
                    <h3>06</h3>
                    <p>Không giao dịch khi tâm lý không ổn định.</p>
                  </div>
                </div>
                <div id="col-1698607170" className="col medium-3 small-6 large-3">
                  <div className="col-inner text-center">
                    <h3>07</h3>
                    <p>Loại bỏ mọi tạp niệm để có sự minh triết khi quan sát giá.</p>
                  </div>
                </div>
                <div id="col-1870544350" className="col medium-3 small-6 large-3">
                  <div className="col-inner text-center">
                    <h3><span style={{ fontSize: '100%' }}><strong>08</strong></span></h3>
                    <p>Loại bỏ tư duy con bạc và cân nhắc trước khi đưa ra mọi quyết định giao dịch.</p>
                    <a className="button primary">
                      <span />
                    </a>
                  </div>
                </div>
                <div id="col-1461619720" className="col medium-4 small-12 large-4">
                  <div className="col-inner">
                    <h3 style={{ textAlign: 'center' }}>09</h3>
                    <p style={{ textAlign: 'center' }}>Hiểu nghề – Hiểu mình</p>
                    <p style={{ textAlign: 'center' }}>&nbsp;Tin vào chính mình.</p>
                  </div>
                </div>
                <div id="col-482136672" className="col medium-3 small-6 large-3">
                  <div className="col-inner text-center">
                    <h3>10</h3>
                    <p>Thị trường mang tính xác suất, mọi chuyện đều có thể xảy ra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-3">
        <div className="container">
          <div className="col-inner text-center">
            <div id="text-777610592" className="text text-title">
              <h3>Đối tác – Khách hàng</h3>
            </div>
            <Slider {...settingSlider}>
              <div className="slider-item">
                <img style={{ width: '220px', height: '73px' }} src="../img/Logo-Cong-Ty-Cp-Chung-Khoan-MB-H.webp" alt="Logo Cong Ty Cp Chung Khoan Mb H" decoding="async" loading="lazy" />
              </div>
              <div className="slider-item">
                <img style={{ width: '220px', height: '73px' }} src="../img/logo2-02-e1692157517246.jpg" alt="Logo2 02" decoding="async" loading="lazy" />
              </div>
              <div className="slider-item">
                <img style={{ width: '220px', height: '73px' }} src="../img/logo_VND2015-view.png" alt="Logo Vnd2015 View" decoding="async" loading="lazy" />
              </div>
              <div className="slider-item">
                <img style={{ width: '220px', height: '73px' }} src="../img/logovps_NCTZ-1-e1692157134530.jpg" alt="Logovps Nctz" decoding="async" loading="lazy" srcSet="https://smtfx.vn/wp-content/uploads/2023/08/logovps_NCTZ-1-e1692157134530.jpg 660w, https://smtfx.vn/wp-content/uploads/2023/08/logovps_NCTZ-1-e1692157134530-300x157.jpg 300w, https://smtfx.vn/wp-content/uploads/2023/08/logovps_NCTZ-1-e1692157134530-510x267.jpg 510w" sizes="(max-width: 660px) 100vw, 660px" />
              </div>
              <div className="slider-item">
                <img style={{ width: '220px', height: '73px' }} src="../img/maxresdefault-1-e1692157673767.jpg" alt="Maxresdefault" decoding="async" loading="lazy" srcSet="https://smtfx.vn/wp-content/uploads/2023/08/maxresdefault-1-e1692157673767.jpg 1280w, https://smtfx.vn/wp-content/uploads/2023/08/maxresdefault-1-e1692157673767-300x119.jpg 300w, https://smtfx.vn/wp-content/uploads/2023/08/maxresdefault-1-e1692157673767-768x305.jpg 768w, https://smtfx.vn/wp-content/uploads/2023/08/maxresdefault-1-e1692157673767-1024x407.jpg 1024w, https://smtfx.vn/wp-content/uploads/2023/08/maxresdefault-1-e1692157673767-510x203.jpg 510w" sizes="(max-width: 1280px) 100vw, 1280px" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(IntroductionContent)