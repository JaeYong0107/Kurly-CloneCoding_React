import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Rootlayout() {
    return (<>
        <Header />
        <Outlet />
    </>)
}