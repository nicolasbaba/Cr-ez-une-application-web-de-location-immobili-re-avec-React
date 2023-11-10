import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.svg'

const Header = () => {
  return (
      <header className='header'>
          <img src={logo} alt="Logo Kasa" />
          <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">apropos</Link>
      </nav>
    </header>
  );
}

export default Header;