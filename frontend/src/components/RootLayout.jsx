import { Outlet } from "react-router";
import Navigation from "../subComponents/Navigation";

export default function Rootlayout(){

    return (<>
    <Navigation />
    <Outlet />
    </>)
}