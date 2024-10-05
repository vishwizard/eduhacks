import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Test Prep</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Generate Test</li>
        <li>History</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;