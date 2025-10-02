import React, { useState } from 'react'
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
          <a href="index.html" className="navbar-brand px-lg-4 m-0">
            <img className='logo' src={logo} alt="" />
            {/* <h1 className="m-0 display-4 text-uppercase text-white">Makbel Production</h1> */}
          </a>
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
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Service
              </a>
              <div
                className={`nav-item dropdown${dropdownOpen ? ' show' : ''}`}
                onMouseLeave={closeDropdown}
              >
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  onClick={handleDropdown}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  Pages
                </a>
                <div
                  className={`dropdown-menu text-capitalize${dropdownOpen ? ' show' : ''}`}
                >
                  <a href="reservation.html" className="dropdown-item" onClick={closeDropdown}>
                    Reservation
                  </a>
                  <a href="testimonial.html" className="dropdown-item" onClick={closeDropdown}>
                    Testimonial
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    
    </>
  )
}

export default Header