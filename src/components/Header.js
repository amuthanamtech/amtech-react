import React, { useEffect, useState } from 'react';
// import logo from '../assets/img/amtech-logo.png';
import { Link, useLocation } from 'react-router-dom';


const logo = process.env.PUBLIC_URL + '/assets/img/amtech-logo.png';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    const navbarToggler = document.getElementById('navbarCollapse');
    if (navbarToggler.classList.contains('show')) {
      navbarToggler.classList.remove('show');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container-xxl position-relative p-0">
      <nav
        className={`navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0  ${
          isScrolled ? 'sticky-top shadow-sm' : ''
        }`}
      >
        <Link to="/" className="navbar-brand p-0">
          <img src={logo} alt="Logo" />
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
            <Link
              to={"/"}
              className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to={"/service"}
              className={`nav-item nav-link ${isActive('/service') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Service
            </Link>
            <Link
              to={"/project"}
              className={`nav-item nav-link ${isActive('/project') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Project
            </Link>
            <Link
              to={"/contact"}
              className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
          <Link to={"/get-started" }className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;





// import React from 'react';
// import logo from '../assets/img/amtech-logo.png';
// import { Link, useLocation } from 'react-router-dom';

// const Header = () => {
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   const handleLinkClick = () => {
//     const navbarToggler = document.getElementById('navbarCollapse');
//     if (navbarToggler.classList.contains('show')) {
//       navbarToggler.classList.remove('show');
//     }
//   };
//   return (
//     <div className="container-xxl position-relative p-0">
//       <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
//         <Link to="/" className="navbar-brand p-0">
//           <img src={logo} alt="Logo"/>
//         </Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//           <span className="fa fa-bars"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarCollapse">
//           <div className="navbar-nav mx-auto py-0">
//             <Link to="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`} onClick={handleLinkClick}>Home</Link>
//             <Link to="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleLinkClick}>About</Link>
//             <Link to="/service" className={`nav-item nav-link ${isActive('/service') ? 'active' : ''}`} onClick={handleLinkClick}>Service</Link>
//             <Link to="/project" className={`nav-item nav-link ${isActive('/project') ? 'active' : ''}`} onClick={handleLinkClick}>Project</Link>
//             <Link to="/contact" className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleLinkClick}>Contact</Link>
//           </div>
//           <Link to="/get-started" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</Link>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;
