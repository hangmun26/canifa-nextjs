// import React, { useState } from 'react'
// import HeartIcon from './HeartIcon.js'


// const SearchBar = () => {
//     const [search, setSearch] = useState('')
//     console.log(search)
//     const [searchResult, setSearchResult] = useState(null)

//     const handleSubmit = () => {
//         if (search.toLowerCase()) {
//             // Lưu từ khóa tìm kiếm
//             setSearch((prev) => [...prev, search])

//             // Kiểm tra từ khóa và đặt kết quả tìm kiếm
//             if (
//                 search.toLowerCase().includes('nữ') ||
//                 search.toLowerCase().includes('nu')
//             ) {
//                 setSearchResult('nữ')
//             } else if (search.toLowerCase().includes('nam')) {
//                 setSearchResult('nam')
//             } else {
//                 setSearchResult(null) // Không tìm thấy kết quả
//             }
//             // search('')
//             setSearch("")
//     }
//     return (

   


//  <div className="header__search" style={{
//   width: '50%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//  }}>
//   <div className="header__search-wrap" style={{
//     display: 'flex',
//     alignItems: 'center',
//     width: '100%',
//     border: '1px solid #e0e0e0', // Màu border nhẹ nhàng hơn
//     borderRadius: '25px', // Bo tròn các góc
//     backgroundColor: '#fff',
//     padding: '5px',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Thêm shadow nhẹ
//     transition: 'all 0.3s ease', // Hiệu ứng hover mượt mà
//     '&:hover': {
//       boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
//     }
//   }}>
//     <input
//       type="text"
//       style={{
//         width: '100%',
//         height: '40px',
//         outline: 'none',
//         border: 'none', // Bỏ border của input
//         padding: '0 15px',
//         fontSize: '16px',
//         borderRadius: '25px',
//         backgroundColor: 'transparent',
//       }}
//       placeholder="Bạn tìm gì?"
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//     />
//     <i
//       className="fa-solid fa-magnifying-glass"
//       style={{
//         cursor: 'pointer',
//         color: '#007BFF',
//         fontSize: '18px',
//         padding: '0 15px',
//         transition: 'color 0.3s ease', // Hiệu ứng hover
//         '&:hover': {
//           color: '#0056b3'
//         }
//       }}
//       onClick={handleSubmit}
//     ></i>
//   </div>



//             {/*hiện thị kết quả search  nam */}

//             {searchResult === 'nam' && (
//                 <div className="product">
//                     <h3
//                         className="container__product--heading"
//                         style={{
//                             color: 'red',
//                             fontSize: '50px',
//                             fontWeight: 900,
//                         }}
//                     >
//                         Thời trang nam
//                     </h3>
//                     <div className="grid">
//                         <div className="grid__row">
//                             <div className="grid__coulmn-1">
                          
//                                 <div className="container__product-big">
//                                     <img
//                                         src="./asset/img/ao nỉ/áo nỉ to.webp"
//                                         alt=""
//                                         className="container__product-big-img"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="grid__coulmn-3">
//                                 <div className="grid__coulmn-chia3">
//                                     <a
//                                         href="./cart.html"
//                                         className="container__product-little-link"
//                                     >
//                                         <div
//                                             className="container__product-little-img"
//                                             style={{
//                                                 backgroundImage:
//                                                     'url(https://canifa.com/img/486/733/resize/8/t/8tw22w013-sb060-1-thumb.webp)',
//                                             }}
//                                         ></div>
//                                         <p className="grid__coulmn-chia3-shopping">
//                                             THÊM VÀO GIỎ HÀNG
//                                         </p>
//                                     </a>

//                                     <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
//                                     <div className="grid__coulmn-3--sale">
//                                         -30%
//                                     </div>
//                                     <div className="grid__coulmn-3--option">
//                                         <div className="grid__coulmn-3--color">
//                                             <span className="grid__coulmn-3--color1"></span>
//                                             <span className="grid__coulmn-3--color2"></span>
//                                             <span className="grid__coulmn-3--color3"></span>
//                                         </div>

//                                         <a
//                                             href="./cart.html"
//                                             className="grid__coulmn-3--name-link"
//                                         >
//                                             <div
//                                                 className="grid__coulmn-3--name"
//                                                 style={{ color: 'red' }}
//                                             >
//                                                 Áo nỉ nam in chữ
//                                             </div>
//                                         </a>

