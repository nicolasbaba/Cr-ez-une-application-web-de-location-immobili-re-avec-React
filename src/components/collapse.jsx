import React, { useState } from 'react';
import '../assets/style.css';

const Collapse = () => {
  // Utilisation de l'état local pour suivre quels collapses sont ouverts
  const [activeCollapses, setActiveCollapses] = useState([]);

  // Fonction pour gérer le clic sur un collapse
  const handleCollapseClick = (collapseTitle) => {
    // Vérifie si le collapse est déjà ouvert
    const isCollapseOpen = activeCollapses.includes(collapseTitle);

    // Met à jour l'état en fonction de l'état actuel du collapse
    if (isCollapseOpen) {
      setActiveCollapses(activeCollapses.filter((title) => title !== collapseTitle));
    } else {
      setActiveCollapses([...activeCollapses, collapseTitle]);
    }
  };

  return (
    <div className='container-all-collapse'>
      <div className="collapse-container">
        <div
          className={`collapse-header ${activeCollapses.includes('Fibilité') ? 'active' : ''}`}
          onClick={() => handleCollapseClick('Fibilité')}
        >
          Fiabilité
        </div>
        {activeCollapses.includes('Fibilité') && (
          <div className="collapse-content">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
              et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        )}
      </div>
      <div className="collapse-container">
        <div
          className={`collapse-header ${activeCollapses.includes('Respect') ? 'active' : ''}`}
          onClick={() => handleCollapseClick('Respect')}
        >
          Respect
        </div>
        {activeCollapses.includes('Respect') && (
          <div className="collapse-content">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </div>
        )}
      </div>
      <div className="collapse-container">
        <div
          className={`collapse-header ${activeCollapses.includes('Service') ? 'active' : ''}`}
          onClick={() => handleCollapseClick('Service')}
        >
          Service
        </div>
        {activeCollapses.includes('Service') && (
          <div className="collapse-content">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous
              contacter si vous avez la moindre question.
            </p>
          </div>
        )}
      </div>
      <div className="collapse-container">
        <div
          className={`collapse-header ${activeCollapses.includes('Sécurité') ? 'active' : ''}`}
          onClick={() => handleCollapseClick('Sécurité')}
        >
          Sécurité
        </div>
        {activeCollapses.includes('Sécurité') && (
          <div className="collapse-content">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
              correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
              locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
              également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
