import React, { useState } from 'react';
import '../assets/style.css';
import ArrowBackIcon from '../assets/img/arrow_back_ios-24px 2.svg';

const CollapseItem = ({ title, content, isActive, onClick }) => {
  const handleArrowClick = (event) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <div className="collapse-container">
      <div className={`collapse-header ${isActive ? 'active' : ''}`}>
        {title} <img
          src={ArrowBackIcon}
          alt="Logo fleche"
          onClick={handleArrowClick}
           className={`rotate ${isActive ? 'rotate-180' : ''}`}
        />
      </div>
      {isActive && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Collapse = () => {
  const [activeCollapses, setActiveCollapses] = useState([]);

  const handleCollapseClick = (collapseTitle) => {
    const isCollapseOpen = activeCollapses.includes(collapseTitle);

    if (isCollapseOpen) {
      setActiveCollapses(activeCollapses.filter((title) => title !== collapseTitle));
    } else {
      setActiveCollapses([...activeCollapses, collapseTitle]);
    }
  };

  return (
    <div className="container-all-collapse">
      <CollapseItem
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        isActive={activeCollapses.includes('Fiabilité')}
        onClick={() => handleCollapseClick('Fiabilité')}
      />
      <CollapseItem
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        isActive={activeCollapses.includes('Respect')}
        onClick={() => handleCollapseClick('Respect')}
      />
      <CollapseItem
        title="Service"
        content="Nos équipes se tiennent à votre disposition pour vous offrir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        isActive={activeCollapses.includes('Service')}
        onClick={() => handleCollapseClick('Service')}
      />
      <CollapseItem
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les normes sont bien respectées. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        isActive={activeCollapses.includes('Sécurité')}
        onClick={() => handleCollapseClick('Sécurité')}
      />
    </div>
  );
};

export default Collapse;