// import '../pages/index.js'

const ProductAoNi = () => {
    return (
        <div className="container__product">
            <div className="product">
                <h3
                    className="container__product--heading"
                    style={{ color: 'red', fontSize: '50px', fontWeight: 900 }}
                >
                    Áo nỉ
                </h3>
                <div className="grid">
                    <div className="grid__row">
                        <div className="grid__coulmn-1">
                            <div className="container__product-big">
                                <img
                                    src="./asset/img/ao nỉ/áo nỉ to.webp"
                                    alt=""
                                    className="container__product-big-img"
                                />
                            </div>
                        </div>

                        <div className="grid__coulmn-3">
                            <div className="grid__coulmn-chia3">
                                <a
                                    href="./cart.html"
                                    className="container__product-little-link"
                                >
                                    <div
                                        className="container__product-little-img"
                                        style={{
                                            backgroundImage:
                                                'url(https://canifa.com/img/486/733/resize/8/t/8tw22w013-sb060-1-thumb.webp)',
                                        }}
                                    ></div>
                                    <p className="grid__coulmn-chia3-shopping">
                                        THÊM VÀO GIỎ HÀNG
                                    </p>
                                </a>

                                <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
                                <div className="grid__coulmn-3--sale">-30%</div>
                                <div className="grid__coulmn-3--option">
                                    <div className="grid__coulmn-3--color">
                                        <span className="grid__coulmn-3--color1"></span>
                                        <span className="grid__coulmn-3--color2"></span>
                                        <span className="grid__coulmn-3--color3"></span>
                                    </div>

                                    <a
                                        href="./cart.html"
                                        className="grid__coulmn-3--name-link"
                                    >
                                        <div
                                            className="grid__coulmn-3--name"
                                            style={{ color: 'red' }}
                                        >
                                            Áo nỉ nam in chữ
                                        </div>
                                    </a>

                                    <div className="grid__coulmn-3--price">
                                        349.000đ
                                    </div>
                                    <div className="grid__coulmn-3--old-price">
                                        499.000đ
                                    </div>
                                </div>
                            </div>

                            <div className="grid__coulmn-chia3">
                                <a
                                    href="./cart1.html"
                                    className="container__product-little-link"
                                >
                                    <div
                                        className="container__product-little-img"
                                        style={{
                                            backgroundImage:
                                                'url(https://canifa.com/img/486/733/resize/8/t/8tw22w030-sr019-1-thumb.webp)',
                                        }}
                                    ></div>
                                    <p className="grid__coulmn-chia3-shopping">
                                        THÊM VÀO GIỎ HÀNG
                                    </p>
                                </a>

                                <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
                                <div className="grid__coulmn-3--sale">-30%</div>
                                <div className="grid__coulmn-3--option">
                                    <div className="grid__coulmn-3--color">
                                        <span className="grid__coulmn-3--color1"></span>
                                        <span className="grid__coulmn-3--color2"></span>
                                        <span className="grid__coulmn-3--color3"></span>
                                    </div>

                                    <a
                                        href="./cart1.html"
                                        className="grid__coulmn-3--name-link"
                                    >
                                        <div className="grid__coulmn-3--name">
                                            Áo nỉ nam in chữ
                                        </div>
                                    </a>

                                    <div className="grid__coulmn-3--price">
                                        349.000đ
                                    </div>
                                    <div className="grid__coulmn-3--old-price">
                                        499.000đ
                                    </div>
                                </div>
                            </div>

                            <div className="grid__coulmn-chia3">
                                <a
                                    href="./cart1.html"
                                    className="container__product-little-link"
                                >
                                    <div
                                        className="container__product-little-img"
                                        style={{
                                            backgroundImage:
                                                'url(https://canifa.com/img/486/733/resize/1/t/1tw22w060-sr019-1-thumb.webp)',
                                        }}
                                    ></div>
                                    <p className="grid__coulmn-chia3-shopping">
                                        THÊM VÀO GIỎ HÀNG
                                    </p>
                                </a>

                                <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
                                <div className="grid__coulmn-3--sale">-30%</div>
                                <div className="grid__coulmn-3--option">
                                    <div className="grid__coulmn-3--color">
                                        <span className="grid__coulmn-3--color1"></span>
                                        <span className="grid__coulmn-3--color2"></span>
                                        <span className="grid__coulmn-3--color3"></span>
                                    </div>

                                    <a
                                        href="./cart1.html"
                                        className="grid__coulmn-3--name-link"
                                    >
                                        <div className="grid__coulmn-3--name">
                                            Áo nỉ bé gái
                                        </div>
                                    </a>

                                    <div className="grid__coulmn-3--price">
                                        349.000đ
                                    </div>
                                    <div className="grid__coulmn-3--old-price">
                                        499.000đ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAoNi
