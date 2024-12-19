import React, { useState } from 'react'

const TopMenu = () => {
    return (
        <header>
            {/* Navbar */}
            <div className="header__navbar">
                {/* Logo */}
                <div className="header__navbar-logo">
                    <a href="" className="header__navbar-logo-link">
                        <img
                            src="./asset/img/logo.svg"
                            alt=""
                            className="header__navbar-img"
                        />
                    </a>
                </div>
                {/* Header Navbar Header (currently empty) */}
                <div className="header__navbar-header"></div>

                {/* Navbar List */}
                <div className="header__navbar-list">
                    {/* YouTube Icon */}
                    <div className="header__navbar-ytb">
                        <a href="" className="header__navbar-icon-link">
                            <i className="header__navbar-icon header__navbar-icon-ytb fa-brands fa-youtube"></i>
                        </a>
                    </div>

                    {/* Heart Icon */}
                    <div className="header__navbar-heart">
                        <a href="" className="header__navbar-icon-link">
                            <i className="header__navbar-icon fa-regular fa-heart"></i>
                        </a>
                    </div>

                    {/* Shopping Cart */}
                    {/* <div className="header__navbar-cart">
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
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default TopMenu
