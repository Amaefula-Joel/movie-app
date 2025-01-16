// import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import './Layout.css';

const Layout = () => {
    return (
        <>

            <div className="main-wrapper">
                <Sidebar/>

                <div className="main-content">
                    <h1>Welcome </h1>
                </div>

            </div>
        
        </>
    )
}

export default Layout