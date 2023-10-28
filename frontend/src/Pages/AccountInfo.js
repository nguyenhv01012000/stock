import '../App.css';
import Header from '../components/Home/Header'; 
import { useEffect } from 'react';
import Account from '../components/Account/Account';

function AccountInfo() {

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return (
    <div className="Home">
      <Header/>
      <Account/>
    </div>
  );
}

export default AccountInfo;
