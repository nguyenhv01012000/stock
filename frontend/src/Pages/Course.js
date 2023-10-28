import Footer from '../components/Home/Footer';
import { useEffect } from 'react';
import Header from '../components/Home/Header';
import CourseList from '../components/Course/CourseList';

function Course() {

  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  return (
    <div className="Course">
      <Header/>
      <CourseList/>
      <Footer/>
    </div>
  );
}

export default Course;
