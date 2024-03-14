
import './SpecialTimeout.css';

const product = {
    id: 'stp1',
    image: 'https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=800,height=400,quality=85/product/image/7603a12a-a742-42bd-a652-49a966e78b96.jpg',
    title: '[압구정주꾸미] 주꾸미 볶음 2종 (택1)',
    description: '마늘의 감칠맛이 듬뿍',
    discount: 32,
    price: 8900,
    inquiry: '9,999+',
}

export default function SpecialTimeout() {
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
                        <img src={product.image} />
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