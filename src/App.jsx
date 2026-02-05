
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Techniqe from './pages/Techniqe';
import Blogs from './pages/Blogs';
import WhoAreWe from './pages/WhoAreWe';
import AppLayout from './components/app-layout.jsx/appLayout';
import AllArticles from './pages/AllArticles';
import NaturalView from './pages/NaturalView';
import Tools from './pages/Tools';
import Portrait from './pages/portrait';
import Light from './pages/light';



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blogs", element: <Blogs />},
      { path: "blogs/techniqe", element: <Techniqe /> },
      { path: "blogs/AllArticles", element: <AllArticles/> },
      { path: "blogs/light", element: <Light/> },
      { path: "blogs/NaturalView", element: <NaturalView/> },
      { path: "blogs/portrait", element: <Portrait/> },
      { path: "blogs/Tools", element: <Tools/> },
      { path: "WhoAreWe", element: <WhoAreWe /> },
      {path:"*",element:<div>Not Found 404</div>}
    ]
  }
]);
  
  
 
function App() {

 return<RouterProvider router={router} />

}



export default App
