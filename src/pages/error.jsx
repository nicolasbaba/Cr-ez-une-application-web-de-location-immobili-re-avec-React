import React from 'react';
import Header from'../components/header'
import Footer from '../components/footer'
import Error from '../components/error';

const error = () => {
  return (
    <div>
          <Header />
          <Error />
      <Footer />
    </div>
  );
}

export default error;