import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../../pages/homepage/Homepage';
import NewMerchant from '../../pages/newmerchant/NewMerchant';
import NewAdd from '../../pages/newad/NewAd';
import { Loginpage } from '../../pages/loginpage/Loginpage';



const Navigator = () => {

    return (

    <div>
    <Router>
        <Routes>
            <Route path='/fruit-market' element={<Homepage />} />
            <Route path='/' element={<Homepage />} />
            <Route path='/newmerchant' element={<NewMerchant />} />
            <Route path='/newad' element={<NewAdd />} />
            <Route path='/login' element={<Loginpage />} />
        </Routes>
    </Router>
    </div>
    )
}

export default Navigator;