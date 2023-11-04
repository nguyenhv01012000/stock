import '../App.css';
import '../Styles/Checkout.css'
import { useContext, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { UserContext } from '../contexts/User';
import Axios from 'axios';
import { CartContext } from '../contexts/Cart';
import { ZaloPay } from '../components/zalopay';
import QRCode from 'qrcode.react'
import { APIs } from '../components/common';
import $ from 'jquery';
import socketIOClient from "socket.io-client"
import Header from '../components/Home/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

const ENDPOINT = "http://localhost:4000";

function Checkout(props) {

    const {
        setUserInfoFunc
    } = useContext(UserContext);

    const {
        cartItems,
        total
    } = useContext(CartContext);
    const socket = socketIOClient(ENDPOINT)

    const [tinh, setTinh] = useState([])
    const [huyen, setHuyen] = useState([])

    const [userName, setUserName] = useState("")
    const [_id, set_Id] = useState("")
    const [userAvt, setUserAvt] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userProvince, setUserProvince] = useState("")
    const [userDistrict, setUserDistrict] = useState("")
    const [userAddress, setUserAddress] = useState("")
    const [provinceId, setProvinceId] = useState("")
    const [checkoutTab, setCheckoutTab] = useState(0)
    const [shipping, setShipping] = useState(".0")
    // const [orderPaymentMethod, setOrderPaymentMethod] = useState("")
    // const [orderAddressConfirm, setOrderAddressConfirm] = useState("")
    const [isShowQR, setIsShowQR] = useState(false)
    const [qrValue, setQRValue] = useState("")
    const [isPaid, setIsPaid] = useState(false)
    const [course, setCourse] = useState({})
    const [toast, setToast] = useState("")
    const [isPay, setIsPay] = useState("")
    const [date, setDate] = useState("")
    const [isHandle, setIsHandle] = useState(false)



    useEffect(() => {
        window.scrollTo(0, 0)
        Axios.get(`http://localhost:4000/products/` + props.match.params.id)
            .then(res => {
                setCourse(res.data)
            }
            )
        const monthNames = [
            "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
            "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
        ];
            const date = new Date()
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            setDate(`${day} ${monthNames[month]} ${year}`)
    }, [props.match.params.id])

    useEffect(() => {
        window.scrollTo(0, 0)
        Axios.get(`http://localhost:4000/users/${localStorage.getItem('user-id')}`, {
            headers: { "authorization": `Bearer ${localStorage.getItem('token')}` }
        })
            .then(res => {
                setUserInfoFunc(res.data.user);
                const userInfo = res.data.user
                set_Id(userInfo._id)
                setUserName(userInfo.userName)
                setUserAvt(userInfo.userAvt)
                setUserPhone(userInfo.userPhone)
                setUserEmail(userInfo.userEmail)
                setUserProvince(userInfo.userTinh)
                setUserAddress(userInfo.userAddress)
                if (userInfo.userDistrict !== "") {
                    Axios.get(`http://localhost:4000/vietnam`)
                        .then(res => {
                            setTinh(res.data[0].tinh)
                            setHuyen(res.data[0].huyen)
                            res.data[0].tinh.filter((item) => {
                                if (userInfo.userTinh === item.name) {
                                    setProvinceId(item.id)
                                }
                                return null
                            })
                        }
                        )
                    setUserProvince(userInfo.userTinh)
                }
                if (userInfo.userHuyen !== "") {
                    setUserDistrict(userInfo.userHuyen)
                }
            })
        Axios.get(`http://localhost:4000/vietnam`)
            .then(res => {
                setTinh(res.data[0].tinh)
                setHuyen(res.data[0].huyen)
            })
    }, [])

    const [methodPayment, setMethodPayMent] = useState(0)

    const checkedPayMent = (event) => {
        setMethodPayMent(Number(event.target.id))
    }

    const showQR = (text) => {
        setIsShowQR(true)
        setQRValue(text)
    }

    const placeAnOrder = () => {

        if(isPay){
            props.history.push("/")
            return
        }

        let orderPaymentMethod2 = "";
        if (methodPayment === 1) {
            orderPaymentMethod2 = "Chuyển Khoản Ngân Hàng"
        } else if (methodPayment === 2) {
            orderPaymentMethod2 = "zalopay"
        } else {
            orderPaymentMethod2 = ""
        }

        var cartId = []
        for (let i in cartItems) {
            cartId.push(
                {
                    id: cartItems[i]._id,
                    amount: cartItems[i].count
                }
            )
        }
        const data = {
            orderName: userName,
            orderAvatar: userAvt,
            orderEmail: userEmail,
            orderPhone: userPhone,
            orderAddress: userAddress,
            orderTinh: userProvince,
            orderHuyen: userDistrict,
            orderList: [{ id: course._id, amount: 1 }],
            orderTotal: course.productFinalPrice,
            orderPaymentMethod: orderPaymentMethod2,
            orderDate: new Date()
        }

        if (!userName) {
            setToast("Họ tên không được để trống")
            setTimeout(() => {
                setToast("")
            }, 3000)
            return
        }
        if (!userEmail) {
            setToast("Email không được để trống")
            setTimeout(() => {
                setToast("")
            }, 3000)
            return
        }
        if (!userPhone) {
            setToast("Số điện thoại không được để trống")
            setTimeout(() => {
                setToast("")
            }, 3000)
            return
        }

        if (orderPaymentMethod2 === "") {
            setToast("Hãy chọn phương thức thanh toán")
            setTimeout(() => {
                setToast("")
            }, 3000)
            return
        } else if (orderPaymentMethod2 === "zalopay") {
            if (isPaid === false) {
                setToast("Bạn chưa hoàn tất thanh toán!")
                setTimeout(() => {
                    setToast("")
                }, 3000)
                return
            } else {
                Axios.post('http://localhost:4000/order', data)
                setTimeout(() => {
                    localStorage.removeItem('total')
                    localStorage.removeItem('cart')
                    props.history.push("/")
                    socket.emit('placeAnOrder', data)
                    window.location.reload(false);
                }, 1000)
            }
        } else {
            setIsHandle(true)
            Axios.post('http://localhost:4000/order', data).then( res => {
                setIsPay(res.data)   
                setIsHandle(false)
                setTimeout(() => {
                    localStorage.removeItem('total')
                    localStorage.removeItem('cart')
                    socket.emit('placeAnOrder', data)
                }, 1000)
            })
        }
    }

    return (
        <div className="Home">
            <Header />
            <div className={toast ? "toast toast-show" : "toast"} style={{ top: '20px', backgroundColor: "#fab4c0", color: "red" }}>
                <FontAwesomeIcon icon={faTimes} className="icon" />
                {toast}
            </div>
            <div className={isPay ? "toast toast-show" : "toast"} style={{ top: '20px' }}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                Đặt hàng thành công!
            </div>
            <div className="checkout-body flex">
                <div className="checkout-fill">
                    <div className="checkout-tab flex">
                        <div
                            className={checkoutTab === 0 ? "checkout-tab-item checkout-tab-item-active" : "checkout-tab-item"}
                            onClick={() => {
                                setCheckoutTab(0)
                            }}
                        >1. Thông tin giao hàng</div>
                        <div
                            className={checkoutTab === 1 ? "checkout-tab-item checkout-tab-item-active" : "checkout-tab-item"}
                            onClick={() => {
                                setCheckoutTab(1)
                            }}
                        >2. Thanh toán</div>
                    </div>
                    {
                        checkoutTab === 0 &&
                        <div className="checkout-info">
                            <div className="checkout-info-title"><strong>Địa chỉ</strong> giao hàng</div>
                            <form className="checkout-info-form">
                                <div className="checkout-info-row">
                                    <div className="checkout-info-left">Họ tên <span style={{ color: "red" }}>*</span></div>
                                    <input
                                        type="text"
                                        className="input"
                                        value={userName}
                                        onChange={(event) => {
                                            setUserName(event.target.value)
                                        }}
                                    ></input>
                                </div>
                                <div className="checkout-info-row">
                                    <div className="checkout-info-left">Số điện thoại <span style={{ color: "red" }}>*</span></div>
                                    <input
                                        type="text"
                                        className="input"
                                        value={userPhone}
                                        onChange={(event) => {
                                            setUserPhone(event.target.value)
                                        }}
                                    ></input>
                                </div>
                                <div className="checkout-info-row">
                                    <div className="checkout-info-left">Email <span style={{ color: "red" }}>*</span></div>
                                    <input
                                        type="text"
                                        className="input"
                                        value={userEmail}
                                        onChange={(event) => {
                                            setUserEmail(event.target.value)
                                        }}
                                    ></input>
                                </div>
                                <div className="checkout-info-row">
                                    <div className="checkout-info-left">Tỉnh</div>
                                    <select
                                        className="input"
                                        value={userProvince || ''}
                                        onChange={(event) => {
                                            setProvinceId(event.target.selectedIndex)
                                            setUserProvince(event.target.value)
                                        }}
                                    >
                                        <option disabled>select a province</option>
                                        {tinh.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.name}
                                                >{item.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="checkout-info-row">
                                    <div className="checkout-info-left">Huyện</div>
                                    <select
                                        className="input"
                                        value={userDistrict || ''}
                                        onChange={(event) => {
                                            setUserDistrict(event.target.value)
                                        }}
                                    >
                                        <option disabled>select a district</option>
                                        {huyen.map((item, index) => {
                                            if (item.tinh_id === provinceId) {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.name}
                                                    >{item.name}</option>
                                                )
                                            }
                                            return null
                                        })}
                                    </select>
                                </div>
                                <div className="checkout-info-row">
                                    <div className="checkout-info-left">Địa chỉ</div>
                                    <input
                                        type="text"
                                        className="input"
                                        name="address"
                                        value={userAddress || ''}
                                        onChange={(event) => {
                                            setUserAddress(event.target.value)
                                        }}
                                    ></input>
                                </div>
                                <div
                                    className="checkout-info-row flex-center"
                                    onClick={() => {
                                        setCheckoutTab(1)
                                        if (window.innerWidth >= 750) {
                                            window.scrollTo(0, 0)
                                        }
                                    }}
                                >
                                    <div className="checkout-info-btn">Tiếp theo</div>
                                </div>
                            </form>
                        </div>
                    }
                    {
                        checkoutTab === 1 &&
                        <div className="checkout-info">
                            <div className="checkout-info-title"><strong>Phương thức</strong> thanh toán</div>
                            <div className="checkout-detail-ship-item flex">
                                <input
                                    type="radio" id="1" name="ship" className="payment-method"
                                    onChange={checkedPayMent}
                                    onClick={() => {
                                        setIsShowQR(false)
                                    }}
                                ></input>
                                <label
                                    htmlFor="1" className="payment-method-label"
                                >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBomsWftSMO81VUW2ztzT29BE7adV1jm-kTA&usqp=CAU" alt=""></img>
                                    Thanh toán chuyển khoản ngân hàng
                                </label>
                            </div>
                            <div
                                className="checkout-detail-ship-item flex"
                            >
                                <input
                                    type="radio" id="2" name="ship" className="payment-method"
                                    onChange={checkedPayMent}
                                    onClick={() => {
                                        const description = `Thanh toan don hang #${_id}`
                                        let order = {
                                            description: description,
                                            amount: course.productFinalPrice
                                        }
                                        ZaloPay.qr(order, res => {
                                            showQR(res.orderurl);
                                            // const check = setInterval(() => {
                                            //     $.getJSON(APIs.GETORDERSTATUS + '?morderid=' + res.apptransid)
                                            //         .done(res => {
                                            //             if (res.returncode === 1) {
                                            //                 setIsPaid(true)
                                            //                 clearInterval(check)
                                            //             }
                                            //         }
                                            //         )
                                            // }, 1000)
                                        });
                                    }}
                                ></input>
                                <label htmlFor="2" className="payment-method-label">
                                    <img src="https://stccbo.zalopay.vn/zalopay-public/websites/ver201022/images/logozlp1.png" alt=""></img>
                                    ZaloPay
                                </label>
                            </div>
                            <div className={isShowQR ? "qr-box flex-col" : "d-none"}>
                                <div className="qr-code-box flex-center">
                                    <QRCode value={qrValue}></QRCode>
                                </div>
                                {!isPaid &&
                                    <div className="qr-status" style={{ color: "red" }}>
                                        Đang chờ thanh toán...
                                    </div>
                                }
                                {isPaid &&
                                    <div className="qr-status">
                                        Thanh toán thành công!
                                    </div>
                                }
                                {!isPaid &&
                                    <div className="qr-help">
                                        <div className="qr-help-title">Hướng dẫn thanh toán</div>
                                        <ul className="qr-help-list">
                                            <li><span>Bước 1:</span><strong> Mở</strong> ứng dụng <strong>ZaloPay</strong></li>
                                            <li><span>Bước 2:</span> Chọn <strong>"Thanh Toán"</strong> và quét mã QR</li>
                                            <li><span>Bước 3:</span> <strong> Xác nhận thanh toán</strong> ở trong ứng dụng</li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            <div className={isPay ? "qr-box flex-col" : "d-none"} style={{ alignItems: "start" }}>
                                <section class="woocommerce">
                                    <div class="checkout-detail-title">Cảm ơn bạn. Đơn hàng của bạn đã được nhận.</div>
                                    <ul class="woocommerce-order-overview woocommerce-thankyou-order-details order_details">
                                        <li class="woocommerce-order-overview__order order">
                                            Mã đơn hàng: <strong>{isPay}</strong>
                                        </li>
                                        <li class="woocommerce-order-overview__date date">
                                            Ngày: <strong>{date}</strong>
                                        </li>
                                        <li class="woocommerce-order-overview__email email">
                                            Email: <strong>{userEmail}</strong>
                                        </li>
                                        <li class="woocommerce-order-overview__total total">
                                            Tổng cộng: <strong><span class="woocommerce-Price-amount amount">{course.productFinalPrice && course.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span
                                                class="woocommerce-Price-currencySymbol">₫</span></span></strong>
                                        </li>
                                        <li class="woocommerce-order-overview__payment-method method">
                                            Phương thức thanh toán: <strong>Chuyển Khoản Ngân Hàng</strong>
                                        </li>
                                    </ul>
                                    <p>Sau khi chuyển khoản bạn email hoặc sms mã đơn hàng để được kích hoạt khoá học</p>
                                    <div className="checkout-info-title"><strong>Thông tin</strong> chuyển khoản ngân hàng</div>
                                    <div className="checkout-detail-items">
                                        <div className="checkout-detail-title">Nguyễn Đăng Sơn:</div>
                                        <div className="checkout-detail-item flex" style={{ alignItems: "center" }}>
                                            <ul class="wc-bacs-bank-details order_details bacs_details">
                                                <li class="bank_name">Ngân hàng: <strong>MB Bank – Chi nhánh Thăng Long</strong></li>
                                                <li class="account_number">Số tài khoản: <strong>0740102054001</strong></li>
                                                <li class="account_number">Nội dung: <strong>{isPay}-{userPhone}</strong></li>
                                                <li class="account_number">Số tiền: <strong>{course.productFinalPrice && course.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div
                                className="checkout-info-row flex-center"
                                onClick={placeAnOrder}
                            >
                                {!isHandle && <div className="checkout-info-btn" style={{background: isPay ?  "#34aa40" : "#fc2754"}}> {isPay ? 'Hoàn Thành Thanh Toán' : 'Mua khóa học'}</div>}
                                {isHandle && <div className="checkout-info-btn" style={{background: "blue"}}> ...Đang Chờ Xử Lý Đơn Hàng</div>}
                            </div>
                        </div>
                    }
                </div>
                <div className="checkout-detail">
                    <div className="checkout-info-title"><strong>Thông tin</strong> mua khóa học</div>
                    <div className="checkout-detail-items">
                        <div className="checkout-detail-title">Khóa Học</div>
                        <div className="checkout-detail-item flex" style={{ alignItems: "center", justifyContent: "space-around" }}>
                            <img src={course.productImg} alt="" width="60px" height="60px"></img>
                            <p>{course.productName}</p>
                            <p>x{1}</p>
                            <p>{course.productFinalPrice && course.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p>
                        </div>
                        {/* { cartItems&&
                            cartItems.map((item, index) => {
                                return (
                                    <div key={index} className="checkout-detail-item flex">
                                        <p>{item.productName}</p>
                                        <p>x{item.count}</p>
                                        <p>{item.count * item.productFinalPrice} đ</p>
                                    </div>
                                )
                            })
                        } */}
                        {/* <div className="checkout-detail-title">Hình thức vận chuyển</div>
                        <form className="checkout-detail-ship"> 
                            <div className="checkout-detail-ship-item flex"> 
                                <input 
                                    type="radio" id="ghtk" name="ship" value="ghtk.20000"  
                                    onChange={(event)=>{ setShipping(event.target.value) }}
                                ></input>
                                <label htmlFor="ghtk">
                                    <p>Giao Hàng Tiết Kiệm</p>
                                    <p>20000 đ</p>
                                </label> 
                            </div>
                            <div className="checkout-detail-ship-item flex"> 
                                <input 
                                    type="radio" id="vnp" name="ship" value="vnp.22000"
                                    onChange={(event)=>{ setShipping(event.target.value) }}
                                ></input>
                                <label htmlFor="vnp">
                                    <p>VNPost Nhanh</p>
                                    <p>22000 đ</p>
                                </label>
                            </div>
                        </form>   */}
                    </div>
                    <div className="checkout-detail-title flex" style={{ justifyContent: 'space-between' }}>
                        <p>Tổng đơn hàng</p>
                        <p>{course.productFinalPrice && course.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p>
                        {/* <p>{total + Number(shipping.split(".")[1])} đ</p>  */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Checkout);
