import Footer from '../components/Home/Footer';
import { useEffect } from 'react';
import Header from '../components/Home/Header';
import IntroductionContent from '../components/Introduction/IntroductionContent';

function Introduction() {

  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  return (
    <div className="Introduction">
      <Header/>
      <IntroductionContent/>
      <Footer/>
    </div>
  );
}

export default Introduction;
