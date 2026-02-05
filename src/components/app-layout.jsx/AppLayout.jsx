import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

function AppLayout()
{
    return(
    <>
    <Navbar/>
  
    <Footer/>  
    </>
)
}
export default AppLayout;