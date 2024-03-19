

import Banner from '../components/Banner/Banner';
import SideBar from '../components/SideBar/SideBar';
import SpecialProducts from '../components/SpecialProducts/SpecialProducts';
import SpecialTimeout from '../components/SpecialTimeout/SpecialTimeout';

export default function MainPage() {
    return (
        <main style={
            { position: 'relative' }
        }>
            <Banner src={"배너이미지1.jpg"} />
            <SpecialProducts url='product.json' />
            <SpecialTimeout url='timeout.json' />
            <SideBar />
        </main>)
}