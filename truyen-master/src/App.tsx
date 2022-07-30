import React, { memo, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Home from "./component/pages/home/home";
import Product from "./component/pages/product/Product";
import Question from "./component/pages/question/Question";
import Show from "./component/pages/show/Show";
import HeaderUi from "./headerUi/HeaderUi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Buttoncall from "buttoncall/Buttoncall";
import DetaiShow from "component/pages/show/detaiShow/DetaiShow";
import DetaiShowCafe from "component/pages/show/detaiShow/DetaiShowcafe";
import DetaiShowMamnon from "component/pages/show/detaiShow/DetaiShowManon";
import DetaiShowNhahang from "component/pages/show/detaiShow/DetailVanphong";
import DetaiShowPhongngu from "component/pages/show/detaiShow/DetaiPhongngu";
import DetaiShowPhonggym from "component/pages/show/detaiShow/DetaiGym";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Apps className="App">
      <div className="root">
        <HeaderUi />
        <Buttoncall />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioithieu" element={<Product />} />
          <Route path="/sanpham" element={<Show />} />
          <Route path="/hoidap" element={<Question />} />
          <Route path="/detailShow" element={<DetaiShow />} />
          <Route path="/detailShowCafe" element={<DetaiShowCafe />} />
          <Route path="/detailShowMamnon" element={<DetaiShowMamnon />} />
          <Route path="/detailShowVanphong" element={<DetaiShowNhahang />} />
          <Route path="/detailShowphongngu" element={<DetaiShowPhongngu />} />
          <Route path="/detailShowgym" element={<DetaiShowPhonggym />} />
        </Routes>
      </div>
    </Apps>
  );
}

export default memo(App);

const Apps = styled.div`
  background-color: #ffd64f;
  & .root {
    background-color: #ffd64f;
    max-width: 1200px;
    margin: auto;
    box-shadow: -2px 2px 5px 5px #ffd64f;
  }
`;
