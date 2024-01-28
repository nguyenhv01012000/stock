import '../App.css';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import NewsContent from '../components/News/NewsContent';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { BACKEND } from '../env';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';

function NewsDetail(props) {

    const [news, setNews] = useState({})
    const [newsView, setNewsView] = useState([]);
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(() => true)
        window.scrollTo(0, 0)
        Axios.get(BACKEND + `/news/name/` + props.match.params.id)
            .then(res => {
                setNews(res.data)
                setIsActive(()=>false)
            }
            )
    }, [props.match.params.id])

    useEffect(() => {
        let config = {
            params: {
                page: 0,
                limit: 3,
                sort: "view"
            },
        }
        Axios.get(BACKEND + `/news`, config)
            .then(res => {
                 const arr = [...res.data.news]
                setNewsView(arr)
            }
            )
    }, [])

    return (
        <div className="Home">
            <Header />
            <LoadingOverlay
                active={isActive}
                spinner={<BounceLoader />}
            >
                <NewsContent
                    news={news}
                    newsView={newsView}
                />
            </LoadingOverlay>
            <Footer />
        </div>
    );
}

export default withRouter(NewsDetail);
