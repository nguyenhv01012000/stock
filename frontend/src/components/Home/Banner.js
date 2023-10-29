import React from 'react'
import '../../Styles/Home.css'
import '../../App.css'
import { withRouter } from 'react-router-dom'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import NewsSmall from '../News/NewsSmall';

function Banner(props) {
    const [newsLatest, setNewsLatest] = useState([]);
    useEffect(() => {
        let config = {
            params: {
                page: 0,
                limit: 10,
                sort: "latest"
            },
        }
        Axios.get(`http://localhost:4000/news`, config)
            .then(res => {
                const arr = [...res.data]
                setNewsLatest(arr)
            }
            )
    }, [])

    return (
        <div className="container-fluid py-3" style={{marginTop: "100px"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="position-relative mb-3 mb-lg-0">
                        <div className="position-relative overflow-hidden cover-image">
                            <img className="img-fluid h-100" src="https://cophieux.com/wp-content/uploads/2023/05/BANNER-KHOA-HOC-2023-GIF.gif" style={{objectFit: "cover"}}/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                        <h3 className="m-0">TIN MỚI NHÂT</h3>
                        <a className="text-secondary font-weight-medium text-decoration-none" href="">Xem Tất Cả</a>
                    </div>
                    <div className="overflow-auto" style={{maxHeight: "350px"}}>
                                {
                                        newsLatest.map((item, index) => {
                                            return (
                                                <NewsSmall   
                                                    key={index}
                                                    news={item}
                                                />
                                            )
                                        })
                                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default withRouter(Banner)