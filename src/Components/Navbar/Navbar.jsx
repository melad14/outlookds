import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {

  return <>
   <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="" className="navbar-brand p-0">
        <h1 className="display-6 text-primary">
    Outlook ds
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
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
          <Link to="" className="nav-item nav-link active">Home</Link>
          <Link to="about" className="nav-item nav-link">About</Link>
          <Link to="service" className="nav-item nav-link">Service</Link>
          
          
          <Link to="contact" className="nav-item nav-link">Contact</Link>
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
