import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductApi from '../../axiosClient/ProductApi';
import { Image } from '../../axiosClient/httpImage';
import numeral from 'numeral';


function ProductSearch() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() =>{
        ProductApi.getSearch(key)
            .then((response) => {
            setSearchResults(response.data.search);
        })
            .catch((e) => {
                console.log("Loi",e);
        });
    },[key]);

    return (
        <div className='container searchPage main'>
            <h1 className='searchPage__heading'>Tìm kiếm với từ khoá: <span>{key}</span></h1>
            <div className='searchPage__list'>
                {searchResults.length === 0 ? <h3 className='searchPage__none'>Không tìm thấy sản phẩm với từ khoá này</h3> : 
                    searchResults.map((item) =>
                        <div className='searchPage__item' key={item.prod_id}>
                            <Link to={`/detail/${item.prod_id}`}>
                                    <div className='searchPage__img'>
                                        <img src={Image+item.hinhanh} alt=""/>
                                    </div>
                                    <div className='searchPage__content'>
                                        <h2 className='searchPage__title'>{item.tensanpham}</h2>
                                        <span className='searchPage__price'>{numeral(item.dongia).format('0,0')+'VNĐ'}</span>
                                    </div> 
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default ProductSearch;