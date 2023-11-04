import '../App.css';
import Header from '../components/Home/Header'; 
import Footer from '../components/Home/Footer'; 
import { useEffect, useState } from 'react';
import Axios from 'axios';
import CourseCategory from '../components/Course/CourseCategory';

function CourseCategoryList(props) {

    return (
        <div className="News">
        <Header/>
        <CourseCategory category={props.match.params.id}/>
        <Footer/>
        </div>
    );
}

export default CourseCategoryList;
