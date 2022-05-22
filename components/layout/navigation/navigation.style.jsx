import styled, { css } from 'styled-components';
import { blueLightcompany, redIntenseCompany, redCompany, DefaultCardContentStyle, LightWhite } from '../../../config/styles/common-styles';
import { StyledLink } from '../../../config/styles/components-styles';

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  z-index: 3;
  padding: 6px 0px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: white;
  border-bottom: 5px solid ${redIntenseCompany};
  &.scrolled {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 25%);
  }
  @media only screen and (min-width: 891px) {
    flex-direction: row;
  }
`;

export const NavigationContentContainer = styled.div`
  ${DefaultCardContentStyle};
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (min-width: 891px) {
    flex-direction: row;
  }
`;

export const NavigationItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: none;
  
  @media only screen and (min-width: 891px) {
    display: flex;
    flex-direction: row;
    padding: 0;
    max-width: 1170px;
  }

  @media only screen and (min-width: 1250px) {
    padding: 0;
  }
`;

export const NavigationToggleItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: display 2s;
  color: ${redIntenseCompany};
  ${props => props.isToggle === 'true' && css`
    display: none;
  `}

  @media only screen and (min-width: 891px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const IconItemsContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  text-decoration-style: none;
  text-decoration: none;
  width: 35px;
  height: 100%;
  color: #99bdda;
  
  &:hover {
    color: ${redIntenseCompany};
    cursor: pointer;
  }

  ${props => props.isToggle === 'true' && css`
    display: none;
  `}
`;

export const NavigationIconLink = styled(StyledLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration-style: none;
  text-decoration: none;
  margin: 0 5px 2px 0;
  max-height: 45px;
  width: 100%;
`;

export const CompanyIconContainer = styled.div`
  position: relative;
  margin: 3px 3px 0px 0px;
  height: 32px;
  width: 32px;
`;


export const CompanyText = styled.div`
  color: ${redCompany};
  font-family: futura-lt-w01-book,sans-serif;
  0 5px 2px 0;
  margin: 14px 30px 12px 4px;
  font-weight: 100;
  font-size: 28px;
  display: inline-flex;
`;

export const NavigationSectionContainer = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (min-width: 891px) {
    width: auto;
  }
`;

export const NavigationItemContainer = styled(StyledLink)`
  width: 100%;
  color: black;
  white-space: nowrap;
  padding: 6px 15px 6px 15px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: left;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
  border-top: 1px solid rgba(210,210,210, 1);
  &:hover {
    background-color: ${LightWhite};
  }
  &.custom-button  {
    &:hover {
      background-color: ${LightWhite};
    }
  }
  ${props => props.isSelected && css`
    background-color: ${LightWhite};
    @media only screen and (min-width: 891px) {
      text-decoration: underline solid ${redCompany} 4px;
      text-underline-offset: 3px;
      background-color: white;
    }
  `}

  @media only screen and (min-width: 891px) {
    justify-content:center;
    border-bottom: none;
    padding: 0px 15px 1px 15px;
    margin: 8px 0px 0px 0px;
    border-top: none;
    font-weight: 700;
    &:hover {
      color: ${redIntenseCompany};
      background-color: white;
    }
    &.custom-button  {
      color: ${redCompany};
      border: 1px solid ${redCompany};
      border-radius: 5px;
      padding: 3px 10px;
      margin: 0px 10px 0px 0px;
      font-weight: 400;
      &:hover {
        color: ${redIntenseCompany};
        border-color: ${blueLightcompany};
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
  width: 100%;
  @media only screen and (min-width: 891px) {
    padding: 0;
  }
`;

export const ToggleButton = styled.div`
  width: 40px;
  height: 40px;
  padding: 5px;
  display: flex;
  color: ${redCompany};
  margin: auto 0;

  &:hover {
    color: ${blueLightcompany};
    cursor: pointer;
  }
  
  @media only screen and (min-width: 891px) {
    display: none;
  }
`;

export const NavigationHideItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 891px) {
    display: none;
  }
`;

export const NavigationIconItemContainer = styled(StyledLink)`
  height: 100%;
  width: 100%;
  padding: 5px 15px;
  display: flex;
  align-items:center;
  justify-content: left;
  text-decoration-style: none;
  text-decoration: none;
  border-top: 1px solid rgba(210,210,210, 1);
  cursor: pointer;
  text-align: left;
  font-weight: 600;
  color: ${redCompany};
  &:hover {
    background-color: ${LightWhite};
    cursor: pointer;
  }
  ${props => props.isSelected && css`
    color: ${blueLightcompany};
  `}

  @media only screen and (min-width: 891px) {
    padding: 5px 15px;
    justify-content:center;
    border-top: none;
    padding: 0;
    &:hover {
      color: ${blueLightcompany};
      cursor: pointer;
    }
  }
`;

export const NavigationIconContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  text-decoration-style: none;
  text-decoration: none;
  width: 30px;
  background-color: ${redCompany};
  color: white;
  border-radius: 5px;
  padding:3px;
`;

export const IconDescriptionContainer = styled.p`
  padding: 0px 10px;
  @media only screen and (min-width: 891px) {
    display: none;
  }
`;

export const ProfileImageContainer = styled.div`
  width: 25px;
  height: 25px;
`;

export const RegisterdTrademark = styled.div`
  font-size: 0.4em;
  line-height: 3.7;
`;