import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png'
const HeaderMain = () => {
    return (
        <div className='headerMain'>
            <div id='logo' className='logo'>
                <Link to={'/'}>
                    <img src={logo} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default HeaderMain;