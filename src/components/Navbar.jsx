import React, { useEffect } from 'react';
import Logo from '../assets/kc designs white logo.svg';

const Navbar = () => {
  useEffect(() => {
    // Function to hide preloader on window load
    const hidePreloader = () => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    };

    // Function to change navbar color on scroll
    const changeNavbarColor = () => {
      const navbar = document.querySelector('.navcas');
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#0a0a0a';
      } else {
        navbar.style.backgroundColor = 'transparent';
      }
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', changeNavbarColor);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Function to toggle navbar color
  const toggleNavbarColor = () => {
    const navbar = document.querySelector('.navcas');
    navbar.style.backgroundColor = (navbar.style.backgroundColor === 'transparent') ? '#ec3d64' : 'transparent';
  };

  return (
    <nav className="navbar navbar-expand-lg px-5 pt-4 navcas">
      <div className="container-fluid">
        <img src={Logo} width="60px" alt="KC Designs Logo" />
        <div className="brandName mx-3">
          muhammed <br />
          sahal kc
        </div>
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
