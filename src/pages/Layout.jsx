// import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import './Layout.css';

const Layout = () => {
    return (
        <>

            <div className="main-wrapper">
                <Sidebar/>

                <div className="main-content">
                    <h1>Welcome </h1>

                <Footer />
                </div>

            </div>
        
        </>
    )
}

export default Layout