import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

function importAll(r: any) {
  let images: any[] = [];
  r.keys().map((item: any, index: number) => {
    images[index] = r(item);
    return images;
  });
  return images.reduce(
    (arr, item, idx) => [...arr, { id: idx, img: item }],
    []
  );
}

const DataNhahang = importAll(
  require.context("component/img/shownhahang", true, /\.(png|jpe?g|svg)$/)
);

/*
    require.context(<path>, true (ko cần qtam cái này đâu cứ true là được :v), 
    /\.(png|jpe?g|svg)$/ ( regex name file, ở đây nó sẽ lấy file có đuôi .png, .jpe, jpeg, svg ))
    */

export { DataNhahang };

export default class ShowNh extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <LinkCafe>
        <Link to="/detailShow" className="Linkdecafe">
          <h2 className="showmargin">Tranh vẽ tường nhà hàng </h2>
          <TestHomslider>
            <Slider {...settings}>
              {DataNhahang.map((item: any) => {
                return (
                  <Homeslider key={item.id}>
                    <div className="test">
                      <img className="imgCafe" src={item.img} alt="" />
                    </div>
                  </Homeslider>
                );
              })}
            </Slider>
          </TestHomslider>
        </Link>
      </LinkCafe>
    );
  }
}

const Homeslider = styled.div`
  width: 90%;
  margin: auto;
  & .imgCafe {
    width: 95%;
    height: 200px;
  }
`;
const TestHomslider = styled.div`
  width: 90%;
  margin: auto;
`;

const LinkCafe = styled.div`
  & .Linkdecafe {
    text-decoration: none;
    color: #fff;
  }
  & .showmargin {
    margin-left: 20px;
  }
`;
