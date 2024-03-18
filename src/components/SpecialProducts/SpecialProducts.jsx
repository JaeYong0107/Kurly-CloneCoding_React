import { useState, useEffect } from 'react';

import Product from '../Product/Product.jsx'
import './SpecialProducts.css';


export default function SpecialProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://kurly-copy-default-rtdb.firebaseio.com/product.json');
                const resData = await response.json();
                setProducts(resData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])

    return (
        < div className="special" >
            <a>
                <span>지금 가장 많이 담는 특가</span>
                <img src="다음-icon.svg" />
            </a>
            <p>컬리 추천 특가템 최대 50%</p>
            <div className='product-container'>
                <ul>
                    {products.map((product) => (
                        <Product key={product.id} {...product} />
                    ))}
                </ul>
                <button className='next-button' />
            </div>
        </div >
    )
}