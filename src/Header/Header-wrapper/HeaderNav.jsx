import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cart from '../../axiosClient/CartApi';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const HeaderNav = () => {
    const infoUser = useSelector((state) => state.user.user.id);
    const [cartList, setCartList] = useState();
    useEffect(() => {
        cart.getAll(infoUser)
            .then((response) => {
                setCartList(response.data.count);
        })
            .catch((e) => {
                console.log("Loi",e);
        });
    },[infoUser]);


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
                <li>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Cart | &nbsp; 
                    <span className="numberCart">{cartList}</span>
                </li>
            </ul>
            
        </div>
    );
};

export default HeaderNav;