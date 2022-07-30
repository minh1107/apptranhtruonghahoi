import Footer from "Footer/Footer";
import { memo } from "react";
import styled from "styled-components";
import Qustionone from "./questionone/qustionone";

const Question = () => {
  return (
    <>
      <Questions>
        <Qustionone />
      </Questions>
      <Footer />
    </>
  );
};

export default memo(Question);

const Questions = styled.div`
  padding-top: 5%;
  width: 90%;
  margin: auto;
  padding-bottom: 5%;
`;
