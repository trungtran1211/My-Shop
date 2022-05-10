import React from 'react';


const ProductNews = ({data}) => {
    return (
        <div>
            {data && data.map((item, index) =>
                <p key={index}>
                    {item.tensanpham}
                </p>
            )}
        </div>
    );
};

export default ProductNews;