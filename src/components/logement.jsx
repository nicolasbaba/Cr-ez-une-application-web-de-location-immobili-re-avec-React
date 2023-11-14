import React, { useState, useEffect } from 'react';
import '../assets/style.css';
import logementsData from '../logement.json';

const Logement = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <div className='logement'>
      <div className="cartes-logement">
        {logements.map((logement) => (
          <div key={logement.identifiant} className="carte">
            <h3>{logement.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logement;