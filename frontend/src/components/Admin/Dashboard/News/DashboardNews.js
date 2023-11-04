import { faPager } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import DashboardProductTable from './DashboardNewsTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function DashboardNews(props) {

    const table = [
        "Tiêu Đề",
        "Hình Ảnh",
        "Thể Loại",
        "Ngày Xuất Bản",
        "Số lượt Xem",
        // "Hành Động"
    ]

    return (
        <div className="dashboard-product">
            <div className={props.toast ? "toast toast-show" : "toast"} style={{top: '20px'}}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                Cập Nhập Bài Viết Thành Công!
            </div>
            <DashboardProductTable
                icon = {faPager}
                title = "Bài Viết"
                color = "green"
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