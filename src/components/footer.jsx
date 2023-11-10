import React from 'react';
import logo from '../img/Group.svg'
import '../assets/style.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={logo} alt="Logo Kasa" />
      <p>© 2020 Kasa,All rights reserved</p>
    </footer>
  );
}

export default Footer;