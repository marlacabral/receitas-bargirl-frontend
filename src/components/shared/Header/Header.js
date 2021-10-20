import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      
        <Link to="/" className="header-item">Home</Link>
        <Link to="/add" className="header-item">Add</Link>
      
    </header>
  )
}

export default Header
