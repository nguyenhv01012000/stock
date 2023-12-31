import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { BACKEND } from '../../../../env';

export default function DashboardOrderCreate(props) {

    const createForm = useRef();

    const [tinh, setTinh] = useState([])
    const [huyen, setHuyen] = useState([])

    const [orderName, setOrderName] = useState("")
    const [orderEmail, setOrderEmail] = useState("")
    const [orderPhone, setOrderPhone] = useState("")
    const [orderAddress, setOrderAddress] = useState("")
    const [orderProvince, setOrderProvince] = useState(null)
    const [orderDistric, setOrderDistric] = useState(null)
    const [orderPaymentMethod, setOrderPaymentMethod] = useState("")
    const [provinceId, setProvinceId] = useState("")
    const [product, setProduct] = useState([])
    const [productList, setProductList] = useState([])

    const [userList, setUserList] = useState([])
    const [user, setUser] = useState("")
    const [chooseUser, setChooseUser] = useState(false)
    const order = props.order

    useEffect(() => {

        axios.get(BACKEND + `/products`)
            .then(res => {
                setProduct(res.data)
            }
            )
        axios.get(BACKEND + `/users/list`)
            .then(res => {
                setUserList(res.data)
                res.data.filter((item) => {
                    if (item.userEmail === user) {
                        setOrderName(item.userName)
                        setOrderEmail(item.userEmail)
                        setOrderPhone(item.userPhone)
                        setOrderProvince(item.userProvince)
                        setOrderDistric(item.userDistric)
                        setOrderAddress(item.userAddress)
                        if (item.userTinh !== "") {
                            tinh.filter((item2) => {
                                if (item.userTinh === item2.name) {
                                    setProvinceId(item2.id)
                                }
                            })
                            setOrderProvince(item.userTinh)
                        }
                        if (item.userHuyen !== "") {
                            setOrderDistric(item.userHuyen)
                        }
                    }
                    return null
                })
            }
            )
        if (chooseUser === false) {
            axios.get(BACKEND + `/vietnam`)
                .then(res => {
                    setTinh(res.data[0].tinh)
                    setHuyen(res.data[0].huyen)
                    if (order) {
                        setOrderName(order.orderName)
                        setOrderEmail(order.orderEmail)
                        setOrderPhone(order.orderPhone)
                        setOrderAddress(order.orderAddress)
                        setOrderProvince(order.orderTinh)
                        setOrderDistric(order.orderHuyen)
                        setOrderPaymentMethod(order.orderPaymentMethod)
                        if (typeof order.orderList !== "undefined") {
                            order.orderList.map((item) => {
                                axios.get(BACKEND + `/products/${item.id}`)
                                    .then(res => {
                                        if (res.data) {
                                            res.data.count = item.amount
                                            setProductList([...productList, res.data])
                                        }
                                    })
                                return null
                            })
                            return
                        }
                        setOrderPaymentMethod(order.orderPaymentMethod)
                        if (order.orderTinh !== "") {
                            res.data[0].tinh.filter((item) => {
                                if (order.orderTinh === item.name) {
                                    setProvinceId(item.id)
                                }
                                return null
                            })
                            setOrderProvince(order.orderTinh)
                        }
                        if (order.orderHuyen !== "") {
                            setOrderDistric(order.orderHuyen)
                        }
                    }
                }
                )
        }
    }, [order, user])

    useEffect(() => {
        var listOrder = []
        var ids = []
        var total = 0;
        for (let i in productList) {
            if (ids.includes(productList[i]._id)) continue;
            const data = {
                id: productList[i]._id,
                amount: productList[i].count,
            }
            total += productList[i].productFinalPrice * productList[i].count
            listOrder.push(data)
            ids.push(productList[i]._id)
        }
        if (ids.length > 0)
            setProductList(listOrder);
    }, [])

    const onSubmit = (status) => {
        // event.preventDefault()
        var listOrder = []
        var ids = []
        var total = 0;
        for (let i in productList) {
            if (ids.includes(productList[i]._id)) continue;
            const data = {
                id: productList[i]._id,
                amount: productList[i].count,
            }
            total += productList[i].productFinalPrice * productList[i].count
            listOrder.push(data)
            ids.push(productList[i]._id)
        }
        var status = status

        axios.post(BACKEND + `/order/update/${order._id}`, {
            orderName: orderName,
            orderEmail: orderEmail,
            orderPhone: orderPhone,
            orderAddress: orderAddress,
            orderTinh: orderProvince,
            orderHuyen: orderDistric,
            orderList: listOrder,
            orderTotal: total,
            orderPaymentMethod: orderPaymentMethod,
            orderDate: new Date(),
            orderStatus: status
        }).then(() => {
            props.setCloseEditFunc(false);
            props.setToastFunc(true);
        })
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box">
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        Thông Tin Đơn Hàng
                    </div>
                    <div
                        className="create-box-title-close flex-center"
                        onClick={() => {
                            props.setCloseEditFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                {/* <form encType="multipart/form-data" ref={createForm}> */}
                    {/* <div className="create-box-row flex">
                        <div className="dashboard-left flex">Already have an account?</div>
                        <div className="dashboard-right">
                            <select 
                                className="input"
                                onChange={(event)=>{
                                    setUser(event.target.value)
                                    setChooseUser(true)
                                }}
                            >
                                <option></option>
                                {
                                    userList.map((item,index)=>{
                                        return (
                                            <option
                                                key={index}
                                                value={item.userEmail}
                                            >{item.userEmail}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div> */}
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tên</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="name"
                                value={orderName || ""}
                                onChange={(event) => {
                                    setOrderName(event.target.value)
                                }} required
                                disabled
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Email</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="email"
                                value={orderEmail || ""}
                                onChange={(event) => {
                                    setOrderEmail(event.target.value)
                                }} required
                                disabled
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Số Điện Thoại</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="phone"
                                value={orderPhone || ""}
                                onChange={(event) => {
                                    setOrderPhone(event.target.value)
                                }} required
                                disabled
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tỉnh</div>
                        <div className="dashboard-right">
                            {/* <select 
                                className="input"
                                value={orderProvince}
                                onChange={(event)=>{
                                    setProvinceId(event.target.selectedIndex)
                                    setOrderProvince(event.target.value)
                                }}
                                disabled
                                >
                                <option disabled selected value>select a province</option>
                                {tinh.map((item, index) => {
                                    return (
                                        <option 
                                            key={index}
                                            value={item.name}
                                        >{item.name}</option>
                                    )
                                })}
                            </select> */}
                            <input
                                type="text" name="phone"
                                value={orderProvince || ""}
                                onChange={(event) => {
                                    setOrderPhone(event.target.value)
                                }} required
                                disabled
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Huyện</div>
                        <div className="dashboard-right">
                            {/* <select 
                                className="input"
                                value={orderDistric}
                                onChange={(event)=>{
                                    setOrderDistric(event.target.value)
                                }}
                                disabled
                            >{console.log(orderDistric)}
                                <option disabled selected value>select a district</option>
                                {huyen.map((item, index) => {
                                    if (item.tinh_id === provinceId) {
                                        return (
                                            <option
                                                key={index}
                                                value={item.name}
                                            >{item.name}</option>
                                        )
                                    }
                                })}
                            </select> */}
                            <input
                                type="text" name="phone"
                                value={orderDistric || ""}
                                onChange={(event) => {
                                    setOrderPhone(event.target.value)
                                }} required
                                disabled
                            ></input>
                        </div>
                    </div>

                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Địa Chỉ</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="phone"
                                value={orderAddress || ""}
                                onChange={(event) => {
                                    setOrderAddress(event.target.value)
                                }} required
                                disabled
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Khóa Học</div>
                        <div className="dashboard-right">
                            {/* <select 
                                className="input"
                                style={{height: '25px', marginBottom: '10px'}}
                                value={""}
                                onChange={(event)=>{
                                    const isExists = (cartItems = [], item = {}) => {
                                        for (let cartItem of cartItems) {
                                            if (cartItem._id === item._id) {
                                                return cartItem;
                                            }
                                        }
                                        return false;
                                    }

                                    const value = event.target.value
                                    const virtualCart = [...productList] 
                                    if (productList.length === 0) {
                                        virtualCart.push({...JSON.parse(value), count: 1})
                                    } else {
                                        if (!isExists(productList, JSON.parse(value))) {
                                            virtualCart.push({...JSON.parse(value), count: 1})
                                        } else {
                                            for (let i = 0; i < virtualCart.length; i++) {
                                                if (virtualCart[i]._id === JSON.parse(value)._id) {
                                                    virtualCart[i].count += 1
                                                    break
                                                }
                                            }
                                        }
                                    }
                                    setProductList(virtualCart)
                                }}
                            >
                                <option selected value>select a product</option>
                                {product.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={JSON.stringify(item)}
                                        >Name: {item.productName}, Price: {item.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</option>
                                    )
                                })}
                            </select> */}
                            <div className="" style={{ overflowY: 'hidden', flexWrap: 'wrap' }}>
                                {productList &&
                                    productList.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="order-list-item"
                                            >
                                                <img src={item.productImg && item.productImg} alt=""></img>
                                                <p style={{ width: '55%' }}>{item.productName}</p>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    {/* <p 
                                                        id={index}
                                                        className="count-btn flex-center"
                                                        onClick={(event)=>{
                                                            const arr = [...productList]
                                                            const id = event.target.id;
                                                            for (let i in arr) {
                                                                if (id === i) {
                                                                    if (arr[i].count === 0) {
                                                                        return
                                                                    } else {
                                                                        arr[i].count -= 1
                                                                    }
                                                                }
                                                            }
                                                            setProductList(arr)
                                                        }}
                                                    >-</p> */}
                                                    <p>{item.count}</p>
                                                    {/* <p 
                                                        id={index}
                                                        className="count-btn flex-center"
                                                        onClick={(event)=>{
                                                            const arr = [...productList]
                                                            const id = event.target.id;
                                                            for (let i in arr) {
                                                                if (id === i) {
                                                                    arr[i].count += 1
                                                                }
                                                            }
                                                            setProductList(arr)
                                                        }}
                                                    >+</p> */}
                                                </div>
                                                {/* <div 
                                                    id={index}
                                                    className="delete-order-item flex-center"
                                                    onClick={(event)=>{
                                                        var arr = [];
                                                        const id = event.target.id;
                                                        for (let i in productList) {
                                                            if (i !== id) {
                                                                arr.push(productList[i])
                                                            }
                                                        }
                                                        setProductList(arr)
                                                    }}>
                                                    <FontAwesomeIcon style={{pointerEvents: 'none'}} icon={faTimes}/>
                                                </div> */}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Phương Thức Thanh Toán</div>
                        <div className="dashboard-right">
                            {orderPaymentMethod}
                        </div>
                    </div>
                    {
                    order?.orderStatus == "Comfirming" && 
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div className="flex-center" style={{ marginTop: '40px', marginRight: '40px' }}>
                            <button className="create-box-btn btn" style={{width:"200px"}} onClick={() => onSubmit("Confirmed")}>
                                Xác Nhận Đơn Hàng
                            </button>
                        </div>
                        <div className="flex-center" style={{ marginTop: '40px' }}>
                            <button className="create-box-btn btn" style={{background: "red", width:"200px"}} onClick={() => onSubmit("Cancel")}> 
                                Hủy Đơn Hàng
                            </button>
                        </div>
                    </div>
                    }
                {/* </form> */}
            </div>
        </div>
    )
}