//                                         <div className="grid__coulmn-3--price">
//                                             349.000đ
//                                         </div>
//                                         <div className="grid__coulmn-3--old-price">
//                                             499.000đ
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="grid__coulmn-chia3">
//                                     <a
//                                         href="./cart1.html"
//                                         className="container__product-little-link"
//                                     >
//                                         <div
//                                             className="container__product-little-img"
//                                             style={{
//                                                 backgroundImage:
//                                                     'url(https://canifa.com/img/486/733/resize/8/t/8tw22w030-sr019-1-thumb.webp)',
//                                             }}
//                                         ></div>
//                                         <p className="grid__coulmn-chia3-shopping">
//                                             THÊM VÀO GIỎ HÀNG
//                                         </p>
//                                     </a>

//                                     <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
//                                     <div className="grid__coulmn-3--sale">
//                                         -30%
//                                     </div>
//                                     <div className="grid__coulmn-3--option">
//                                         <div className="grid__coulmn-3--color">
//                                             <span className="grid__coulmn-3--color1"></span>
//                                             <span className="grid__coulmn-3--color2"></span>
//                                             <span className="grid__coulmn-3--color3"></span>
//                                         </div>

//                                         <a
//                                             href="./cart1.html"
//                                             className="grid__coulmn-3--name-link"
//                                         >
//                                             <div className="grid__coulmn-3--name">
//                                                 Áo nỉ nam in chữ
//                                             </div>
//                                         </a>

//                                         <div className="grid__coulmn-3--price">
//                                             349.000đ
//                                         </div>
//                                         <div className="grid__coulmn-3--old-price">
//                                             499.000đ
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="grid__coulmn-chia3">
//                                     <a
//                                         href="./cart1.html"
//                                         className="container__product-little-link"
//                                     >
//                                         <div
//                                             className="container__product-little-img"
//                                             style={{
//                                                 backgroundImage:
//                                                     'url(https://canifa.com/img/486/733/resize/1/t/1tw22w060-sr019-1-thumb.webp)',
//                                             }}
//                                         ></div>
//                                         <p className="grid__coulmn-chia3-shopping">
//                                             THÊM VÀO GIỎ HÀNG
//                                         </p>
//                                     </a>

//                                     <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
//                                     <div className="grid__coulmn-3--sale">
//                                         -30%
//                                     </div>
//                                     <div className="grid__coulmn-3--option">
//                                         <div className="grid__coulmn-3--color">
//                                             <span className="grid__coulmn-3--color1"></span>
//                                             <span className="grid__coulmn-3--color2"></span>
//                                             <span className="grid__coulmn-3--color3"></span>
//                                         </div>

//                                         <a
//                                             href="./cart1.html"
//                                             className="grid__coulmn-3--name-link"
//                                         >
//                                             <div className="grid__coulmn-3--name">
//                                                 Áo nỉ bé gái
//                                             </div>
//                                         </a>

