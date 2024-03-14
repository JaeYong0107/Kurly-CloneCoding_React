

import './Main.css';

export default function MainPage() {
    return (
        <main>
            <div className='banner'>
                <img id='banner' src="배너이미지1.jpg" />
            </div>
            <div className="main">
                <a>
                    <span>지금 가장 많이 담는 특가</span>
                    <img src="다음-icon.svg" />
                </a>
                <p>컬리 추천 특가템 최대 50%</p>
            </div>
        </main>)
}