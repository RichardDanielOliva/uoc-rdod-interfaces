import React from 'react';
import { useGetResourcesByIdCategory } from '../../hooks/locales/resources.hook';
import EventViewerCard from './card/event-viewer-card.component';
import EventContentCard from './content/ev-content.component';
import EventOptionsCard from './options/ev-options.component';
import EventOthersCard from './others/ev-others.component';
import { EventViewerContainer, EventViewerHelperContainer, EventViewerCardContainer, EventViewerContentContainer, EventOtherInfoContainer } from './event-viewer-card.styles';

const EventViewerContent = ({ eventId }) => {
  const event = useGetResourcesByIdCategory({ eventId })
  return <EventViewerContainer>
    <EventViewerCardContainer>
      <EventViewerCard />
    </EventViewerCardContainer>
    <EventViewerHelperContainer>
      <EventViewerContentContainer>
        <EventContentCard event={event}/>
        <EventOptionsCard event={event}/>
      </EventViewerContentContainer>
    </EventViewerHelperContainer>
    <EventViewerHelperContainer>
      <EventOtherInfoContainer>
        <EventOthersCard event={event}/>
      </EventOtherInfoContainer>
    </EventViewerHelperContainer>
  </EventViewerContainer>;
};

export default EventViewerContent;