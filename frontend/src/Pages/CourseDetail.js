import Footer from '../components/Home/Footer';
import { useEffect, useState } from 'react';
import Header from '../components/Home/Header';
import CourseInfo from '../components/Course/CourseInfo';
import Axios from 'axios';
import ProductReview from '../components/Shop/ProductReview';
import { BACKEND } from '../env';

function CourseDetail(props) {
  const [course, setCourse] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
    Axios.get(BACKEND + `/products/` + props.match.params.id)
      .then(res => {
        setCourse(res.data)
      }
      )
  }, [props.match.params.id])

  return (
    <div className="CourseDetail">
      <Header />
      <CourseInfo course={course}/>
      {/* <ProductReview product={course}/> */}
      <Footer />
    </div>
  );
}

export default CourseDetail;
