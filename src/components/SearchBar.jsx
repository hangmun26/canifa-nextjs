import React, { useState } from 'react'
import HeartIcon from './HeartIcon.js'
// import '../pages/index.js'

const SearchBar = () => {
    const [search, setSearch] = useState('')
    console.log(search)
    const [searchResult, setSearchResult] = useState(null)

    const handleSubmit = () => {
        if (search.toLowerCase()) {
            // Lưu từ khóa tìm kiếm
            setSearch((prev) => [...prev, search])

            // Kiểm tra từ khóa và đặt kết quả tìm kiếm
            if (
                search.toLowerCase().includes('nữ') ||
                search.toLowerCase().includes('nu')
            ) {
                setSearchResult('nữ')
            } else if (search.toLowerCase().includes('nam')) {
                setSearchResult('nam')
            } else {
                setSearchResult(null) // Không tìm thấy kết quả
            }
        }
    }
    return (
        <div>
            <div
                className="header__search"
                style={{
                    width: '50%',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    className="header__search-wrap"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        border: '1px solid #ccc',
                        borderRadius: '20px',
                        padding: '5px 10px',
                    }}
                >
                    <input
                        type="text"
                        style={{
                            width: '100%',
                            // border: 'none',
                            outline: 'none',
                            padding: '10px',
                            borderRadius: '20px',
                            marginRight: '10px',
                        }}
                        placeholder="Bạn tìm gì..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <i
                        className="fa-solid fa-magnifying-glass"
                        style={{ cursor: 'pointer', color: '#333' }}
                        onClick={handleSubmit}
                    ></i>
                </div>
            </div>

            {/*hiện thị kết quả search  nam */}

            {searchResult === 'nam' && (
                <div className="product">
                    <h3
                        className="container__product--heading"
                        style={{
                            color: 'red',
                            fontSize: '50px',
                            fontWeight: 900,
                        }}
                    >
                        Thời trang nam
                    </h3>
                    <div className="grid">
                        <div className="grid__row">
                            <div className="grid__coulmn-1">
                                {/* <div className="container__product-big">
                               <img
                                   src="./asset/img/ao nỉ/áo nỉ to.webp"
                                   alt=""
                                   className="container__product-big-img"
                               />
                           </div> */}
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
                                    <div className="grid__coulmn-3--sale">
                                        -30%
                                    </div>
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
                                    <div className="grid__coulmn-3--sale">
                                        -30%
                                    </div>
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
                                    <div className="grid__coulmn-3--sale">
                                        -30%
                                    </div>
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
            )}

            {searchResult === 'nữ' && (
                <div className="product">
                    <h3
                        className="container__product--heading"
                        style={{
                            color: 'red',
                            fontSize: '50px',
                            fontWeight: 900,
                        }}
                    >
                        Thời trang nữ
                    </h3>
                    <div className="grid">
                        <div className="grid__row">
                            <div className="grid__coulmn-1">
                                <div className="container__product-big">
                                    <img
                                        src="./asset/img/ao nỉ/list_image_tablet_third1668562568.webp"
                                        alt=""
                                        className="container__product-big-img"
                                    />
                                </div>
                            </div>

                            <div className="grid__coulmn-3">
                                <div className="grid__coulmn-chia3">
                                    <a
                                        href="./cart1.html"
                                        className="container__product-little-link"
                                    >
                                        <div
                                            className="container__product-little-img"
                                            style={{
                                                backgroundImage:
                                                    'url(https://canifa.com/img/486/733/resize/2/t/2te22w005-so178-2-thumb.webp)',
                                            }}
                                        ></div>
                                        <p className="grid__coulmn-chia3-shopping">
                                            THÊM VÀO GIỎ HÀNG
                                        </p>
                                    </a>

                                    <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
                                    <div className="grid__coulmn-3--sale">
                                        -30%
                                    </div>
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
                                                Áo len nam bé trai
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
                                                    'url(https://canifa.com/img/486/733/resize/8/t/8te22w023-sy119-2-thumb.webp)',
                                            }}
                                        ></div>
                                        <p className="grid__coulmn-chia3-shopping">
                                            THÊM VÀO GIỎ HÀNG
                                        </p>
                                    </a>

                                    <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
                                    <div className="grid__coulmn-3--sale">
                                        -30%
                                    </div>
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
                                                Áo len nam
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
                                                    'url(https://canifa.com/img/486/733/resize/2/t/2te22w007-sl036-1-thumb.webp)',
                                            }}
                                        ></div>
                                        <p className="grid__coulmn-chia3-shopping">
                                            THÊM VÀO GIỎ HÀNG
                                        </p>
                                    </a>

                                    <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
                                    <div className="grid__coulmn-3--sale">
                                        -30%
                                    </div>
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
                                                Áo len nam bé trai
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
            )}
        </div>
    )
}

export default SearchBar
