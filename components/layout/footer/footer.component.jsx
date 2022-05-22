import React from 'react';
import { EmailIcon, getSocialMediaIcon } from '../../../config/styles/icons-styles';
import { useLocaleFooter } from '../../../hooks/locales/footer.hook';
import { CustomIconButton } from '../../commons/custom-buttons/custom-icon-button.component';

import {
  FooterContainer,
  FooterContentContainer,
  LeftContainer,
  RightContainer,
  TitleContainer,
  DescriptionContainer,
  CompanyResume,
  CopyrightContainer,
  ContactContainer,
  EmailContainer,
  SocialMediaContainer,
  SocialContainer,
  FooterMenuContainer,
  MenusContainer,
  MenuContainer,
  OptionsList,
  MenuTitle
} from './footer.style';

const Footer = ({className}) => {
  const FOOTER = useLocaleFooter();
  return (
    <FooterContainer className={className}>
      <FooterMenuContainer className={className}>
        <CompanyResume>
          <TitleContainer>
            {FOOTER.company.title}
          </TitleContainer>
          <DescriptionContainer>
            {FOOTER.company.description}
          </DescriptionContainer>
        </CompanyResume>
        <MenusContainer>
          { 
          FOOTER.menu.map(menu => 
            <MenuContainer key={`footer-menu-${menu.id}`}>
              <MenuTitle>{menu.name}</MenuTitle>
              {
                menu.options.map(({name, url}) =>
                  <OptionsList href={url} key={`footer-menu-link-${name}`}>
                    {name}
                  </OptionsList>
                )
              }
            </MenuContainer>
          )
        }
      </MenusContainer>
      </FooterMenuContainer>
      <FooterContentContainer>
        <LeftContainer>
          
          <CopyrightContainer>
            <DescriptionContainer>
              {FOOTER.copyright}
            </DescriptionContainer>
          </CopyrightContainer>
        </LeftContainer>
        <RightContainer>
          <ContactContainer>
            <EmailContainer href={`mailto:${FOOTER.contact.email.email}`}>
              <CustomIconButton
                className={'footer'}
                text={FOOTER.contact.email.text}>
                <EmailIcon />
              </CustomIconButton>
            </EmailContainer>
            <SocialMediaContainer>
            {
              FOOTER.contact.socialMedia.map(social => 
                <SocialContainer 
                  key={`footer-social-${social.id}`}
                  href={social.url}
                  target='_blank'>
                  <CustomIconButton
                    className={'footer'}
                    text={social.name}>
                    {getSocialMediaIcon(social.id)}
                  </CustomIconButton>
                </SocialContainer>
              )
            }
            </SocialMediaContainer>
          </ContactContainer>
        </RightContainer>
      </FooterContentContainer>
    </FooterContainer>
  );
};

export default Footer;