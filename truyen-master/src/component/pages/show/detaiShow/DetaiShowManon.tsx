import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataManon } from "../ShowManon/ShowManon";
const DetaiShowMamnon = () => {
  return (
    <GirdDetaiH2>
      <div className="linkdetail">
        <Link to="/sanpham" className="detailBack">
          Trở Lại
        </Link>
      </div>
      <div className="girdBackDetail">
        <h2 className="girdH2">Hình ảnh tranh vẽ mần non </h2>
      </div>
      <GirdDetail>
        {DataManon.map((item: any) => {
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

export default memo(DetaiShowMamnon);
const GirdDetail = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 98%;
  margin: auto;
  gap: 20px;
  padding-bottom: 30px;
  margin: auto;
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
    @media (max-width: 600px) {
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
