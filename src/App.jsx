import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import SiteCart from './components/SideCart/SiteCart';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [watchTime, setWatchTime] = useState()
  const handelWatchTime = (time) => {
    // let watchTime = [];
    // console.log('Watchtime', time);
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
    if (previousWatchTime) {
      const currentWatchTime = previousWatchTime + time;
      // console.log(currentWatchTime);
      localStorage.setItem('watchTime', currentWatchTime);
      setWatchTime(currentWatchTime);
    } else {
      localStorage.setItem('watchTime', time);
      setWatchTime(time);
    }
  }
  return (
    <div className='container'>
      <div className="main mt-4 row">
        <div className="home-container col-md-8">
          <Home handelWatchTime={handelWatchTime}></Home>
        </div>
        <div className="site-container col-md-4 card">
          <SiteCart watchTime={watchTime}></SiteCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
