import React from 'react';
import { getResourcesImageById } from '../../../config/styles/images-styles';
import { EventCardContainer, EventViewContent, EventViewLocation, EventViewPrice, EventViewSubTitle, EventViewTitle, EventViewImageContainer } from '../event-card.styles';

const EventCard = ({ event, className='event-card' }) => {
  return (
    <EventCardContainer 
      key={`${className}-${event.id}`}
      className={className}
      href={`/events/${event.id}`}>
      <EventViewImageContainer>
      {getResourcesImageById(event.image)}
      </EventViewImageContainer>
      <EventViewContent>
        <EventViewTitle>{event.title}</EventViewTitle>
        <EventViewSubTitle>{event.subtitle}</EventViewSubTitle>
        <EventViewLocation>{event.location}</EventViewLocation>
        <EventViewPrice>{`Desde ${event.priceStartIn} EUR`}</EventViewPrice>
      </EventViewContent>
    </EventCardContainer>
  );
}

export default EventCard;