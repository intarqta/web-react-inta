import { Outlet } from "react-router-dom";
import  Inicio from './Header';
import Footer from './Footer'

const Layout = () => {
    return (
        <div>
            <Inicio />
                <Outlet />
            <Footer />
        </div>

    )
}

export default Layout;