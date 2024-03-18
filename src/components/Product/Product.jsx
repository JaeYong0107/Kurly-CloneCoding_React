import { useDispatch } from 'react-redux'

import './Product.css'
import { viewActions } from '../../store/view';

export default function Product(props) {
    const dispatch = useDispatch();

    const discountPrice = (100 - props.discount) * props.price / 100

    function clickHandler() {
        console.log('click')
        dispatch(viewActions.toRecentView({ id: props.id, title: props.title, image: props.image }));
    }

    return (
        <li className='product'>
            <div className='img-container'>
                <img src={props.image} onClick={clickHandler} />
            </div>
            <button className='product-button'>
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