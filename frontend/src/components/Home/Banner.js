import React from 'react'
import '../../Styles/Home.css'
import '../../App.css'
import { withRouter } from 'react-router-dom'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import NewsSmall from '../News/NewsSmall';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { BACKEND } from '../../env';

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
        Axios.get(BACKEND + `/news`, config)
            .then(res => {
                 const arr = [...res.data.news]
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
                            <img className="img-fluid h-100" src="../img/BANNER-KHOA-HOC-2023-GIF.gif" style={{objectFit: "cover"}}/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                        <h3 className="m-0">TIN MỚI NHÂT</h3>
                        <Link className="text-secondary font-weight-medium text-decoration-none" to="/news/category/TIN MỚI NHÂT">Xem Tất Cả</Link>
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