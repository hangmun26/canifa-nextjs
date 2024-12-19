import React, { useState } from 'react';

const CartPageZise = () => {
    // Trạng thái để lưu kích cỡ được chọn
    const [selectedSize, setSelectedSize] = useState(null);

    // Danh sách các kích cỡ
    const sizes = [90, 100, 110, 120, 130, 140, 150, 160];

    return (
        <div>
            <ul className="cart__info--error-list">
                {sizes.map((size) => (
                    <li
                        key={size}
                        className={`cart__info--error-item ${size === selectedSize ? 'selected' : ''} ${size === 160 ? 'nhat' : ''}`}
                        onClick={() => setSelectedSize(size)} // Chọn kích cỡ khi nhấp
                    >
                        {size}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartPageZise;

