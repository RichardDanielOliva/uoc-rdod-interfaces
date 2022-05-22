import React from 'react';
import HeaderCard from '../../commons/custom-header-card/header-card.component';

const ResourcesCard = () => {
  return (
    <HeaderCard 
      mainClassName={'home-header-card'}
      title={'Vive una nueva experiencia en Madrid!'}
      description={'Encuentra tu proximo evento'}
      image={{
        src: '/images/madrid.jpg'
      }}
      />
  );
};

export default ResourcesCard;