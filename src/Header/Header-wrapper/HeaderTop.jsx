import React from 'react';
import { Link } from 'react-router-dom';
import './Header-wrapper.scss'

const HeaderTop = () => {
    return (
            <div className="header-top">
            <ul>
                <li>
                    <Link to={'#'}>Đăng nhập</Link>
                </li>
                <li>
                    <Link to={'#'}>Đăng ký</Link>
                </li>
                <li>
                    <Link to={'#'}>Đăng Xuất</Link>
                </li>
                <li>
                    <Link to={'#'} ><i className="fa fa-user" aria-hidden="true" ></i>Tài khoản</Link>
                </li>
                <li>
                    <Link to={'#'}><i className="fa fa-heart" aria-hidden="true" ></i>Sản phẩm yêu thích</Link>
                </li>
            </ul>
        </div>
        
    );
};

export default HeaderTop;