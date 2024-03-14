export default function Product(props) {
    const discountPrice = (100 - props.discount) * props.price / 100

    return (
        <li className='product' id={props.id}>
            <div className='img-container'>
                <img src={props.image} />
            </div>
            <button>
                <img src='장바구니-icon.svg' />
                담기
            </button>
            <p>{props.title}</p>
            <p>{props.discount}% {discountPrice}원</p>
            {props.inquiry !== '0' && <p className="inquiry">
                <img src="문의-icon.png" />{props.inquiry}
            </p>}
        </li>
    )
}