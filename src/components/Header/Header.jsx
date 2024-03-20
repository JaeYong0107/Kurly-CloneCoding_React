import { useNavigate, Link } from 'react-router-dom';


import './Header.css';
import Category from '../Category';


let mainTextButtonClass = "text-button-action"
let beautyTextButtonClass = "text-button"
export default function Header() {
    const navigate = useNavigate();

    function toMain() {
        navigate('/');
        mainTextButtonClass === 'text-button' ? mainTextButtonClass += '-action' : undefined;
        beautyTextButtonClass = "text-button"
    }

    function toBeauty() {
        navigate('/beauty');
        beautyTextButtonClass === 'text-button' ? beautyTextButtonClass += '-action' : undefined;
        mainTextButtonClass = "text-button"
    }

    return (
        <header className="header-container">
            <div className='header'>
                <div id="header1">
                    <a>회원가입</a>
                    <div />
                    <Link to='member/login'>로그인</Link>
                    <div />
                    <a>
                        고객센터
                        <span></span>
                    </a>
                </div>
                <div id="header2">
                    <div className="logo">
                        <img src="kurly_logo.svg" alt="마켓컬리 로고" />
                        <button className={mainTextButtonClass} onClick={toMain}>마켓컬리</button>
                        <button className={beautyTextButtonClass} onClick={toBeauty}>뷰티컬리</button>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="검색어를 입력해주세요." />
                        <button></button>
                    </div>
                    <div className="shopping-icons">
                        <button style={{ backgroundImage: `url('배송지-icon.svg')` }}></button>
                        <button style={{ backgroundImage: `url('좋아요-icon.svg')` }}></button>
                        <button style={{ backgroundImage: `url('장바구니-icon.svg')` }}></button>
                    </div>
                </div>
            </div>
            <nav className="category-nav">
                <div className="category">
                    <img src='메뉴-icon.svg' />
                    <div className='category-text'>카테고리</div>
                    <Category />
                </div>
                <ul>
                    <li><span>신상품</span></li>
                    <li><span>베스트</span></li>
                    <li><span>알뜰쇼핑</span></li>
                    <li><span>특가/혜택</span></li>
                </ul>
                <div style={{ border: '1px solid rgb(181, 181, 181)', borderRadius: '10px' }}>
                    <span style={{ color: 'rgb(95,0,128)' }}>샛별 ＊ 하루</span>배송안내
                </div>
            </nav>
        </header>
    )
}