import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slider from "component/img/slider1 (1).jpeg";
import slider1 from "component/img/slider1 (1).jpg";
import slider2 from "component/img/slider1 (2).jpeg";
import slider3 from "component/img/slider1 (2).jpg";
import slider4 from "component/img/slider1 (3).jpg";
import slider5 from "component/img/slider1 (4).jpg";
import styled from "styled-components";
import { memo } from "react";
const SlierHome = () => {
  return (
    <SliderHome>
      <Carousel
        showArrows={false}
        autoFocus={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        interval={4000}
        showThumbs={false}
        useKeyboardArrows={true}
        stopOnHover={false}
      >
        <div>
          <img className="sliderHome" alt="" src={slider} />
          <p className="legend">Sự hài lòng của bạn là sứ mệnh của tôi</p>
        </div>
        <div>
          <img className="sliderHome" alt="" src={slider1} />
          <p className="legend  legend1">Thi công Nhanh - Sạch - Đẹp</p>
        </div>
        <div>
          <img className="sliderHome" alt="" src={slider2} />
          <p className="legend">Chất lượng tạo niềm tin</p>
        </div>
        <div>
          <img className="sliderHome" alt="" src={slider3} />
          <p className="legend">
            Tranh tường Hà nội mang cả thế giới tới ngôi nhà của bạn
          </p>
        </div>
        <div>
          <img className="sliderHome" alt="" src={slider4} />
          <p className="legend">Phục vụ những gì bạn xứng đáng</p>
        </div>
        <div>
          <img className="sliderHome" alt="" src={slider5} />
          <p className="legend">
            Chúng tôi tin vào dịch vụ của mình , và bạn biết điều đó
          </p>
        </div>
      </Carousel>
    </SliderHome>
  );
};

export default memo(SlierHome);

const SliderHome = styled.div`
  & .legend {
    background-color: rgb(43, 168, 190) !important;
    width: 100% !important;
    margin: auto;
    left: 40% !important;
    opacity: 1 !important;
    font-size: 22px !important;
    margin-left: -40% !important;
    @media (max-width: 800px) {
      font-size: 10px !important;
    }
  }
  & .sliderHome {
    height: 400px !important;
    border-radius: 20px;
    width: 100%;
  }
  & .carousel-status {
    display: none !important ;
  }
`;
