import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './SpecialTimeout.css';
import { viewActions } from '../../store/view';
import { fetchData } from '../../utils/http';

export default function SpecialTimeout({ url }) {
    const [product, setProduct] = useState({ discount: 0 });
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchProduct() {
            const data = await fetchData(url);
            setProduct(data[0]);
        }
        fetchProduct();
    }, [])

    function clickHandler() {
        console.log('click')
        dispatch(viewActions.toRecentView({ id: product.id, title: product.title, image: product.image }));
    }

    const discountPrice = (100 - product.discount) * product.price / 100;

    return (
        <div className='special-timeout-container'>
            <div className="special-timeout">
                <div >
                    <h1>컬리멤버스 특가</h1>
                    <p>매일 달라지는 특가 찬스!</p>
                    <div className="time-out">
                        <img src='시계-icon.svg' />
                        <h1>07 : 28 : 45</h1>
                    </div>
                    <p>망설이면 늦어요!</p>
                </div>
                <div className='stout-product'>
                    <div className='stout-img-container'>
                        <img src={product.image} onClick={clickHandler} />
                    </div>
                    <button className='product-button'>
                        <img src='장바구니-icon.svg' />
                        담기
                    </button>
                    <p>{product.description}</p>
                    <p>{product.title}</p>
                    <p>{product.discount}% {discountPrice}원~</p>
                    {product.inquiry !== '0' && <p className="inquiry">
                        <img src="문의-icon.png" />{product.inquiry}
                    </p>}
                </div>
            </div>
        </div>
    )
}