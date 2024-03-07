import React from 'react';
import Logo from '../assets/kc designs white logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-5 pt-4 navcas">
      <div className="container-fluid">
        <img src={Logo} width="60px" alt="KC Designs Logo" />
        <div className="brandName mx-3">
            muhammed <br />
            sahal kc
        </div>
        <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars" style={{ color: "#eee5e6" }}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Works </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#speakers">Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
