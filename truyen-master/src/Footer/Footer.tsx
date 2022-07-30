import React, { Fragment, memo } from "react";
import styled from "styled-components";
import Footer1 from "../../src/component/img/footer.jpg";
import Footer2 from "../../src/component/img/footer1.jpg";
import Footer3 from "../../src/component/img/footer2.jpg";
import Footer4 from "../../src/component/img/footer4.jpg";
import Footer5 from "../../src/component/img/footer5.jpg";
import Footer6 from "../../src/component/img/footer6.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <AffterFooter>
        <p className="footer--p">Phạm Xuân Ngọc</p>
        <p>
          Chuyên cung cấp sản phẩm Tranh treo tường : Vẽ tranh tường | Điện
          thoại
          <a className="footer-a" href="tel:034734664">
            034734664
          </a>
        </p>
      </AffterFooter>
      <Footers>
        <Link to="/sanpham" className="linkFooter">
          <h2 className="footerH2"> Xem sản phẩm của chúng tôi</h2>
          <div className="flexFooter">
            <img className="imgFooter" src={Footer1} alt="" />
            <img className="imgFooter" src={Footer2} alt="" />
            <img className="imgFooter" src={Footer3} alt="" />
            <div>
              <img className="imgFooter" src={Footer4} alt="" />
              <img className="imgFooter" src={Footer5} alt="" />
              <img className="imgFooter" src={Footer6} alt="" />
            </div>
          </div>
        </Link>
        <div>
          <h2 className="footerH2">tranh tường Hà Nội </h2>
          <a href="tel:0334734664"> 0334734664</a>
          <p>
            Địa chỉ: Tranh tường Hà Nội, 133 Doãn Kế Thiện, Mai Dịch, Cầu Giấy,
            Hà Nội
          </p>
          <a href="dungphamdeveloper24@gmail.com">Ngocpham98998@gmail.com</a>
          <iframe
            title="fanspage"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1646576207717!5m2!1svi!2s"
            width="100%"
            height="250"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <h2 className="footerH2">fanpage</h2>
          <iframe
            title="fanspage"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTranh-t%C6%B0%E1%BB%9Dng-H%C3%A0-N%E1%BB%99i-106240521853162%2Ftabs=timelinewidth=340height=500small_header=falseadapt_container_width=truehide_cover=falseshow_facepile=trueappId"
            width="85%"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </Footers>
    </Fragment>
  );
};

export default memo(Footer);

const Footers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: auto;
  text-align: center;
  padding-bottom: 50px;
  position: relative;
  @media (max-width: 800px) {
    display: block;
  }
  & .linkFooter {
    text-decoration: none;
  }
  & .imgFooter {
    width: 100px;
    padding-left: 10px;
    height: 100px;
    cursor: pointer;
  }
  & .footerH2 {
    color: #fff;
    width: 100%;
    background-color: #ed1c2a;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 100;
  }
  & ::after {
    position: absolute;
    content: "";
  }
`;

const AffterFooter = styled.div`
  text-align: center;
  position: relative;
  margin-top: 10px;
  padding-top: 50px;
  ::before {
    content: "Niềm vui của chúng tôi là làm các bạn hạnh phúc ";
    position: absolute;
    width: 80%;
    border-radius: 10px;
    margin: auto;
    margin-top: -20px;
    left: 10%;
    background-color: #ccc;
  }
  & .footer--p {
    padding: 10px 0;
  }
`;
