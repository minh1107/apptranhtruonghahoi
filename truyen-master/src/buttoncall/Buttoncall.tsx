import phone from "component/img/phone1.png";
import "./buttoncall.css";
const Buttoncall = () => {
  return (
    <div className="hotline hidden-xs">
      <img alt="" className="faa-wrench animated test" src={phone} />
      <div className="hotline-no">
        <a href="tel:0334734664">0334734664</a> tư vấn miễn phí
      </div>
    </div>
  );
};

export default Buttoncall;
