import Banner from "../components/Banner/Banner";
import SideBar from "../components/SideBar/SideBar";
import SpecialProducts from "../components/SpecialProducts/SpecialProducts";
import SpecialTimeout from "../components/SpecialTimeout/SpecialTimeout";

export default function Beauty() {
    return (
        <main style={
            { position: 'relative' }
        }>
            <Banner />
            <SpecialProducts />
            <SpecialTimeout />
            <SideBar />
        </ main>
    )
}