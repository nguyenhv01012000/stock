import Banner from '../components/Home/Banner';
import Features from '../components/Home/Features';
import Footer from '../components/Home/Footer';
import { useEffect } from 'react';
import Header from '../components/Home/Header';

function Home() {

  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  return (
    <div className="Home">
      <Header/>
      <Banner/> 
      <Features/>
      <Footer/>
    </div>
  );
}

export default Home;
