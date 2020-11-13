import React, { useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

export const Pagination = ({ pageSize, count, onChange }) => {
    const pageCount = useMemo(() => {
        if (!pageSize || pageSize <= 0) {
            return 1;
        }
        
        return Math.ceil(count / pageSize);
    }, [pageSize, count]);

    return (
        <ReactPaginate
            nextLabel={'Next'}
            previousLabel={'Prev'}
            breakLabel={'...'}
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            
            onPageChange={onChange}

            containerClassName="b-pagination"
            pageClassName="b-pagination__page"
            nextClassName="b-pagination__page"
            breakClassName="b-pagination__break"
            previousClassName="b-pagination__page"
            activeClassName="b-pagination__page--active"
        />
    );
};
