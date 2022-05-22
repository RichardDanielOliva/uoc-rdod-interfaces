import React from 'react';
import EventPreviewCard from '../../components/events-preview/card/event-card.component';
import EventPreviewContent from '../../components/events-preview/event-card.component';
import { PageContainer } from '../../config/styles/common-styles';

const ProfilePage = () => {
  return (
    <PageContainer>
      <EventPreviewCard />
      <EventPreviewContent />
    </PageContainer>
  );
};

export default ProfilePage;