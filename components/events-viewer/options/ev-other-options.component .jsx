import React from 'react';
import { fireCustomModal } from '../../../config/modals/swal';
import { HealthIcon, WeatherIcon, ServicesIcon, SellIcon } from '../../../config/styles/icons-styles';
import { COMMON_DESCRIPTION } from '../content/ev-content.component';

import { OtherOptionsCardContainer, EventViewSubTitle, OtherOptionsButton, IconContainer, EventDescription } from '../event-viewer-card.styles';

export const SimpleModel = ({title}) => {
  return (
    <OtherOptionsCardContainer>
      <EventViewSubTitle>{title}</EventViewSubTitle>
      <EventDescription dangerouslySetInnerHTML={{ __html: COMMON_DESCRIPTION.slice(0, 500) }} />
    </OtherOptionsCardContainer>
  )
}

export const startModal = (title) => {
  fireCustomModal({
      html: <SimpleModel title={title}/>
    })
}


const OtherOptionsCard = ({ event }) => {
  return (<OtherOptionsCardContainer>
    <EventViewSubTitle>{'Información complementaria'}</EventViewSubTitle>
    <OtherOptionsButton onClick={() => startModal('Medidas preventivas Covid')}>
      <IconContainer>
        <HealthIcon />
      </IconContainer>
      Medidas preventivas Covid</OtherOptionsButton>
    <OtherOptionsButton onClick={() => startModal('Merchandising')}>
      <IconContainer>
        <SellIcon />
      </IconContainer>
      Merchandising</OtherOptionsButton>
    <OtherOptionsButton onClick={() => startModal('Parte meteorológico')}>
      <IconContainer>
        <WeatherIcon />
      </IconContainer>
      Parte meteorológico</OtherOptionsButton>
    <OtherOptionsButton onClick={() => startModal('Otros servicios asociados')}>
      <IconContainer>
        <ServicesIcon />
      </IconContainer>
      Otros servicios asociados</OtherOptionsButton>
  </OtherOptionsCardContainer>
  );
};

export default OtherOptionsCard;