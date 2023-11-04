import { faCheckCircle, faFileInvoice, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import DashboardProductTable from './DashboardOrderTable'

export default function DashboardOrder(props) {

    const [table, setTable] = useState([])

    useEffect(()=>{ 
        setTable([
            "Mã Đơn Hàng",
            "Email",
            "Số điện thoại",
            "Ngày Mua",
            "Phương Thức Thanh Toán",
            "Số lượng",
            "Số Tiền",
            "Trạng Thái",
            ""
        ])
    }, [])
    

    return (
        <div className="dashboard-product">
            <div className={props.toast ? "toast toast-show" : "toast"} style={{top: '20px'}}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                Cập Nhập Đơn Hàng Thàng Công!
            </div>
            <DashboardProductTable
                icon = {faFileInvoice}
                title = "Orders"
                color = "orange"
                table = {table}
                setOpenCreateFunc = {props.setOpenCreateFunc}
                setCloseCreateFunc = {props.setCloseCreateFunc}
                setOpenEditFunc = {props.setOpenEditFunc}
                setCloseEditFunc = {props.setCloseEditFunc}
                isChange = {props.isChange}
            />
        </div>
    )
}