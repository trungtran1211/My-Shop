import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../axiosClient/httpImage';
import './product.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation } from "swiper";
import numeral from 'numeral';

const ProductHot = ({productHot}) => {
    return (
        <div className='product'>
            <h2 className='product__title'>SẢN PHẨM HOT</h2>
            <div className="button-hot-next image-swiper-button-next">
                <i className="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div className="button-hot-prev image-swiper-button-prev">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                className="mySwiper"
                navigation={{
                nextEl: ".button-hot-prev",
                prevEl: ".button-hot-next",
                }}
                modules={[Navigation]}
                direction="horizontal"
            >
               {productHot.map((item) =>
                    <SwiperSlide className='product__item' key={item.prod_id}>
                        <Link to={`/detail/${item.prod_id}`}>
                            <div className='homebox1__img'>
                                <img src={Image+item.hinhanh} alt=""/>
                            </div>
                            <div className='homebox2__content'>
                                <h2 className='homebox2__title'>{item.tensanpham}</h2>
                                <span className='homebox2__price'>{numeral(item.dongia).format('0,0')+'VNĐ'}</span>
                            </div>  
                        </Link>
                        <div className='product__taghot'>
                            HOT
                        </div>
                        <div className='action'>
                            <ul className='action__list'>
                                <li>
                                    <Link to={'#'}>
                                        <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                    </Link>    
                                </li>
                                <li>
                                    <Link to={'#'}>
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/detail/${item.prod_id}`}>
                                        <i className="fa fa-signal" aria-hidden="true"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                )} 
            </Swiper>
        </div>
    );
};

export default ProductHot;