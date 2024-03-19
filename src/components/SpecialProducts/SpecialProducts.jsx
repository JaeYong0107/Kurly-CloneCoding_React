import { useState, useEffect } from 'react';

import Product from '../Product/Product.jsx'
import './SpecialProducts.css';
import { fetchData } from '../../utils/http.js';

export default function SpecialProducts({ url }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            const data = await fetchData(url);
            setProducts(data);
        }
        fetchProduct();
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