import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const SiteCart = ({ watchTime }) => {
    const [time, setTime] = useState(watchTime);
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const getWatchTime = localStorage.getItem('watchTime');
        if(getWatchTime) {
            setTime(getWatchTime);
        }else{
            setTime(0);
        }
        
        // console.log(getWatchTime);
        const getBreakTime = localStorage.getItem("breakTime");
        if (getBreakTime) {
            setBreakTime(getBreakTime);
        } else {
            setBreakTime(0)
        }

    }, [watchTime])

    const handleBreakTime = (bt) => {
        localStorage.setItem("breakTime", bt);
        setBreakTime(bt);
    };

    const handleComplete = (time) => {
        toast("WOW I have watch movies!!");
    };

    const removeTime = () => {
        localStorage.removeItem('watchTime');
        setTime(0);
        localStorage.removeItem('breakTime');
        setBreakTime(0);
    }


    return (
        <div className='p-3 text-center sticky-top'>
            <h1>My Cart</h1>
            <div className="mt-5 text-center">
                <p>Total watch time</p>
                <input className='text-center' type="text" value={time} disabled />
            </div>
            <h5 className="mt-5">Add Break time</h5>
            <dutton onClick={() => handleBreakTime(15)} className="w-25 btn-circle m-1 btn btn-info">15</dutton>
            <dutton onClick={() => handleBreakTime(20)} className="w-25 btn-circle bg-warning btn btn-info">20</dutton>
            <dutton onClick={() => handleBreakTime(25)} className="w-25 btn-circle m-1 bg-danger btn btn-info">25</dutton>
            <input className='text-center' type="text" value={breakTime} disabled />
            <button onClick={handleComplete} className="mt-5 btn btn-info w-100"> Complete</button>
            <button onClick={()=>removeTime(time)} className="mt-5 btn btn-warning w-100"> Remove Time</button>
        </div>
    );
};

export default SiteCart;