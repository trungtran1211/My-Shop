import React, { useEffect, useState } from 'react';
import ProductApi from '../../axiosClient/ProductApi'
import ProductNews from './ProductNews';
import ProductHots from '../Products/ProductHot';
import ProductTrends from '../Products/ProductTrend';

const Products = () => {
    const [ProductNew, setProductNew] = useState([]);
    const [ProductHot, setProductHot] = useState([]);
    const [ProductTrend, setProductTrend] = useState([]);
    useEffect(() => {
        getProductList()
    }, []);

    const getProductList = () => {
        ProductApi.getAll()
            .then((response) => {
                setProductNew(response.data.news);
                setProductHot(response.data.featured);
                setProductTrend(response.data.news);
            })
            .catch((e) => {
                console.log(e.response);
            });
    };
    return (
        <div className='productMain'>
            <ProductNews productNew={ProductNew}/>
            <ProductHots productHot={ProductHot}/>
            <ProductTrends productTrend= {ProductTrend}/>
        </div>
    );
};

export default Products;