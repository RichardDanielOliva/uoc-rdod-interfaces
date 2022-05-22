import React from 'react';
import { useLocaleHomeResourcesPreview } from '../../hooks/locales/home.hook';
import { CustomLink } from '../../config/styles/components-styles';
import { getResourcesImageById } from '../../config/styles/images-styles';

import {
  CardContainer,
  CardContentContainer,
  HeaderContainer,
  ContentContainer,
  ResourceContainer,
  TitleContainer,
  DescriptionContainer,
  ResourceImage,
  ButtonContainer
} from './resources-preview.style';

const ResourcesPreview = ({title, description, seeMoreOptions}) => {
  const RESOURCES_PREVIEW = useLocaleHomeResourcesPreview();
  return (
    <CardContainer>
        <CardContentContainer>
          <HeaderContainer>
            <TitleContainer>
              {title}
            </TitleContainer>
            <DescriptionContainer>
              {description}
            </DescriptionContainer>
          </HeaderContainer>
          <ContentContainer>
            {Object.values(RESOURCES_PREVIEW.resources).map((section) => {
              return (
                <ResourceContainer key={`resources-preview-${section.id}`}>
                  <CustomLink className={'simple-white'} href={`/solutions/#${section.id}`}>
                    <ResourceImage >
                      {getResourcesImageById(section.id)}
                    </ResourceImage>
                    <ButtonContainer>
                      {section.title}
                    </ButtonContainer>
                  </CustomLink>
                </ResourceContainer>
            )})}
          </ContentContainer>
        </CardContentContainer>
    </CardContainer>
  );
};

export default ResourcesPreview;