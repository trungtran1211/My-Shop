import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <div className="Header-nav">
            <ul className="sidenav">
                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'#'}>
                        Giới Thiệu
                    </Link>
                </li>
                <li>
                    <Link to={'#'}>
                        Liên Hệ
                    </Link>
                </li>
                <li>
                    <Link to={'#'}>
                        Tuyển Dụng
                    </Link>
                </li>
                <Link to={'#'}>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Cart | &nbsp; 
                    <span className="numberCart">1</span>
                </Link>
            </ul>
            
        </div>
    );
};

export default HeaderNav;