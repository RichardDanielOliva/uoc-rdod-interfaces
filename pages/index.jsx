import React from 'react';
import ResourcesCard from '../components/resources/card/resources-card.component';
import ResourcesCategoriesCard from '../components/resources/categories/resources-categories.component';
//import FeaturesApplicationsCard from '../components/resources/featured-applications/featured-applications.component';
import { PageContainer } from '../config/styles/common-styles';

const ProfilePage = () => {
  return (
    <PageContainer>
      <ResourcesCard />
      <ResourcesCategoriesCard/>
      {/*<FeaturesApplicationsCard />*/}
    </PageContainer>
  );
};

export default ProfilePage;