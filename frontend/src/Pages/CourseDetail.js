import Footer from '../components/Home/Footer';
import { useEffect, useState } from 'react';
import Header from '../components/Home/Header';
import CourseInfo from '../components/Course/CourseInfo';
import Axios from 'axios';
import ProductReview from '../components/Shop/ProductReview';
import { BACKEND } from '../env';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';

function CourseDetail(props) {
  const [course, setCourse] = useState({})
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(() => true)
    window.scrollTo(0, 0)
    Axios.get(BACKEND + `/products/name/` + props.match.params.id)
      .then(res => {
        setCourse(res.data)
        setIsActive(()=>false)
      }
      )
  }, [props.match.params.id])

  return (
    <div className="CourseDetail">
      <Header />
      <LoadingOverlay
                active={isActive}
                spinner={<BounceLoader />}
            >
        <CourseInfo course={course}/>
      {/* <ProductReview product={course}/> */}
      </LoadingOverlay>
      <Footer />
    </div>
  );
}

export default CourseDetail;
