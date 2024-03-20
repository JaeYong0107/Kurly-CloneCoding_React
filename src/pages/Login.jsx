
import '../App.css'
import Footer from '../components/Footer/Footer'

export default function Login() {
    return (
        <>
            <form className="login-container">
                <h1>로그인</h1>
                <input type="text" placeholder='아이디를 입력해주세요.' />
                <input type="text" placeholder='비밀번호를 입력해주세요.' />
                <div className='information-inquiry'>
                    <a>아이디 찾기</a>
                    <span></span>
                    <a>비밀번호 찾기</a>
                </div>
                <button className='login-button'>로그인</button>
                <button className='signup-button'>회원가입</button>
            </form>
            <Footer />
        </>
    )
}