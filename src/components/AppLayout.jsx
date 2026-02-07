import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

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