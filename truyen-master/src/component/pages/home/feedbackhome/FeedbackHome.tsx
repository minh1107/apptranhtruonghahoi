import React, { memo } from "react";
import styled from "styled-components";
import ImgFeedback from "../../../img/reason1.png";
import ImgFeedback1 from "../../../img/reason2.png";
import ImgFeedback2 from "../../../img/reason3.png";
import ImgFeedback3 from "../../../img/reason4.png";
import ImgFeedback4 from "../../../img/reason5.png";
const FeedbackHome = () => {
  return (
    <FeedbackHomes>
      <h2 className="feedbackh2">5 LÝ DO BẠN NÊN CHỌN CHÚNG TÔI</h2>

      <div>
        <div className="girdFeedback">
          <div className="line--Affter">
            <img src={ImgFeedback} alt="" />
            <p>1 : Thi công nhanh , đảm bảo tiến độ</p>
          </div>
          <div className="line--Affter">
            <img src={ImgFeedback1} alt="" />
            <p>2 : Đội ngũ hoạ sĩ tay nghề cao</p>
          </div>
          <div className="line--Affter">
            <img src={ImgFeedback2} alt="" />
            <p>3 : Giá cả cạnh tranh nhất thị trường</p>
          </div>
          <div className="line--Affter">
            <img src={ImgFeedback3} alt="" />
            <p>4 : Tư vấn thiết kế mẫu miễn phí</p>
          </div>
          <div className="bottom--Line">
            <img src={ImgFeedback4} alt="" />
            <p>5 : Chế độ bảo hành lâu dài</p>
          </div>
        </div>
      </div>
    </FeedbackHomes>
  );
};

export default memo(FeedbackHome);

const FeedbackHomes = styled.div`
  text-align: center;
  & .feedbackh2 {
    color: #fff;
    padding-top: 100px;
  }
  & .line--Affter {
    position: relative;
    padding: 20px 0;
    ::after {
      content: "";
      position: absolute;
      width: 25%;
      height: 2px;
      background-color: #ccc;
      left: 38%;
    }
  }
  & .bottom--Line {
    margin-bottom: 50px;
  }
`;
