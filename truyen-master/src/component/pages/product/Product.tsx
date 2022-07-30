import React, { memo } from "react";
import imgproduct from "component/img/productimg2.jpg";
import styled from "styled-components";
import imgProduct1 from "component/img/imgproduct.jpg";
import Footer from "Footer/Footer";
const Product = () => {
  return (
    <>
      <ProductImg>
        <img className="imgProduct" src={imgproduct} alt="" />
        <img src={imgProduct1} className="imgProduct" alt="" />
        <h2 className="ProductH2">Giới thiệu Tranh tường Hà nội</h2>
        <p>
          Tranh tường Hà Nội là nơi hội tụ những tinh hoa nghệ thuật thuần túy
          vốn dĩ đa sắc màu, cội nguồn của dòng chảy mỹ thuật từ ngàn xưa. Lấy
          cảm hứng từ hai chữ "Đất Việt" chúng tôi đã ra đời nhằm đáp ứng nhu
          cầu về thưởng thức nghệ thuật của tất cả quý khách hàng trên mọi miền
          đất nước. Đặc biệt là khu vực Miền Bắc, nghệ thuật đang trong giai
          đoạn phát triển. Nhu cầu về trang trí phòng khách, sân vườn và tiểu
          cảnh, hòn non bộ, ở các trường học, khu vui chơi giải trí, trường mầm
          non…Các dịch vụ: nhà hàng, quán bar, karaoke, quán coffee...cũng được
          trang trí một cách khang trang hơn theo nhiều phong cách khác nhau.
        </p>
        <h2 className="ProductH2">Màu Sắc Và Tạo Hình Ấn Tượng </h2>
        <p>
          Màu sắc và tạo hình là yếu tố quyết định trong một tác phẩm nghệ
          thuật. Rất nhiều Họa Sĩ hay Nghệ Nhân có thể tạo ra một sản phẩm nghệ
          thuật đẹp. Tuy nhiên quan trọng nhất là phải thể hiện được điều khách
          hàng cần. Màu sắc và tạo hình của tác phẩm phải gần gũi với người
          thưởng thức. Để có được những khách hàng đã sở hữu những tác phẩm nghệ
          thuật tuyệt đẹp mà do nhóm chúng tôi Tranh tường Hà Nội thực hiện.Luôn
          bắt đầu mỗi giữ án từ việc lên thiết kế maket, từ ngôn ngữ tạo hình
          đến màu sắc của tác phẩm, mục đích, mục tiêu thể hiện thành công tác
          phẩm mà yêu cầu của khách hàng đưa ra. Nhờ bàn tay tài hoa của nhiều
          Họa Sĩ có nhiều năm kinh nghiệm, sản phẩm nghệ thuật của bạn sẽ được
          thể hiện một cách sinh động hơn, dễ hiểu, gần gũi và riêng biệt theo
          phong cách của quý khách hàng{" "}
        </p>
        <h2 className="ProductH2">Phong Cách Sáng Tạo Đầy Cảm Hứng </h2>
        <p>
          Nhìn phong cách làm việc của Tranh tường Hà nội rất đặc biệt. Bút pháp
          phóng khoáng, tinh thần sáng tạo cao. Làm việc một cách khoa học và
          nghiêm túc. Đặc biệt Tranh tường Hà nội làm việc nhiều phong cách trên
          nhiều chất liệu khác nhau, nội dung truyền đạt cô đọng sáng tạo và dễ
          hiểu, dễ đi vào thế giới nội tâm của người thưởng thức.
        </p>
        <h2 className="ProductH2">Luôn Lắng Nghe Ý Kiến Của Khách Hàng </h2>
        <p>
          Hiểu được tâm lý của khách hàng và nắm bắt được nhu cầu của thị
          trường, nhóm Họa sĩ Tranh tường Hà nội đã ra đời nhằm mang đến cho quý
          khách hàng những không gian nghệ thuật thật hài lòng và ưng ý nhất.
          Đến với Tranh tường Hà nội khách hàng sẽ được tận mắt chứng kiến những
          tác phẩm nghệ thuật đang hiện hữu dần dần đưa quý khách hàng đi từ bất
          ngờ này đến bất ngờ khác, với chất lượng cao và giá cả vô cùng hợp lý.
          Đồng thời nhóm chúng tôi chuyên nhận vẽ tranh sơn dầu, sơn mài, tranh
          phù điêu trên mọi chất liệu khác nhau tại xưởng vẽ, theo đơn đặt của
          quý khách hàng. Sự phong phú về thể loại và phong cách thực hiện, sự
          đảm bảo về chất lượng và sự chu đáo hết mình, chính là thước đo cho sự
          thành công của nhóm chúng tôi Tranh tường Hà nội.Tranh tường Hà nội
          chúng tôi cam kết phục vụ quý khách hàng với một chất lượng tối đa
          nhất. Quý khách hàng hoàn toàn yên tâm và tin tưởng khi lựa chọn nhóm
          Họa Sĩ Tranh tường Hà nội. Chúng tôi tiếp nhận và thực hiện mọi yêu
          cầu qua đơn đặt của quý khách một cách nhanh nhất .
        </p>
      </ProductImg>
      <Footer />
    </>
  );
};

export default memo(Product);

const ProductImg = styled.div`
  padding-top: 5%;
  width: 80%;
  margin: auto;
  & .imgProduct {
    width: 50%;
    border-radius: 4px;
  }
  & .ProductH2 {
    color: #fff;
  }
`;
