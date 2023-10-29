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

            <div className="list-shortcut-desktop">
                <a className="zalo" href="https://zalo.me/0979794334"></a>
                <a href="#" className="back-to-top"><img src="/img/40.png" alt="" title="" height="48px" /></a>
            </div>

            <div className="container-fluid bg-light pt-5 px-sm-3 px-md-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h4 className="font-weight-bold mb-4" style={{ color: "#34aa40" }}>THÔNG TIN LIÊN HỆ</h4>
                            <p><strong>Skype:</strong> langtubuonnuocmam<br /><strong>Mobile/Zalo:</strong> 0985811065<br /><strong>Hỗ trợ khách hàng:</strong> mở tài khoản chứng khoán,môi giới tư vấn tại các chi nhánh tại các công ty chứng khoán SHS, HSC, VNDIRECT, VPS, MBS, SSI, KB, VCBS, TCBS, Mirae Asset,&nbsp;AIS …&nbsp; trên toàn quốc</p>
                        </div>
                        <div className="col-lg-4">
                            <h4 className="font-weight-bold mb-4" style={{ color: "#34aa40" }}>ĐĂNG KÝ KHÁCH HÀNG</h4>
                            <p>Quý khách hàng có nhu cầu trở thành khách hàng, vui lòng để lại thông tin chúng tôi sẽ chủ động liên lạc lại</p>
                            <input type="submit" value="ĐĂNG KÝ TƯ VẤN" className="btn btn-success font-weight-semi-bold py-2 px-3" />
                        </div>
                        <div className="col-lg-4">
                            <h4 className="font-weight-bold mb-4" style={{ color: "#34aa40" }}>MẠNG XÃ HỘI</h4>
                            <iframe name="f35095af6c0e68" width="300px" height="550px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v3.3/plugins/page.php?adapt_container_width=true&amp;app_id=2267069650290110&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df230e3eb5ea8d4%26domain%3Dlangtubuonnuocmam.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Flangtubuonnuocmam.com%252Ffa7a3c16d3dfdc%26relation%3Dparent.parent&amp;container_width=0&amp;height=550&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Flangtubuonnuocmam%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=&amp;width=300"
                                style={{ border: "none", visibility: "visible", width: "300px", height: "130px" }} className=""></iframe>
                            <p><a href="https://www.youtube.com/channel/UCmCoIYbX8EbZ0_Ej2PUcQFw" target="_blank" rel="noopener"><img className="alignnone size-full wp-image-4158" src="/img/follow-us-on-youtube.png" alt="" width="256" height="76" /></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}