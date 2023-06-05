import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryApi from '../../axiosClient/CategoryApi'
import './ProductCategory.scss';
import PageCategory from './PageCategory';

function ProductCategory() {
    const {id} = useParams();
    const [productCategory, setProductCategory] = useState([]);
    const [listProductCategory, setListProductCategory] = useState([]);
    

    useEffect(() => {
        CategoryApi.getCateDetails(id)
            .then((response) => {
            setProductCategory(response.data.catename);
            setListProductCategory(response.data.items.data);
        })
            .catch((e) => {
                console.log("Loi",e);
        });
    },[id]);
    return (
        <div className='container cateProduct'>
            <h1 className='cate__heading'>{productCategory.tenloai}</h1>
            <PageCategory pageCategory={listProductCategory}/>
        </div>
    );
}

export default ProductCategory;