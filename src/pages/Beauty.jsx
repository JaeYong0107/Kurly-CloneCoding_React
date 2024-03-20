import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import SpecialProducts from "../components/SpecialProducts/SpecialProducts";
import SpecialTimeout from "../components/SpecialTimeout/SpecialTimeout";

export default function Beauty() {
    return (
        <>
            <main style={
                { position: 'relative' }
            }>
                <Banner src={"뷰티배너이미지1.jpg"} />
                <SpecialProducts url='beautyproduct.json' />
                <SideBar />
            </ main>
            <Footer />
        </>
    )
}