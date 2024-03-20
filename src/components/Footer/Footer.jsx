
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="left-footer">
                <h2>고객 행복센터</h2>
                <div className='inquiry-me'>
                    <h1>1234-5678</h1>
                    <span>월~토요일 오전 7시 - 오후 6시</span>
                </div>
                <div className='inquiry-me'>
                    <button>카카오톡 문의</button>
                    <p>월~토요일</p><span /><p>오전 7시 - 오후 6시</p>
                    <p>일/공휴일</p><span /><p>오전 7시 - 오후 1시</p>
                </div>
                <div className='inquiry-me'>
                    <button>1:1 문의</button>
                    <p>365일</p>
                    <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
                </div>
                <div className='inquiry-me'>
                    <button>대량주문 문의</button>
                    <p>월~금요일</p><span /><p>오전 9시 - 오후 6시</p>
                    <p>점심시간</p><span /><p>낮 12시 - 오후 1시</p>
                </div>
                <p>비회원 문의 : help@asdfcorp.com</p>
            </div>
            <div className="right-footer">
                <ul>
                    <li><p>컬리소개</p></li>
                    <li><p>컬리소개영상</p></li>
                    <li><p>투자정보</p></li>
                    <li><p>인재채용</p></li>
                    <li><p>이용약관</p></li>
                    <li><p>개인정보처리방침</p></li>
                    <li><p>이용안내</p></li>
                </ul>
                <div>
                    법인명 (상호) : 주식회사 OO <span /> 사업자등록번호 : 123-45-67890 <a>사업자정보 확인</a><br />
                    통신판매업 : 제 20xx-대한민국-00001호<br />
                    주소 : 서울 특별시 oo구 ooo로 123 <span /> 대표이사 : OOO <br />
                    채용문의 : <a>recruit@asdfcorp.com</a><br />
                    팩스 : 000-1234-5678
                </div>
                <ul>
                    <li><img /></li>
                    <li><img /></li>
                    <li><img /></li>
                    <li><img /></li>
                    <li><img /></li>
                </ul>

            </div>
        </footer >
    )
}