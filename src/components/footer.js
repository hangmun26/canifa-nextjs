const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__grid">
                <div className="footer__row">
                    <div className="footer__column">
                        <div className="footer__column-1">
                            <h3 className="footer__name">
                                CÔNG TY CỔ PHẦN CANIFA
                            </h3>
                            <p className="footer__title-1">
                                Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, nơi
                                cấp: Sở Kế hoạch và đầu tư Hà Nội
                            </p>
                            <p className="footer__title-1">
                                Trụ sở chính: Số 688, Đường Quang Trung, Phường
                                La Khê, Quận Hà Đông, Hà Nội, Việt Nam
                            </p>
                            <p className="footer__title-1">
                                Địa chỉ liên hệ: Phòng 301 Tòa nhà GP Invest,
                                170 La Thành, P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội
                            </p>
                            <p className="footer__title-1">
                                Số điện thoại: +8424 - 7303.0222
                            </p>
                            <p className="footer__title-1">
                                Fax: +8424 - 6277.6419
                            </p>
                            <p className="footer__title-1">
                                Địa chỉ email: hello@canifa.com
                            </p>
                        </div>

                        <div className="footer__column-2">
                            <h3 className="footer__name">THƯƠNG HIỆU</h3>
                            <ul className="footer__title-list">
                                <li className="footer__title-item">
                                    Giới thiệu
                                </li>
                                <li className="footer__title-item">Tin tức</li>
                                <li className="footer__title-item">
                                    Tuyển dụng
                                </li>
                                <li className="footer__title-item">
                                    Với cộng đồng
                                </li>
                                <li className="footer__title-item">
                                    Hệ thống cửa hàng
                                </li>
                                <li className="footer__title-item">Liên hệ</li>
                            </ul>
                        </div>

                        <div className="footer__column-3">
                            <h3 className="footer__name">Hỗ trợ</h3>
                            <ul className="footer__title-list">
                                <li className="footer__title-item">Hỏi đáp</li>
                                <li className="footer__title-item">
                                    Chính sách KHTT
                                </li>
                                <li className="footer__title-item">
                                    Chính sách vận chuyển
                                </li>
                                <li className="footer__title-item">
                                    Hướng dẫn chọn size
                                </li>
                                <li className="footer__title-item">
                                    Kiểm tra đơn hàng
                                </li>
                                <li className="footer__title-item">
                                    Quy định đổi hàng
                                </li>
                                <li className="footer__title-item">
                                    Tra cứu điểm thẻ
                                </li>
                                <li className="footer__title-item">
                                    Chính sách bảo mật
                                </li>
                            </ul>
                        </div>

                        <div className="footer__column-4">
                            <h3 className="footer__name">Hỗ trợ</h3>
                            <div className="footer__code">
                                <img
                                    src="./asset/img/code/bancode.png"
                                    alt="Bank code"
                                    className="footer__code-img"
                                />
                                <a href="/" className="footer__code-link">
                                    <img
                                        src="./asset/img/code/googleplay.png"
                                        alt="Google Play"
                                    />
                                </a>
                                <a href="/" className="footer__code-link">
                                    <img
                                        src="./asset/img/code/appstore.png"
                                        alt="App Store"
                                    />
                                </a>
                            </div>

                            <h3 className="footer__name">
                                Phương thức thanh toán
                            </h3>
                            <div className="footer__visa">
                                <img
                                    src="./asset/img/code/pay.svg"
                                    alt="Payment methods"
                                />
                            </div>

                            <a href="/" className="footer__announced-link">
                                <img
                                    src="./asset/img/code/bocongthuong.png"
                                    alt="Bo Cong Thuong"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
