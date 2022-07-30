import React, { memo, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
// Example items, to simulate fetching from another resources.
function Items({ currentItems }: any) {
  return (
    <Mapanigate>
      <GirdPanigate>
        {currentItems &&
          currentItems.map((item: any) => (
            <div>
              <img src={item.img} alt="" />
            </div>
          ))}
      </GirdPanigate>
    </Mapanigate>
  );
}

function PaginatedItems({ itemsPerPage, items }: any) {
  const [currentItems, setCurrentItems] = useState<any>(null);
  const [pageCount, setPageCount] = useState<any>(0);
  const [itemOffset, setItemOffset] = useState<any>(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, items, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <Panigates>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </Panigates>
  );
}
export default memo(PaginatedItems);

const Panigates = styled.div`
  text-align: center;
  & .pagination {
    justify-content: center;
  }
`;

const Mapanigate = styled.div`
  & .fleximgPanagate {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  & .imgPangate {
    width: 100px;
  }
`;

const GirdPanigate = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  grid-column-gap: 20px;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
  }
  & img {
    width: 100%;
    border-radius: 10px;
    height: 300px;
    margin-bottom: 20px;
    @media (max-width: 600px) {
      height: 200px;
      margin-bottom: 10px;
    }
  }
`;
