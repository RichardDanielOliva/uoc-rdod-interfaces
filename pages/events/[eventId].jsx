import { useRouter } from 'next/router';
import React from 'react';
import EventViewerContent from '../../components/events-viewer/event-viewer-card.component';
import { PageContainer } from '../../config/styles/common-styles';

const TutorialsPage = () => {
  const { query: { eventId } } = useRouter()
  return (
    <PageContainer>
      <EventViewerContent eventId={eventId}/>
    </PageContainer>
  );
};

export default TutorialsPage;