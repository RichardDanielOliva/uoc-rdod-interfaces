import React from 'react';
import { ButtonContainer } from '../../../config/styles/common-styles';
import { CustomHeaderLink } from '../../../config/styles/components-styles';
import { CustomBackgroundImage } from '../../../config/styles/images-styles';
import { ButtonsContainer } from '../../layout/navigation/navigation.style';

import {
  CardContainer,
  CardContentContainer,
  TitleContainer,
  DescriptionContainer
} from './header-card.style';

const HeaderCard = ({title, description, links, backgroundOpacity, image, imageOpacity=0.5, imageGradient, cardKey, mainClassName, className={layoutClass: 'full-width', colorClass: 'white', buttonClass: 'align-left', linkClass: 'company'}}) => {
  return (
    <CardContainer opacity={backgroundOpacity} className={mainClassName}>
      <CardContentContainer >
        <TitleContainer className={[className.colorClass, className.layoutClass].join(" ")}>{title}</TitleContainer>
        {description && <DescriptionContainer className={className.colorClass} dangerouslySetInnerHTML={{ __html: description }} />}
        {links && <ButtonsContainer>
          { links.map(link => (
            <ButtonContainer className={className.buttonClass} key={`${cardKey}-${link.name}`}>
              <CustomHeaderLink 
                className={[className.linkClass, className.colorClass].join(" ")}
                href={link.url}>
                {link.name}
              </CustomHeaderLink>
            </ButtonContainer>
          ))}
          </ButtonsContainer>
        }
      </CardContentContainer>

      {image && <CustomBackgroundImage 
      src={image.src}
      alt={image.alt ? image.alt : `text-alternativo-${image.src}`}
      opacity={imageOpacity}
      gradient={imageGradient}/>}
    </CardContainer>
  );
};

export default HeaderCard;