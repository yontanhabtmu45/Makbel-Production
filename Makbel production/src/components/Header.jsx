import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.png'

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen((open) => !open);
  };

  const closeDropdown = () => setDropdownOpen(false);

  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
          <Link to="/" className="navbar-brand px-lg-4 m-0">
            <img className='logo' src={logo} alt="" />
            {/* <h1 className="m-0 display-4 text-uppercase text-white">Makbel Production</h1> */}
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto p-4">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/service" className="nav-item nav-link">
                Service
              </Link>
              <Link to="/portfolio" className="nav-item nav-link">
                Portfolio
              </Link>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  )
}

export default Header