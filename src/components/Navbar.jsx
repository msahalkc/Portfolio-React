import React, { useEffect } from 'react';
import Logo from '../assets/kc designs white logo.svg';

const Navbar = () => {

  // Function to toggle navbar color
  const toggleNavbarColor = () => {
    const navbar = document.querySelector('.navcas');
    const currentColor = window.getComputedStyle(navbar).getPropertyValue('background-color');

    // Check if the current color matches the dark color
    if (currentColor === 'rgb(10, 10, 10)') {
      // Change to light color
      navbar.style.backgroundColor = '#ec3d64';
    } else {
      // Change to dark color
      navbar.style.backgroundColor = '#0a0a0a';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg px-5 pt-4 navcas">
      <div className="container-fluid">
        <a className='d-flex' href='#'>
          <img src={Logo} width="60px" alt="KC Designs Logo" />
          <div className="brandName mx-3">
            muhammed <br />
            sahal kc
          </div>
        </a>
        <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbarColor}>
          <i className="fa-solid fa-bars" style={{ color: "#eee5e6" }}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#works">Works </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
