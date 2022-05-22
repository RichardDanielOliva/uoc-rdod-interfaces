import React, { useState } from 'react';
import { EventPreviewListContainer } from '../event-card.styles';
import EventMap from '../event-map/event-card.component';
import EventListCard from './preview-list-card.component';
import EventListOptions from './preview-list-options.component';

const EventPreviewList = ({...props}) => {
  const [ viewInList, setViewInList ] = useState(true);
  return (
    <EventPreviewListContainer>
      <EventListOptions 
        viewInList={viewInList}
        setViewInList={setViewInList} />
      { viewInList ? 
        <EventListCard {...props} /> :
        <EventMap  {...props} /> }
    </EventPreviewListContainer>
  );
};

export default EventPreviewList;