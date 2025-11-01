import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../img/logo2.png"

export default function Navbar() {

  return <>
   <div className=" nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="" className="navbar-brand p-0 text-primary">
   <img src={logo} className='w-100' alt="Logo"/>  
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          <Link to="" className="nav-item nav-link text-light ">Home</Link>
          <Link to="about" className="nav-item nav-link text-light">About</Link>
          <Link to="products" className="nav-item nav-link text-light">Products</Link>
          <Link to="service" className="nav-item nav-link text-light">Service</Link>
          
    
          {/* Company Dropdown */}
          <div className="nav-item dropdown">
            <Link 
              to="#" 
              className="nav-link dropdown-toggle text-light" 
              data-bs-toggle="dropdown"
            >
              Company
            </Link>
            <div className="dropdown-menu m-0 bg-light">
              <Link to="Partnerships" className="dropdown-item">Partnerships</Link>
              <Link to="futureplans" className="dropdown-item">future plans</Link>
            </div>
          </div>

          <Link to="contact" className="nav-item nav-link text-light">Contact</Link>
        </div>
        <Link to="/contact" className="btn btn-primary rounded-pill py-2 px-4">
          Get Started
        </Link>
      </div>
    </nav>
  </div>
</div>
  </>
}