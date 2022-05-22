import styled from 'styled-components';
import { cLabel, DefaultCardContentStyle, DefaultCardContainerStyle, redCompany, footerBackground } from '../../../config/styles/common-styles';
import { StyledLink } from '../../../config/styles/components-styles';


export const FooterContainer = styled.div`
  ${DefaultCardContainerStyle};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${footerBackground};
  font-size: 13px;
  flex: 1;
  color: white;
  @media only screen and (min-width: 690px) {
    //height: 350px;
  }
  &.examples {
    align-items: flex-start;
  }
`;

export const FooterMenuContainer = styled.div`
  ${DefaultCardContentStyle};
  align-items: flex-start;
  height: auto;
  &.examples {
    padding: 0px !important;
  }
`

export const CompanyResume = styled.div`
  margin-bottom: 45px;
  margin-right: 15px;
  width: 100%;
  @media only screen and (min-width: 891px) {
    width: 25%;
  }
`

export const TitleContainer = styled.h5`
  margin-bottom: 15px;
  font-family: futura-lt-w01-book,sans-serif;
`

export const DescriptionContainer = styled.label`
`

export const MenusContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column !important;
  margin-bottom: 40px;
  @media only screen and (min-width: 891px) {
    width: 75%;
  }
  @media only screen and (min-width: 690px) {
    flex-direction: row !important;
  }
`;

export const MenuContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  @media only screen and (min-width: 690px) {
    width: 19%;
    margin-right: 40px;
    max-width: 230px;
  }
`

export const MenuTitle = styled.div`
  font-weight: bold;
  border-bottom: 1px solid white;
  margin-bottom: 7px;
  padding-bottom: 2px;
  white-space: nowrap;
`

export const OptionsList = styled(StyledLink)`
  color: white;
  text-decoration: none;
  display: block;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const FooterContentContainer = styled.div`
  ${DefaultCardContentStyle};
  flex-direction: column !important;
  @media only screen and (min-width: 690px) {
    flex-direction: row !important;
  }
  height: auto;
`;

export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-around;

  @media only screen and (min-width: 690px) {
    width: 45%;
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-content: space-around;

  @media only screen and (min-width: 690px) {
    width: 240px;
  }
`;



export const ContactContainer = styled.div`
`

export const CopyrightContainer = styled.div`
`

export const EmailContainer = styled.a`
  text-decoration: none;
  color: inherit;
  & .footer {
    ${cLabel}
  }
  & .footer-icon {
    color: ${redCompany};
    width: 1em !important;
    height: 1em !important;
  }
`

export const SocialMediaContainer = styled.div`
  & .footer {
    ${cLabel}
  }
  & .footer-icon {
    color: ${redCompany};
    width: 1em !important;
    height: 1em !important;
  }
`

export const SocialContainer = styled.a`
  text-decoration: none;
  color: inherit;
`

