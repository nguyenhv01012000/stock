import React, { useContext, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { BACKEND } from '../../../../env';

export default function DashboardSubscriberCreate(props) {

    const createForm = useRef();

    const [bankAccount, setBankAccount] = useState("")
    const [bankName, setBankName] = useState("")
    const [accountName, setAccountName] = useState("")


    const onSubmit = (event) => {
        event.preventDefault()
        axios.post(BACKEND + '/email', 
          {
                bankAccount: bankAccount,
                bankName: bankName,
                accountName: accountName,
            },
            {headers: { "authorization": `Bearer ${localStorage.getItem('token')}` },
        }
        ).then((res) => {
            props.setCloseCreateFunc(false);
            props.setToastFunc(true);
        })
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box">
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        Thông Tin Tài Khoản Ngân Hàng
                    </div>
                    <div
                        className="create-box-title-close flex-center"
                        onClick={() => {
                            props.setCloseCreateFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Số Tài Khoản</div>
                        <div className="dashboard-right">
                            <input
                                type="number" name="email"
                                value={bankAccount}
                                onChange={(event) => {
                                    setBankAccount(event.target.value)
                                }} required
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tên Ngân Hàng</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="email"
                                value={bankName}
                                onChange={(event) => {
                                    setBankName(event.target.value)
                                }} required
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Tên Tài Khoản</div>
                        <div className="dashboard-right">
                            <input
                                type="text" name="email"
                                value={accountName}
                                onChange={(event) => {
                                    setAccountName(event.target.value)
                                }} required
                            ></input>
                        </div>
                    </div>
                    <div className="flex-center" style={{ marginTop: '40px' }}>
                        <button className="create-box-btn btn">
                            Tạo Tài Khoản Ngân Hàng
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}