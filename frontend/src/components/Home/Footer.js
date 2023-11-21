import React, { useEffect, useRef, useState } from 'react'
import '../../App.css'
import '../../Styles/Home.css'

export default function Footer(props) {

    function myFunction() {
        document.getElementById("exampleModal").style.display = "none";
    }

    return (
        <div>
            {/* Modal */}
            <div className="dialog-content dialog-type-lightbox collapse in" id="exampleModal" >
                <div className="hidden-background" onClick={myFunction} />
                <div className="dialog-message">
                    <div className="block-1">
                        <div className="block-3">
                            <div className="block-4">
                                <i className="fa fa-twitter icon-modal" />
                                <i className="fa fa-facebook icon-modal" />
                                <i className="fa fa-volume-control-phone icon-modal" />
                            </div>
                            <div className="block-5">
                                <a href="https://nhadaututhanhcong.com/product/lam-giau-tu-sieu-co-phieu-jesse-stine/">
                                    <img className="block-6" src="https://nhadaututhanhcong.com/wp-content/uploads/2022/12/Screenshot-2022-12-16-235118.jpg" alt="" loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="block-2">
                        <h4 className="elementor-heading-title elementor-size-default">
                            <p>phương pháp đầu tư siêu cổ phiếu của Jesse Stine<br />Kỷ lục giao dịch hậu bong bóng internet
                            </p>
                        </h4>
                        <h4 style={{ width: '100%' }}><span style={{ color: '#ffffff' }}>Biên dịch</span></h4>
                        <h4 className="elementor-heading-title elementor-size-default">
                            <p>Khúc Ngọc Tuyên, Thu Hà, Trương minh huy </p>
                        </h4>
                        <a style={{ width: '100%' }} className="elementor-button">Đặt mua ngay ⟶</a>
                    </div>
                    <a role="button" className="dialog-close-button" onClick={myFunction}>
                        <span aria-hidden="true">×</span>
                    </a>
                </div>
            </div>

            <div className="list-shortcut-desktop back-to-top">
                <a href="#"><img src="/img/40.png" alt="" title="" height="48px" /></a>
            </div>

            <div className="adlinkvntools-widget auto-ads-ml-desktop auto-ads-ml-has-powered-by hidden-xs">
                <div className="style1">
                    <div className="float-btn-group button-bottom-left open">
                        <div className="btn-list">
                            <div id="btn-google_map" className="btn-float-container tooltip">
                                <a href="https://docs.google.com/forms/d/1x7Vg2Zm9a4zteLqXVNPn1MeiTJDoNqnCo7GaaZ1nXbY/viewform?edit_requested=true" target="_blank" className="fancybox btn-float menu-feedback"><span className="button_tap" /></a>
                                <div className="widget-tooltiptext tooltiptext-style1-bottom-right">Hòm thư Góp ý</div></div>
                            <div id="btn-download_doc" className="btn-float-container tooltip">
                                <a href="https://openaccount.vps.com.vn/open-account?MKTID=C243" className="fancybox btn-float download-doc-color menu-download-doc"><span className="button_tap" /></a>
                                <div className="widget-tooltiptext tooltiptext-style1-bottom-right">Đăng ký Mở tài khoản Chứng khoán</div></div>
                            <div id="btn-contact_form" className="btn-float-container tooltip">
                                <a href="http://zalo.me/0395081346" className="btn-float menu-zalo"><span className="button_tap" /></a>
                                <div className="widget-tooltiptext tooltiptext-style1-bottom-right">Để lại lời nhắn cho chúng tôi Zalo</div></div>
                            <div id="btn-facebook" className="btn-float-container tooltip">
                                <a href="https://m.me/dominostock" className="btn-float facebook-color menu-facebook"><span className="button_tap" /></a>
                                <div className="widget-tooltiptext tooltiptext-style1-bottom-right">Nhắn tin cho chúng tôi qua Facebook</div></div>
                            <div id="btn-click_to_call" className="btn-float-container tooltip">
                                <a href="tel:0395081346" className="btn-float click-to-call-color menu-click-to-call"><span className="button_tap" /></a>
                                <div className="widget-tooltiptext tooltiptext-style1-bottom-right">Gọi ngay cho chúng tôi</div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="float-btn-group button-bottom-right open adlinkvntools-Mobile visible-xs">
                <div className="btn-list mobile-background">
                    <div id="btn-click_to_call" className="btn-float-container tooltip"><a href="tel:0395081346" className="btn-float click-to-call-color menu-click-to-call"><span className="button_tap" /></a><span>Gọi ngay</span></div>
                    <div id="btn-facebook" className="btn-float-container tooltip"><a href="https://m.me/dominostock" className="btn-float facebook-color menu-facebook"><span className="button_tap" /></a><span>Messenger</span></div>
                    <div id="btn-contact_form" className="btn-float-container tooltip"><a href="http://zalo.me/0395081346" className="btn-float menu-zalo"><span className="button_tap" /></a><span>Zalo chát</span></div>
                    <div id="btn-download_doc" className="btn-float-container tooltip"><a href="https://openaccount.vps.com.vn/open-account?MKTID=C243" className="fancybox btn-float download-doc-color menu-download-doc"><span className="button_tap" /></a><span>Mở tài khoản</span></div>
                    <div id="btn-google_map" className="btn-float-container tooltip"><a href="https://docs.google.com/forms/d/1x7Vg2Zm9a4zteLqXVNPn1MeiTJDoNqnCo7GaaZ1nXbY/viewform?edit_requested=true" target="_blank" className="fancybox btn-float menu-feedback"><span className="button_tap" /></a><span>Góp ý</span></div>
                </div>
            </div>

            <div className="container-fluid bg-light pt-5 px-sm-3 px-md-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h4 className="font-weight-bold mb-4" style={{ color: "#34aa40" }}>THÔNG TIN LIÊN HỆ</h4>
                            <p><strong>Mobile/Zalo:</strong> 0395081346<br /><strong>Hỗ trợ khách hàng:</strong> Hỗ trợ mở tài khoản khách hàng tại các công ty chứng khoán VPS, AIS và MBS</p>
                        </div>
                        <div className="col-lg-4">
                            <h4 className="font-weight-bold mb-4" style={{ color: "#34aa40" }}>ĐĂNG KÝ KHÁCH HÀNG</h4>
                            <p>Quý khách hàng có nhu cầu trở thành khách hàng, vui lòng để lại thông tin chúng tôi sẽ chủ động liên lạc lại</p>
                            <input type="submit" value="ĐĂNG KÝ TƯ VẤN" className="btn btn-success font-weight-semi-bold py-2 px-3" style={{marginTop:"15px"}}/>
                        </div>
                        <div className="col-lg-4">
                            <h4 className="font-weight-bold mb-4" style={{ color: "#34aa40" }}>MẠNG XÃ HỘI</h4>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdominostock&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=571590990729180" width="340" height="130" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>                           
                             <p><a href="https://www.youtube.com/@chungkhoandomino" target="_blank" rel="noopener"><img className="alignnone size-full wp-image-4158" src="/img/follow-us-on-youtube.png" alt="" width="256" height="76" /></a></p>
                             <div className="visible-xs" style={{marginBottom:"70px"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}