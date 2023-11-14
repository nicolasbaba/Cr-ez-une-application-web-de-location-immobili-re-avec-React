import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/LOGO.svg'
import '../assets/style.css'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/apropos">Apropos</Link>
      </nav>
    </header>
  );
}

export default Header;