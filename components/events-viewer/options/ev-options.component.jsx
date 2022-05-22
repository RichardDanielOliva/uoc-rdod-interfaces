import React from 'react';
import { CustomButton, EventOptionsContainer, EventHeaderContainer, EventViewTitle, EventViewSubTitle, EventViewLocation, EventViewPrice, EventContentOptionContainer } from '../event-viewer-card.styles';
import OtherOptionsCard from './ev-other-options.component ';

const EventOptionsCard = ({ event }) => {
  return (<EventOptionsContainer>
    <EventHeaderContainer className='options-sections'>
      <EventViewSubTitle>{event.subtitle}</EventViewSubTitle>
        <EventViewTitle>{event.title}</EventViewTitle>
        <EventViewLocation>{event.location}</EventViewLocation>
        <EventViewPrice>{`Desde ${event.priceStartIn} EUR`}</EventViewPrice>
    </EventHeaderContainer>
    <EventContentOptionContainer>
      <CustomButton> Entradas </CustomButton>
    </EventContentOptionContainer>
    <OtherOptionsCard />
  </EventOptionsContainer>
  );
};

export default EventOptionsCard;