import React from 'react';
import HeaderCard from '../../commons/custom-header-card/header-card.component';

const EventViewerCard = () => {
  return (
    <HeaderCard 
      mainClassName={'home-header-card'}
      title={''}
      imageOpacity={0.10}
      image={{
        src: '/images/madrid2.jpg'
      }}
      />
  );
};

export default EventViewerCard;