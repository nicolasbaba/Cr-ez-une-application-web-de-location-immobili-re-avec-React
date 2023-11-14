
import React from 'react';
import Header from'../components/header'
import Footer from '../components/footer'
import Layeuraccueil from '../components/layeuracueil'
import Logement from '../components/logement'

const Accueil = () => {
  return (
    <div>
      <Header />
      <Layeuraccueil />
      <Logement />
      <Footer />
    </div>
  );
}

export default Accueil;