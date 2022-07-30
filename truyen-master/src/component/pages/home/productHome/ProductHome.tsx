import PaginatedItems from "component/panigate/panigate";
import React, { memo } from "react";
import styled from "styled-components";
import { DataImgPanigate } from "component/panigate/DataImgPanigate";
const ProductHome = () => {
  return (
    <ProductHomes>
      <div className="ProductHome">
        <h2 className="productH2">sản phẩm nổi bật</h2>
      </div>
      <PaginatedItems itemsPerPage={10} items={DataImgPanigate} />
    </ProductHomes>
  );
};

export default memo(ProductHome);

const ProductHomes = styled.div`
  max-width: 90%;
  margin: auto;
  & .ProductHome {
    border-radius: 4px;
    text-align: center;
    color: #ed1c2a;
    text-transform: uppercase;
    text-align: start;
  }
  & .productH2 {
    color: #fff;
  }
`;
