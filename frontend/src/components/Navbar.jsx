import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar container navbar-expand-sm navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          app
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" to="/">
              Home
            </Link>
            <Link class="nav-item nav-link" to="/Signup">
              Signup
            </Link>
            <Link class="nav-item nav-link" to="/Login">
              Login
            </Link>
            {/* <Link class="nav-item nav-link" to="/Login">
              Login
            </Link> */}
            {/* <Link class="nav-item nav-link " to="/Profile">
              Profile
            </Link> */}

            <Link class="nav-item nav-link " to="/AddProduct">
              AddProduct
            </Link>
            {/* <Link class="nav-item nav-link " to="/Information">
              userprofile
            </Link> */}
            <Link class="nav-item nav-link" to="/ProductInfo1"></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// <div className="collapse navbar-collapse" id="navbarID">
//   <div className="navbar-nav">
//     <Link className="nav-link active" aria-current="page" to="/">
//       Home
//     </Link>
//     <Link className="nav-link active" aria-current="page" to="/Signup">
//       signup
//     </Link>
//     <Link className="nav-link active" aria-current="page" to="/Login">
//       Login
//     </Link>
//     <Link className="nav-link active" aria-current="page" to="/Profile">
//       Profile
//     </Link>
//   </div>
// </div>;
