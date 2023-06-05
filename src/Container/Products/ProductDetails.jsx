import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductApi from '../../axiosClient/ProductApi'

function ProductDetails() {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [comments, setComment] = useState([]);

    useEffect(() => {
        ProductApi.getDetail(id)
        .then((response) => {
            console.log(response);
            setProduct(response.data.item);
            setComment(response.data.comments);
        }).catch((e) => {
            console.log(e.response);
        });
    },[]);
    console.log(product);
    console.log(comments);
    return (
        <div className='container main'>
            test
        </div>
    );
}

export default ProductDetails;