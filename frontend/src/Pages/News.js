import '../App.css';
import Header from '../components/Home/Header'; 
import Footer from '../components/Home/Footer'; 
import { useEffect, useState } from 'react';
import Axios from 'axios';
import NewsCategory from '../components/News/NewsCategory';

function News(props) {

    return (
        <div className="News">
        <Header/>
        <NewsCategory category={props.match.params.id}/>
        <Footer/>
        </div>
    );
}

export default News;
