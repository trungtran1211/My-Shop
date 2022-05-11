import React from 'react';
import HeaderMain from './Header-wrapper/HeaderMain';
import HeaderTop from './Header-wrapper/HeaderTop'

const Header = () => {
    return (
        <header>
            <HeaderTop/>
            <HeaderMain/>
        </header>
    );
};

export default Header;