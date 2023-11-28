import './App.css';
import Home from './Pages/Home';
import Product from './Pages/Product';
import News from './Pages/News';
import NewsDetail from './Pages/NewsDetail';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';
import AdminLogin from './components/Admin/Login/Login'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom"; 
import Toast from './components/Toast';
import { CartProvider } from './contexts/Cart';
import { UserProvider } from './contexts/User';
import OpenChatBtn from './components/OpenChatBtn';
import Introduction from './Pages/Introduction';
import AccountInfo from './Pages/AccountInfo';
import Course from './Pages/Course';
import CourseDetail from './Pages/CourseDetail';
import CourseCategoryList from './Pages/CourseCategoryList';
import NewsContent1 from './components/News/NewsContent1';

function App(props) { 
  
  return (  
    <UserProvider>
    <CartProvider>
      <Router>
        <div className="App"> 
          <Toast/>
          <Route path="/" exact component={Home}></Route> 
          <Route path="/introduction" exact component={Introduction}></Route> 
          <Route path="/course" exact component={Course}></Route> 
          <Route path="/course/:id" exact component={CourseDetail}></Route> 
          <Route path="/course-category/:id" exact component={CourseCategoryList}></Route> 

          <Route path="/news/category/:id" exact component={News}></Route> 
          <Route path="/news/account/:id" exact component={NewsContent1}></Route> 

          <Route path="/cat" exact component={Product}></Route> 
          <Route path="/news" exact component={News}></Route> 
          <Route path="/news/detail/:id" exact component={NewsDetail}></Route> 
          <Route path="/login" exact component={Login}></Route> 
          <Route path="/admin" exact component={AdminLogin}></Route> 
          <Route path="/account" exact component={AccountInfo}></Route> 
          <Route path="/checkout/:id" exact component={Checkout}></Route> 
          <Route path="/admin/dashboard" exact component={Dashboard}></Route> 
          <Route path="/admin/dashboard/:id" exact component={Dashboard}></Route> 
        </div> 
        {/* <OpenChatBtn/> */}
      </Router> 
    </CartProvider>
    </UserProvider>
  );
}
export default App;
