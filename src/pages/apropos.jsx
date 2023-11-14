
import React from 'react';
import Header from'../components/header'
import Footer from '../components/footer'
import Layeurapropos from '../components/layeurapropos';
import Collapse from '../components/collapse';

const Apropos = () => {
  return (
    <div>
      <Header />
      <Layeurapropos />
      <Collapse />
      <Footer />
    </div>
  );
}

export default Apropos;
