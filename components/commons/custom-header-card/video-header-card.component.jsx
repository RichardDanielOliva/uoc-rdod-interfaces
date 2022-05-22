import React from 'react';
import { CustomHeaderLink } from '../../../config/styles/components-styles';
import { ButtonContainer } from '../../../config/styles/common-styles';

import {
  CardContainer,
  CardContentContainer,
  LeftContainer,
  RightContainer,
  TitleContainer,
  DescriptionContainer,
  ButtonsContainer,
  TkriskVideo,
  VideoContainer
} from './video-header-card.style';
import { CustomBackgroundImage } from '../../../config/styles/images-styles';

const VideoHeaderCard = ({ title, description, links, image, imageOpacity, video, key, className={layoutClass: 'full-width', colorClass: 'white', buttonClass: 'align-left', linkClass: 'company'} }) => {
  return (
    <CardContainer>
        <CardContentContainer>
          <LeftContainer>
            <TitleContainer>
              {title}
            </TitleContainer>
            <DescriptionContainer>
              {description}
            </DescriptionContainer>
            <ButtonsContainer>
            { links.map(link => (
                <ButtonContainer className={className.buttonClass} key={`${key}-${link.name}`}>
                  <CustomHeaderLink 
                    className={[className.linkClass, className.colorClass].join(" ")}
                    href={link.url}>
                    {link.name}
                  </CustomHeaderLink>
                </ButtonContainer>
              ))
            }
            </ButtonsContainer>
          </LeftContainer>
          <RightContainer>
          <VideoContainer>
            <TkriskVideo 
              src={video}
            />
            </VideoContainer>
          </RightContainer>
        </CardContentContainer>
        <CustomBackgroundImage 
              src={image.src}
              alt={image.alt}
              opacity={imageOpacity}/>
    </CardContainer>
  );
};

export default VideoHeaderCard;