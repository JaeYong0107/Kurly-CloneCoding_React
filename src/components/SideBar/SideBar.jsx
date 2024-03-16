
import './SideBar.css';

export default function SideBar() {
    return (
        <article className="side-bar">
            <div className="sidebar-img-container">
                <img className='sidebar-img' src="sidebar-img1.jpg" />
            </div>
            <div>
                <div className='sidebar-box'>등급별 혜택</div>
                <div className='sidebar-box'>레시피</div>
            </div>
            <div className='recent-container'>
                <button className='recent-button' ><img src='up-arrow-icon.svg' /></button>
                최근 본 상품
                <img className='recent-img' src='https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=800,height=400,quality=85/product/image/7603a12a-a742-42bd-a652-49a966e78b96.jpg' />
                <img className='recent-img' src='https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=800,height=400,quality=85/product/image/7603a12a-a742-42bd-a652-49a966e78b96.jpg' />
                <img className='recent-img' src='https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=800,height=400,quality=85/product/image/7603a12a-a742-42bd-a652-49a966e78b96.jpg' />
                <button className='recent-button'><img src='down-arrow-icon.svg' /></button>
            </div>
        </article>
    )
}