import React from 'react';
import { getResourcesImageById } from '../../../config/styles/images-styles';
import { useGetResourcesByCategory } from '../../../hooks/locales/resources.hook';
import { EventListContainer, EventCardContainer, EventViewContent, EventViewLocation, EventViewPrice, EventViewSubTitle, EventViewTitle, EventViewImageContainer } from '../event-card.styles';

const EventCard = ({ event }) => {
  return (
    <EventCardContainer  
      href={`/events/${event.id}`}
      key={`event-list-${event.id}`} 
      className='list'>
      <EventViewContent className='list'>
        <EventViewTitle>{event.title}</EventViewTitle>
        <EventViewSubTitle>{event.subtitle}</EventViewSubTitle>
        <EventViewLocation>{event.location}</EventViewLocation>
        <EventViewPrice>{`Desde ${event.priceStartIn} EUR`}</EventViewPrice>
      </EventViewContent>
      <EventViewImageContainer className='list'>
      {getResourcesImageById(event.image)}
      </EventViewImageContainer>
    </EventCardContainer>
  );
}

const EventListCard = ({ category }) => {
  const events = useGetResourcesByCategory({ category });
  return (
    <EventListContainer>
      {events.map(event => (<EventCard event={event}/>))}
    </EventListContainer>
  );
};

export default EventListCard;