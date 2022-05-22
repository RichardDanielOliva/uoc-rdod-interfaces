import React from 'react';
import { useLocaleHomeResourcesPreview } from '../../../hooks/locales/home.hook';
import ResourcesPreview from '../../resources-preview/resources-preview.component';
import { CardContainer, CardTitleContainer } from './featured-applications.style';

const FeaturesApplicationsCard = () => {
  const RESOURCES_PREVIEW = useLocaleHomeResourcesPreview();
  return (
    <CardContainer>
      <CardTitleContainer>{'Featured Applications'}</CardTitleContainer>
      <ResourcesPreview seeMoreOptions={RESOURCES_PREVIEW.seeMoreOptions} />
    </CardContainer>
  );
};

export default FeaturesApplicationsCard;