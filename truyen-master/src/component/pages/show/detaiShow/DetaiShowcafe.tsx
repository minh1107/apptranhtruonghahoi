import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataCafe } from "../showCafenhahang/ShowCafe";
const DetaiShowCafe = () => {
  return (
    <GirdDetaiH2>
      <div className="linkdetail">
        <Link to="/sanpham" className="detailBack">
          Trở Lại
        </Link>
      </div>
      <div className="girdBackDetail">
        <h2 className="girdH2">Hình ảnh tranh vẽ cafe </h2>
      </div>
      <GirdDetail>
        {DataCafe.map((item: any) => {
          return (
            <div>
              <img className="girdDetailImg" src={item.img} alt="" />
            </div>
          );
        })}
      </GirdDetail>
    </GirdDetaiH2>
  );
};

export default memo(DetaiShowCafe);
const GirdDetail = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 20px;
  margin: auto;
  padding-bottom: 30px;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 95%;
    margin: auto;
    gap: 10px;
  }
  & .girdDetailImg {
    width: 100%;
    height: 300px;
    border-radius: 4px;
    @media (max-width :600px){
    height: 200px;
  }
  }
`;

const GirdDetaiH2 = styled.div`
  color: #fff;
  & .girdH2 {
    padding-top: 20px;
  }
  & .girdBackDetail {
    text-align: center;
  }
  & .detailBack {
    color: #000;
    padding-top: 20px;
    text-decoration: none;
    margin-top: 20px;
    margin-left: 20px;
  }
  & .linkdetail {
    padding-top: 20px;
  }
`;
