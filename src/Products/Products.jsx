import React, { useEffect, useState } from 'react';
import ProductApi from '../axiosClient/ProductApi'
import ProductNews from './ProductNews';

const Products = () => {
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        getProductList()
    }, []);

    const getProductList = () => {
        ProductApi.getAll()
            .then((response) => {
                setProduct(response.data.news);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <div>
            <ProductNews data={Product}/>
        </div>
    );
};

export default Products;