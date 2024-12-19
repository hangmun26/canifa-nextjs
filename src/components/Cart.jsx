export const Cart = () => {
  return (
    <div className="header__navbar-cart">
      <i className="header__navbar-icon fa-solid fa-bag-shopping"></i>
      <span className="header-number">0</span>

      <div className="header__navbar-no-cart">
        <img
          src="./asset/img/cart.svg"
          alt=""
          className="header__navbar-no-cart--img"
        />
        <i className="fa-solid fa-xmark header__navbar-no-cart--nhan"></i>
        <p className="header__navbar-item-cart--description">
          Chưa có sản phẩm trong giỏ hàng của bạn.
        </p>
      </div>
    </div>
  );
};