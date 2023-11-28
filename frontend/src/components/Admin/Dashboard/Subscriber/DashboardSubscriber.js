import { faEnvelope, faLandmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import DashboardProductTable from './DashboardSubscriberTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function DashboardSubscriber(props) {

    const table = [
        "Số Tài Khoản",
        "Tên Ngân Hàng",
        "Tên Tài Khoản",
        ""
    ]

    return (
        <div className="dashboard-product">
            <div className={props.toast ? "toast toast-show" : "toast"} style={{top: '20px'}}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                Cập nhập tài khoản ngân hàng thành công!
            </div>
            <DashboardProductTable
                icon = {faLandmark}
                title = "Tài Khoản Ngân Hàng"
                color = "lightblue"
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