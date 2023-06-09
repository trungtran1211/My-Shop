import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../axiosClient/httpImage';
import './product.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation } from "swiper";
import numeral from 'numeral';
import { useSelector } from 'react-redux';
import cart from '../../axiosClient/CartApi';

const ProductNews = ({productNew}) => {
    console.log(productNew);
    const infoUser = useSelector((state) => state.user.user.id);

    const handleAddCart = (id) => {
        
            cart.addCart(id,infoUser)
                .then((response) => {
                    console.log(response);
            })
                .catch((e) => {
                    console.log("Loi",e);
            });
        
    };



    return (
        <div className='product'>
            <h2 className='product__title'>SẢN PHẨM MỚI NHẤT</h2>
            <div className="button-news-prev image-swiper-button-prev">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <div className="button-news-next image-swiper-button-next">
                <i className="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                className="mySwiper"
                navigation={{
                nextEl: ".button-news-prev",
                prevEl: ".button-news-next",
                }}
                modules={[Navigation]}
            >
                {productNew.map((item) =>
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
                        <div className='product__tagnew'>
                            NEW
                        </div>
                        <div className='action'>
                            <ul className='action__list'>
                                <li>
                                    <div onClick={() => handleAddCart(item.prod_id)}>
                                        <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                    </div>    
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

export default ProductNews;