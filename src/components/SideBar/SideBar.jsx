import { useSelector } from 'react-redux';


import './SideBar.css';

export default function SideBar() {
    const recentView = useSelector(state => state.view.items);

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
                <div className='recent-img-container'>
                    {recentView.map((item) => <img key={item.id} className='recent-img' src={item.image} />)}
                </div>
                <button className='recent-button'><img src='down-arrow-icon.svg' /></button>
            </div>
        </article>
    )
}