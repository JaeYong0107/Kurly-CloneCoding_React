import './Banner.css';

export default function Banner({ src }) {
    return (
        <div className='banner'>
            <img id='banner' src={src} />
        </div>
    )
}