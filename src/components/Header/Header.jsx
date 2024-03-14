
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div id="header1">
                <a>회원가입</a>
                <div />
                <a>로그인</a>
                <div />
                <a>
                    고객센터
                    <span></span>
                </a>
            </div>
            <div id="header2">
                <div className="logo">
                    <img src="kurly_logo.svg" alt="마켓컬리 로고" />
                    <button className="text-button">마켓컬리</button>
                    <button className="text-button">뷰티컬리</button>
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
            <nav className="category-nav">
                <div className="category">
                    <div />
                    <span>카테고리</span>
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