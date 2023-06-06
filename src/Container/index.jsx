import React from 'react';
import './container.scss';
import Menuleft from './Menuleft/Menuleft';
import Products from './Products/Products';
import Slider from './Slider/Slider';
import BrandList from './Brand/BrandList';

const Containerbody = () => {
    return (
        <>
            <div className="container home-main main" >
                <Menuleft/>
                <Slider/>
            </div>
            <div className='container home-product'>
                <BrandList/>
                <Products/>
            </div>
        </>
    );
};

export default Containerbody;