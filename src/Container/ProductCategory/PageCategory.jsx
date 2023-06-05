import React from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Image } from '../../axiosClient/httpImage';
import numeral from 'numeral';

function PageCategory({pageCategory}) {
    const itemsPerPage = 6;
    const data = pageCategory;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

  return (
    <>
        <div className='cateProduct__product main'>
            {currentItems.map((item) => 
                <div className='cateProduct__item' key={item.prod_id}>
                    <div className='cateProduct__img'>
                        <img src={Image+item.hinhanh}></img>
                    </div>
                    <h3 className='cateProduct__title'>{item.tensanpham}</h3>
                    <span className='cateProduct__price'>{numeral(item.dongia).format('0,0')+' VNĐ'}</span>
                </div>
            )}
        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className='cateProduct__navigation'
        />
    </>
  );
}

export default PageCategory;