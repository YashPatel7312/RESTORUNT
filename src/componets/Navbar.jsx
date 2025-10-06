import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null); // Ref for navbar height
  const collapseRef = useRef(null); // Ref for menu height

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const body = document.body;
    const navbar = navbarRef.current;
    if (!navbar) return;

    const navbarHeight = navbar.offsetHeight; // Dynamic navbar height
    let menuHeight = 0;

    if (isOpen && collapseRef.current) {
      // Small delay to let Bootstrap animation complete and height stabilize
      const timer = setTimeout(() => {
        menuHeight = collapseRef.current.scrollHeight || collapseRef.current.offsetHeight;
        body.style.paddingTop = `${navbarHeight + menuHeight}px`;
        body.style.transition = 'padding-top 0.3s ease'; // Smooth transition
      }, 100); // Adjust delay if needed (50-200ms)

      return () => clearTimeout(timer);
    } else {
      // When closed, reset to navbar height only
      body.style.paddingTop = `${navbarHeight}px`;
      body.style.transition = 'padding-top 0.3s ease';
    }

    // Cleanup on unmount
    return () => {
      body.style.paddingTop = `${navbarHeight}px`;
      body.style.transition = '';
    };
  }, [isOpen]);

  return (
    <nav ref={navbarRef} className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
          React Restaurant
        </NavLink>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu - Add ref here */}
        <div ref={collapseRef} className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu" onClick={closeMenu}>
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
