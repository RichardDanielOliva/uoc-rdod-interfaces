import React from 'react';
import dynamic from 'next/dynamic';
import { PreviewTitle, SimpleEventContainer, EventMapContainer, RelatedEventsContainer } from '../event-viewer-card.styles';
import { EventCategories } from '../../resources/categories/resources-categories.component';
import { RESOURCES_CATEGORIES_ITEMS, RESOURCES, useGetResourcesByCategory } from '../../../hooks/locales/resources.hook';

const CustomMap = dynamic(() => import('../../custom-map/custom-map.component'), { ssr: false });

const EventOthersCard = ({ events, event }) => {
  const mapData = useGetResourcesByCategory({ category: event.category })
  return (<SimpleEventContainer>
    <EventMapContainer >
    <PreviewTitle>{'Ubicación'}</PreviewTitle>
    <CustomMap 
      data={mapData}
      latitude={40.420}
      logitude={-3.705}
    />
    </EventMapContainer>
    <RelatedEventsContainer>
    <EventCategories 
      id={event.category} 
      title={'Eventos relacionados'} 
      data={RESOURCES}
      resources={RESOURCES_CATEGORIES_ITEMS[event.category].resources}/>
    </RelatedEventsContainer>

  </SimpleEventContainer>
  );
};

export default EventOthersCard;