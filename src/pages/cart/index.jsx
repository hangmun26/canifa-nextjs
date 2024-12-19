import React from "react";
import {Cart} from "../../components/Cart";

const CartPage = () => {
  return (

    <div className="cart__size">
      <Cart></Cart>
      <div className="cart__name">
        <ul className="cart__name-list">
          <li>
            <a href="#">Trang chủ </a>
          </li>
          <li>
            <a href="#">Bé trai</a>
          </li>
          <li>
            <a href="#">Thời trang hàng ngày</a>
          </li>
          <li>
            <a href="#">Áo khoác gió</a>
          </li>
          <li>Áo khoác bé trai</li>
        </ul>
      </div>

      <div className="cart__product">
        <div className="cart__product-wrap">
          <div className="cart__product-wrap-big">
            <img
              src="./asset/img/thêm vào giỏ hàng/to2.webp"
              alt=""
              className="cart__big-img"
            />
          </div>

          <div className="cart__product-wrap-little">
            <img
              src="./img/thêm vào giỏ hàng/bes1.webp"
              alt=""
              className="cart__little-img"
            />
            <img
              src="./img/thêm vào giỏ hàng/bes2.webp"
              alt=""
              className="cart__little-img"
            />
            <img
              src="./img/thêm vào giỏ hàng/bes3.webp"
              alt=""
              className="cart__little-img"
            />
            <img
              src="./img/thêm vào giỏ hàng/bes4.webp"
              alt=""
              className="cart__little-img"
            />
          </div>
        </div>

        <div className="cart__info">
          <h1 className="cart__info-heading">Quần jeans bé trai</h1>
          <p className="cart__info-code">MÃ SP: 2BJ22W001</p>

          <div className="cart__info--price-box">
            <div className="cart__info--price">239.200 ₫</div>
            <div className="cart__info--old-price">299.200 đ</div>
          </div>

          <div className="cart__info--attribute">
            <div className="cart__info-color">Màu sắc: SJ758</div>
            <div className="cart__info-color-select">
              <p className="cart__info-color-1"></p>
              <p className="cart__info-color-2"></p>
            </div>
          </div>

          <div className="cart__info--label">
            <p className="cart__info--label-size">Kích cỡ:</p>
            <div className="cart__info--error">
              <ul className="cart__info--error-list">
                <li className="cart__info--error-item">90</li>
                <li className="cart__info--error-item">100</li>
                <li className="cart__info--error-item">110</li>
                <li className="cart__info--error-item">120</li>
                <li className="cart__info--error-item">130</li>
                <li className="cart__info--error-item">140</li>
                <li className="cart__info--error-item">150</li>
                <li className="cart__info--error-item nhat">160</li>
              </ul>
            </div>
          </div>

          <div className="cart__info--guide">
            <a href="#" className="cart__info--guide-link">
              <p className="cart__info--guide-name">Hướng dẫn chọn size</p>
            </a>

            <div className="cart__info--guide-decription">
              <ul className="cart__info--description-list">
                <li className="cart__info--description-item">
                  <i className="cart__info--description-icon fa-solid fa-check"></i>
                  <span className="cart__info--description-1">
                    Miễn phí giao hàng Cho đơn hàng từ
                  </span>
                  <span className="cart__info--description-price">
                    499.000đ
                  </span>
                </li>

                <li className="cart__info--description-item">
                  <i className="fa-solid fa-check cart__info--description-icon"></i>
                  <span className="cart__info--description-1">
                    Đổi trả miễn phí trong vòng<b> 30 ngày</b> kể từ ngày mua
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="cart__info-btn">
            <button className="cart__info--cart-btn">THÊM VÀO GIỎ</button>

            <button className="cart__info--cart-btn cart__info--shop-btn">
              <a href="#" className="cart__info--shop-btn-link">
                TÌM TẠI CỬA HÀNG
              </a>
            </button>
          </div>

          <div className="cart__info--heart">
            <div className="cart__info--like">
              <i className="fa-regular fa-heart cart__info--heart-icon"></i>
              <span className="cart__heart">Thêm vào yêu thích</span>
            </div>

            <div className="cart__info--share">
              <i className="fa-solid fa-share cart__info--heart-icon"></i>
              <span className="cart__share">Chia sẻ bạn bè</span>
            </div>
          </div>

          <div className="cart__info--detailed">
            <div className="cart__info--active">
              <h4 className="cart__info--active-title">Mô tả</h4>
              <p className="cart__info--active-name">
                Quần jeans chất liệu cotton pha, cạp chun.
              </p>
            </div>

            <h4 className="cart__info--detailed1">Chất liệu</h4>
            <h4 className="cart__info--detailed1">Hướng dẫn sử dụng</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
