import React from 'react';
import HeaderCard from '../../commons/custom-header-card/header-card.component';

const EventPreviewCard = () => {
  return (
    <HeaderCard 
      title={'Descrube nuevas experiencias en tu ciudad!'}
      imageOpacity={0.10}
      image={{
        src: '/images/madrid2.jpg'
      }}
      />
  );
};

export default EventPreviewCard;