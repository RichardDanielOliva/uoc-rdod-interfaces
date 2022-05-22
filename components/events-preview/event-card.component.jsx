import React, { useState } from 'react';
import { useResourcesCategory } from '../../hooks/locales/resources.hook';
import { EventPreviewContainer, FilterContainer, ListContainer } from './event-card.styles';
import EventPreviewFilter from './filter/event-filter.component';
import EventPreviewList from './preview-list/preview-list.component';

const EventPreviewContent = () => {
  let { category, setCategory } = useResourcesCategory();
  return <EventPreviewContainer>
    <FilterContainer>
      <EventPreviewFilter {...{category, setCategory}}/>
    </FilterContainer>
    <ListContainer>
      <EventPreviewList {...{category}}/>
    </ListContainer>
  </EventPreviewContainer>;
};

export default EventPreviewContent;