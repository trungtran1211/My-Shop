import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Menuleft.scss";
import CategoryApi from '../../axiosClient/CategoryApi'

const Menuleft = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategory()
    }, []);

    const getCategory = () => {
            CategoryApi.getAll()
            .then((response) => {
                setCategory(response.data.cate);
            })
            .catch((e) => {
                console.log("Loi",e);
            });
    };
    console.log(category)
    return (
        <div id="sidebar" className="Menuleft">
            <nav>
                <ul>
                    <h3 className="cate-title">Danh mục sản phẩm</h3>
                    {category && category.map((item) =>
                    <li key={item.cate_id}>
                        <Link to={`/category/${item.cate_id}`}>
                           {item.tenloai}
                        </Link>
                    </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Menuleft;