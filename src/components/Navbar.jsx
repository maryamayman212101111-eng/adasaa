import { Link, Outlet } from "react-router-dom"


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">

          <div className="d-flex align-items-center order-1">
           <button className="text-light p-2 rounded-3 bg-transparent border border-transparent me-2">
              <i className="fa-solid fa-search"></i>
            </button>
            <Link to="/Blogs"><button  className=" bg-orange text-white rounded-5 px-3">
              Start Reading
              </button>
            </Link>
          </div>

         
          <div className="collapse navbar-collapse justify-content-center order-2" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/WhoAreWe">Who Are We</Link>
              </li>
            </ul>
          </div>

         
          <div className="d-flex align-items-center order-3">
            <img src="/img/logo-GdqARQRt.png" alt="Logo" className="me-2" style={{ height: "50px" }} />
            <span className="text-white fw-bold">عدسه</span>
          </div>

          <button
            className="navbar-toggler border-0 ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>

      <Outlet />
    </>
  );
}



export default Navbar;