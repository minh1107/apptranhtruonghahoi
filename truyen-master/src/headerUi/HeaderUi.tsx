import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import logoHeader from "../component/img/imgheader.jpg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const HeaderUi = () => {
  const [[left, width], setLine] = useState<any>([0, 0]);
  const [close, setClose] = useState<boolean>(true);
  // useEffect(() => {
  //   if (left && width)
  //     localStorage.setItem("line_pos", JSON.stringify({ left, width }));
  //   else {
  //     if (!JSON.parse(localStorage.getItem("line_pos")))
  //       localStorage.setItem(
  //         "line_pos",
  //         JSON.stringify({ left: 30, width: 40 })
  //       );
  //   }
  //   const line_pos = JSON.parse(localStorage.getItem("line_pos"));
  //   if (line_pos) setLine([line_pos.left, line_pos.width]);
  // }, [left, width]);
  // const handerMenu = () => {
  //   const menu = document.querySelector(".HD");
  //   if (menu) {
  //     if (menu.clientHeight === 56) {
  //       menu.style.height = "300px";
  //     }
  //   } else {
  //     menu.style.height = "56px";
  //   }
  // };
  const handleResize = () => {
    if (window.innerWidth < 800) {
      setClose(true);
    } else {
      setClose(false);
    }
  };

  // create an event listener
  useEffect(() => {
    if (window.innerWidth < 800) {
      setClose(true);
    } else {
      setClose(false);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <HeaderUis>
        <div className="HD">
          <img className="logoHeader" src={logoHeader} alt="" />
          <div
            onClick={() => {
              setClose(!close);
            }}
            className="menuMobile"
          >
            <FaBars />
          </div>
          {!close && (
            <div className="RponHd">
              <Link
                onClick={(e: any) => {
                  setLine([e.target.offsetLeft, e.target.offsetWidth]);
                  handleResize();
                }}
                className="HDlink"
                to="/"
              >
                trang chủ
              </Link>
              <Link
                onClick={(e: any) => {
                  setLine([e.target.offsetLeft, e.target.offsetWidth]);
                  handleResize();
                }}
                className="HDlink"
                to="/gioithieu"
              >
                giới thiệu
              </Link>
              <Link
                onClick={(e: any) => {
                  setLine([e.target.offsetLeft, e.target.offsetWidth]);
                  handleResize();
                }}
                className="HDlink"
                to="/sanpham"
              >
                sản phẩm
              </Link>
              <Link
                onClick={(e: any) => {
                  setLine([e.target.offsetLeft, e.target.offsetWidth]);
                  handleResize();
                }}
                className="HDlink"
                to="/hoidap"
              >
                hỏi đáp
              </Link>
            </div>
          )}
        </div>

        <LineUi offset={{ left, width }} />
      </HeaderUis>
    </>
  );
};

export default memo(HeaderUi);
const HeaderUis = styled.div`
  position: sticky;
  z-index: 12000000000000;
  width: 100%;
  background-color: #ed1c2a;
  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    background-color: #ccc;
    bottom: 0;
  }
  & .HD {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    @media (max-width: 800px) {
      display: block;
      height: auto;
    }
  }
  & .logoHeader {
    border-radius: 50%;
    width: 56px;
    @media (max-width: 800px) {
      width: 50px;
    }
  }
  & .HDlink {
    padding: 20px 20px;
    text-decoration: none;
    color: #fff;
    line-height: 56px;
    text-transform: uppercase;
    @media (max-width: 800px) {
      padding: 0;
    }
  }
  & .RponHd {
    @media (max-width: 800px) {
      display: grid;
    }
  }
  & .menuMobile {
    display: none;
    @media (max-width: 800px) {
      display: block;
      float: right;
      font-size: 30px;
      color: #fff;
    }
  }
`;
const LineUi = styled.div`
  position: absolute;
  left: ${(props: { offset: { left?: any; width?: any } }) =>
    props.offset.left}px;
  width: ${(props: { offset: { left?: any; width?: any } }) =>
    props.offset.width}px;
  bottom: 0;
  height: 4px;
  border-radius: 15px;
  background: #2ba8be;
  transition: all 0.2s ease;
  @media (max-width: 800px) {
    display: none;
  }
`;
