
import specialPriceDummyData from '../../../data/specialPrice_Dummy.js';
import Product from '../Product/Product.jsx'
import './SpecialProducts.css';


export default function SpecialProducts() {
    return (
        <div className="special">
            <a>
                <span>지금 가장 많이 담는 특가</span>
                <img src="다음-icon.svg" />
            </a>
            <p>컬리 추천 특가템 최대 50%</p>
            <div className='product-container'>
                <ul>
                    {specialPriceDummyData.map((product) => (
                        <Product key={product.id} {...product} />
                    ))}
                </ul>
                <button className='next-button' />
            </div>
        </div>
    )
}