import React from 'react';
import HeaderCard from '../../commons/custom-header-card/header-card.component';

const EventPreviewCard = () => {
  return (
    <HeaderCard 
      title={'Vive una nueva experiencia en Madrid!'}
      imageOpacity={0.10}
      image={{
        src: '/images/madrid2.jpg'
      }}
      />
  );
};

export default EventPreviewCard;