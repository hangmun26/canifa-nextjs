const ContainerBody = () => {
    return (
        <div>
            <p
                className="container__body-heading"
                style={{ color: 'red', fontWeight: 900, fontSize: '50px' }}
            >
                Ưu đãi riêng bạn
            </p>
            <span className="container__img">
                <img
                    src="./asset/img/body/list_image_tablet1669012142.webp"
                    alt=""
                    className="container__body-img-50"
                />
                <img
                    src="./asset/img/body/list_image_tablet_second1669084785.webp"
                    alt=""
                    className="container__body-img-50"
                />
            </span>

            <img
                src="./asset/img/body/bé.webp"
                alt=""
                className="container__body-img-100"
            />
        </div>
    )
}

export default ContainerBody
