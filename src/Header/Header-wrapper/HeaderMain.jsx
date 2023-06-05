import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png'
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';
const HeaderMain = () => {
    return (
        <div className='container headerMain'>
            <div className='logo'>
                <Link to={'/'}>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <HeaderSearch/>
            <HeaderNav/>
        </div>
    );
};

export default HeaderMain;