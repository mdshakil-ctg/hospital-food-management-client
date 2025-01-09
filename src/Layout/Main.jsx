import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            {/* navbar here */}
            <Navbar/>
            <Outlet/>
            {/* footer here */}
            
        </div>
    );
};

export default Main;