import React from 'react';
import ReactPaginate from 'react-paginate';
function Pagination(props) {
  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageCount={props.pageCount}
      onPageChange={props.PageChange}
      containerClassName={'paginationBttns'}
      previousLinkClassName="previousBttn"
      nextLinkClassName="nextBttn"
      disabled={'disabled'}
      activeClassName="paginationActive"
    />
  );
}

export default Pagination;
