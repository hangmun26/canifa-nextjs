// HeartIcon.js
import { useState } from 'react';

function HeartIcon() {
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = () => {
    setIsClicked(!isClicked); // Đổi trạng thái khi nhấn
  };

  return (
    <i
      className="fa-regular fa-heart grid__column-3-icon"
      style={{
        color: isClicked ? 'red' : 'black', // Đổi màu thành đỏ khi nhấn
        transition: 'color 0.3s', // Hiệu ứng chuyển màu mượt
        cursor: 'pointer', // Thay đổi con trỏ chuột khi hover
      }}
      onClick={handleIconClick} // Xử lý sự kiện nhấn
    ></i>
  );
}

export default HeartIcon;
