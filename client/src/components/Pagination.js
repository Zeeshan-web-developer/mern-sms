/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-10-26 04:12:46
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-10-26 04:16:11
 */
import React from "react";
import ReactPaginate from "react-paginate";
function Pagination(props) {
  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageCount={props.pageCount}
      onPageChange={props.PageChange}
      containerClassName={"paginationBttns"}
      previousLinkClassName="previousBttn"
      nextLinkClassName="nextBttn"
      disabled={"disabled"}
      activeClassName="paginationActive"
    />
  );
}

export default Pagination;
