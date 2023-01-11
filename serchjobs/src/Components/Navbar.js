import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/Navbar.css"

const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg">
      <div class="container-fluid">
        <Link class="navbar-brand text-primary fs-2 fw-semibold" to="/">
          SearchJobs.com
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
          <div class="navbar-nav ms-auto fw-semibold">
            <Link class="nav-link" to="/">
              Home
            </Link>
            <Link class="nav-link" to="/engg">
              Engineering
            </Link>
            <Link class="nav-link" to="/sales">
              Sales
            </Link>
            <Link class="nav-link" to="/marketing">
              Marketing
            </Link>
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
