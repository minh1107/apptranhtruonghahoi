import React, { memo } from "react";
import styled from "styled-components";
import Commit1 from "../../../img/bottomSlider.png";
import Commit2 from "../../../img/bottomslider2.png";
import Commit3 from "../../../img/bottomslider3.png";
const Commit = () => {
  return (
    <Commits>
      <div>
        <img src={Commit1} alt="" />
        <h2 className="commith2">Lên thiết kế miễn phí</h2>
        <p>
          Miễn phí thiết kế tranh trường, lên phương án trang trí công trình.
        </p>
      </div>
      <div>
        <img src={Commit2} alt="" />
        <h2 className="commith2">Lên thiết kế miễn phí</h2>
        <p>Bảo hành sản phẩm lên đến 5 năm</p>
      </div>
      <div>
        <img src={Commit3} alt="" />
        <h2 className="commith2">Lên thiết kế miễn phí</h2>
        <p>Luôn cập nhật mẫu tranh tường mới, hiện đại</p>
      </div>
    </Commits>
  );
};

export default memo(Commit);

const Commits = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  text-align: center;
  grid-column-gap: 20px;
  padding-top: 20px;
  @media (max-width: 600px) {
    display: block;
  }
  & .commith2 {
    color: #fff;
  }
`;
