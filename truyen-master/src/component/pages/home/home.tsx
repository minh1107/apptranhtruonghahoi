import Footer from "Footer/Footer";
import React, { memo } from "react";
import styled from "styled-components";
import Commit from "./commit/Commit";
import FeedbackHome from "./feedbackhome/FeedbackHome";
import ProductHome from "./productHome/ProductHome";
import SlierHome from "./silderHome/SlierHome";

const Home = () => {
  return (
    <HomePages>
      <SlierHome />
      <Commit />
      <ProductHome />
      <FeedbackHome />
      <Footer />
    </HomePages>
  );
};

export default memo(Home);

const HomePages = styled.div`
  /* padding-top: 5%; */
`;
