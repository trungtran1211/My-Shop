import React, { useEffect, useState } from 'react';
import {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import ProductApi from '../../axiosClient/ProductApi'
import './Slider.scss';
import "swiper/css";
import "swiper/css/navigation";
import { Image } from '../../axiosClient/httpImage';

const Slider = () => {
    const [slider, setSlider] = useState([]);

    useEffect(() => {
        ProductApi.getSlider()
            .then((response) => {
                setSlider(response.data.slider);
            })
            .catch((e) => {
                console.log(e.response);
            });
    }, []);

    return (
        
        <div className="slider">
            
            <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
            
            {slider.map((item) =>
                <SwiperSlide className='slider__img' key={item.sli_id}>
                    <img src={Image+item.hinhanh} alt=""/>
                </SwiperSlide>
                )}
                 
            </Swiper>
           
        </div>
    );
};

export default Slider;