//                                         <div className="grid__coulmn-3--price">
//                                             349.000đ
//                                         </div>
//                                         <div className="grid__coulmn-3--old-price">
//                                             499.000đ
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {searchResult === 'nữ' && (
//                 <div className="product">
//                     <h3
//                         className="container__product--heading"
//                         style={{
//                             color: 'red',
//                             fontSize: '50px',
//                             fontWeight: 900,
//                         }}
//                     >
//                         Thời trang nữ
//                     </h3>
//                     <div className="grid">
//                         <div className="grid__row">
//                             <div className="grid__coulmn-1">
//                                 <div className="container__product-big">
//                                     <img
//                                         src="./asset/img/ao nỉ/list_image_tablet_third1668562568.webp"
//                                         alt=""
//                                         className="container__product-big-img"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="grid__coulmn-3">
//                                 <div className="grid__coulmn-chia3">
//                                     <a
//                                         href="./cart1.html"
//                                         className="container__product-little-link"
//                                     >
//                                         <div
//                                             className="container__product-little-img"
//                                             style={{
//                                                 backgroundImage:
//                                                     'url(https://canifa.com/img/486/733/resize/2/t/2te22w005-so178-2-thumb.webp)',
//                                             }}
//                                         ></div>
//                                         <p className="grid__coulmn-chia3-shopping">
//                                             THÊM VÀO GIỎ HÀNG
//                                         </p>
//                                     </a>

//                                     <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
//                                     <div className="grid__coulmn-3--sale">
//                                         -30%
//                                     </div>
//                                     <div className="grid__coulmn-3--option">
//                                         <div className="grid__coulmn-3--color">
//                                             <span className="grid__coulmn-3--color1"></span>
//                                             <span className="grid__coulmn-3--color2"></span>
//                                             <span className="grid__coulmn-3--color3"></span>
//                                         </div>
//                                         <a
//                                             href="./cart1.html"
//                                             className="grid__coulmn-3--name-link"
//                                         >
//                                             <div className="grid__coulmn-3--name">
//                                                 Áo len nam bé trai
//                                             </div>
//                                         </a>
//                                         <div className="grid__coulmn-3--price">
//                                             349.000đ
//                                         </div>
//                                         <div className="grid__coulmn-3--old-price">
//                                             499.000đ
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="grid__coulmn-chia3">
//                                     <a
//                                         href="./cart1.html"
//                                         className="container__product-little-link"
//                                     >
//                                         <div
//                                             className="container__product-little-img"
//                                             style={{
//                                                 backgroundImage:
//                                                     'url(https://canifa.com/img/486/733/resize/8/t/8te22w023-sy119-2-thumb.webp)',
//                                             }}
//                                         ></div>
//                                         <p className="grid__coulmn-chia3-shopping">
//                                             THÊM VÀO GIỎ HÀNG
//                                         </p>
//                                     </a>

//                                     <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
//                                     <div className="grid__coulmn-3--sale">
//                                         -30%
//                                     </div>
//                                     <div className="grid__coulmn-3--option">
//                                         <div className="grid__coulmn-3--color">
//                                             <span className="grid__coulmn-3--color1"></span>
//                                             <span className="grid__coulmn-3--color2"></span>
//                                             <span className="grid__coulmn-3--color3"></span>
//                                         </div>
//                                         <a
//                                             href="./cart1.html"
//                                             className="grid__coulmn-3--name-link"
//                                         >
//                                             <div className="grid__coulmn-3--name">
//                                                 Áo len nam
//                                             </div>
//                                         </a>
//                                         <div className="grid__coulmn-3--price">
//                                             349.000đ
//                                         </div>
//                                         <div className="grid__coulmn-3--old-price">
//                                             499.000đ
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="grid__coulmn-chia3">
//                                     <a
//                                         href="./cart1.html"
//                                         className="container__product-little-link"
//                                     >
//                                         <div
//                                             className="container__product-little-img"
//                                             style={{
//                                                 backgroundImage:
//                                                     'url(https://canifa.com/img/486/733/resize/2/t/2te22w007-sl036-1-thumb.webp)',
//                                             }}
//                                         ></div>
//                                         <p className="grid__coulmn-chia3-shopping">
//                                             THÊM VÀO GIỎ HÀNG
//                                         </p>
//                                     </a>

//                                     <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
//                                     <div className="grid__coulmn-3--sale">
//                                         -30%
//                                     </div>
//                                     <div className="grid__coulmn-3--option">
//                                         <div className="grid__coulmn-3--color">
//                                             <span className="grid__coulmn-3--color1"></span>
//                                             <span className="grid__coulmn-3--color2"></span>
//                                             <span className="grid__coulmn-3--color3"></span>
//                                         </div>
//                                         <a
//                                             href="./cart1.html"
//                                             className="grid__coulmn-3--name-link"
//                                         >
//                                             <div className="grid__coulmn-3--name">
//                                                 Áo len nam bé trai
//                                             </div>
//                                         </a>
//                                         <div className="grid__coulmn-3--price">
//                                             349.000đ
//                                         </div>
//                                         <div className="grid__coulmn-3--old-price">
//                                             499.000đ
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default SearchBar;




import React, { useState } from 'react';
import HeartIcon from './HeartIcon.js';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSubmit = () => {
    const searchTerm = search.toLowerCase().trim();
    if (searchTerm) {
      if (searchTerm.includes('nữ') || searchTerm.includes('nu')) {
        setSearchResult('nữ');
      } else if (searchTerm.includes('nam')) {
        setSearchResult('nam');
      } else {
        setSearchResult(null);
      }
      setSearch('');
    }
  };

  // Component hiển thị sản phẩm
  const ProductCard = ({ image, name, price, oldPrice }) => (
    <div className="grid__coulmn-chia3">
      <a href="./cart.html" className="container__product-little-link">
        <div
          className="container__product-little-img"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <p className="grid__coulmn-chia3-shopping">THÊM VÀO GIỎ HÀNG</p>
      </a>

      <i className="fa-regular fa-heart grid__coulmn-3-icon"></i>
      <div className="grid__coulmn-3--sale">-30%</div>
      <div className="grid__coulmn-3--option">
        <div className="grid__coulmn-3--color">
          <span className="grid__coulmn-3--color1"></span>
          <span className="grid__coulmn-3--color2"></span>
          <span className="grid__coulmn-3--color3"></span>
        </div>

        <a href="./cart.html" className="grid__coulmn-3--name-link">
          <div className="grid__coulmn-3--name">{name}</div>
        </a>

        <div className="grid__coulmn-3--price">{price}</div>
        <div className="grid__coulmn-3--old-price">{oldPrice}</div>
      </div>
    </div>
  );

  // Component kết quả tìm kiếm
  const SearchResults = ({ type }) => {
    const products = type === 'nam' ? [
      {
        image: 'https://canifa.com/img/486/733/resize/8/t/8tw22w013-sb060-1-thumb.webp',
        name: 'Áo nỉ nam in chữ',
        price: '349.000đ',
        oldPrice: '499.000đ'
      },
      {
        image: 'https://canifa.com/img/486/733/resize/8/t/8tw22w030-sr019-1-thumb.webp',
        name: 'Áo nỉ nam in chữ',
        price: '349.000đ',
        oldPrice: '499.000đ'
      },
      {
        image: 'https://canifa.com/img/486/733/resize/1/t/1tw22w060-sr019-1-thumb.webp',
        name: 'Áo nỉ bé gái',
        price: '349.000đ',
        oldPrice: '499.000đ'
      }
    ] : [
      {
        image: 'https://canifa.com/img/486/733/resize/2/t/2te22w005-so178-2-thumb.webp',
        name: 'Áo len nam bé trai',
        price: '349.000đ',
        oldPrice: '499.000đ'
      },
      {
        image: 'https://canifa.com/img/486/733/resize/8/t/8te22w023-sy119-2-thumb.webp',
        name: 'Áo len nam',
        price: '349.000đ',
        oldPrice: '499.000đ'
      },
      {
        image: 'https://canifa.com/img/486/733/resize/2/t/2te22w007-sl036-1-thumb.webp',
        name: 'Áo len nam bé trai',
        price: '349.000đ',
        oldPrice: '499.000đ'
      }
    ];

    return (
      <div className="product">
        <h3
          className="container__product--heading"
          style={{
            color: 'red',
            fontSize: '50px',
            fontWeight: 900,
          }}
        >
          Thời trang {type}
        </h3>
        <div className="grid">
          <div className="grid__row">
            <div className="grid__coulmn-1">
              <div className="container__product-big">
                <img
                  src={type === 'nam' ? './asset/img/ao nỉ/áo nỉ to.webp' : './asset/img/ao nỉ/list_image_tablet_third1668562568.webp'}
                  alt=""
                  className="container__product-big-img"
                />
              </div>
            </div>

            <div className="grid__coulmn-3">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="header__search" style={{
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div className="header__search-wrap" style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          border: '1px solid #e0e0e0',
          borderRadius: '25px',
          backgroundColor: '#fff',
          padding: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
        }}>
          <input
            type="text"
            style={{
              width: '100%',
              height: '40px',
              outline: 'none',
              border: 'none',
              padding: '0 15px',
              fontSize: '16px',
              borderRadius: '25px',
              backgroundColor: 'transparent',
            }}
            placeholder="Bạn tìm gì?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i
            className="fa-solid fa-magnifying-glass"
            style={{
              cursor: 'pointer',
              color: '#007BFF',
              fontSize: '18px',
              padding: '0 15px',
              transition: 'color 0.3s ease',
            }}
            onClick={handleSubmit}
          />
        </div>
      </div>

      {searchResult && <SearchResults type={searchResult} />}
    </div>
  );
};

export default SearchBar;