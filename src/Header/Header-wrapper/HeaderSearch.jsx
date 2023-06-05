import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductApi from '../../axiosClient/ProductApi';

const HeaderSearch = () => {
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [product, setProduct] = useState([]);
    const listSearch = document.querySelector('.listSearch__product');
    const closeSearch = document.querySelector('.closeSearch');

    useEffect(() =>{
        ProductApi.getSearch(searchKey)
            .then((response) => {
            setSearchResults(response.data.search);
        })
            .catch((e) => {
                console.log("Loi",e);
        });
    },[searchKey]);

    const handleChange = (term) => {
        const key = term; 
        setSearchKey(key);
        const results = searchResults.filter((result) => 
            result.tensanpham.toLowerCase().includes(key.toLowerCase())
        );
        listSearch.style.opacity = "1";
        closeSearch.style.opacity = "1";
        setProduct(results);
    };

    const handleInputChange = (e) => {
        const term = e.target.value;
        if (term === '') {
            listSearch.style.opacity = "0";
            closeSearch.style.opacity = "0";
            setSearchKey('');
        } else {
            handleChange(term);
        }
      };

    const handleRemoveSearch = () => {
        setProduct([]);
    }
   
    const test = () => {
        listSearch.style.opacity = "0";
        closeSearch.style.opacity = "0";
        setSearchKey('')
    }

    return (
        <div className="search-wrapper">
            <input
                type="text"
                placeholder="Search"
                className='filed-search'
                onChange={handleInputChange}
                value={searchKey}
            />
            <i className="fa fa-times-circle-o closeSearch" onClick={test} aria-hidden="true"></i>
            <Link to={`/search?key=${searchKey}`} onClick={test} className={!searchKey && searchKey === '' ? 'disabled' : '' }>
                <button type='submit' onClick={handleRemoveSearch} className='search-icon'>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </Link>
            <ul className='listSearch__product'>
                { product.length === 0 ? <li>Không tìm thấy sản phẩm với từ khoá này.</li> : product.map((result) => (
                    <li key={result.prod_id}>
                        <Link to={'#'}>
                            {result.tensanpham}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeaderSearch;