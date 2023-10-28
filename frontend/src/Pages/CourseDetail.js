import Footer from '../components/Home/Footer';
import { useEffect } from 'react';
import Header from '../components/Home/Header';
import CourseInfo from '../components/Course/CourseInfo';

function CourseDetail() {

  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  return (
    <div className="CourseDetail">
      <Header/>
      <CourseInfo/>
      <Footer/>
    </div>
  );
}

export default CourseDetail;
