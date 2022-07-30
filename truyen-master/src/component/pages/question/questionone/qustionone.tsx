import React, { memo, useState } from "react";
import styled from "styled-components";

const Qustionone = () => {
  const [show, setShow] = useState<boolean>(false);
  const [click1, setClick1] = useState<Boolean>(false);
  const [click2, setClick2] = useState<Boolean>(false);
  const [click3, setClick3] = useState<Boolean>(false);
  return (
    <QuestionOne>
      <h2 onClick={() => setShow(!show)} className="questionh2">
        1.Bạn có tư vấn thiết kế không?
      </h2>
      {show && (
        <p className="question-p">
          - Bên mình tư vấn thiết kế mẫu độc quyền , hỗ trợ khách hàng tạo ra
          những bức tranh khác biệt và mang bản sắc riêng
        </p>
      )}
      <h2 onClick={() => setClick1(!click1)} className="questionh2">
        2. Giá vẽ tranh tường được tính thế nào
      </h2>
      {click1 && (
        <p className="question-p">
          - Giá vẽ phụ thuộc nhiều vào mẫu vẽ, chất liệu , và khối lượng vẽ
        </p>
      )}
      <h2 onClick={() => setClick2(!click2)} className="questionh2">
        3. Tôi không ở Hà Nội bạn có tới vẽ không
      </h2>
      {click2 && (
        <p className="question-p">
          - Hiện tại chúng mình có thể vẽ ở tất cả các tỉnh thành miền Bắc
        </p>
      )}
      <h2 className="questionh2" onClick={() => setClick3(!click3)}>
        4. Vẽ tranh có nhanh khô không
      </h2>
      {click3 && (
        <p className="question-p">
          - Màu bên mình dùng khoảng 30p là khô và không có mùi
        </p>
      )}
    </QuestionOne>
  );
};

export default memo(Qustionone);
const QuestionOne = styled.div`
  & .question-p {
    background-color: #fff;
    padding: 0 10px;
  }
  & .questionh2 {
    background-color: rgb(43, 168, 190);
    color: #fff;
    border-radius: 4px;
    padding: 0 10px;
  }
`;
