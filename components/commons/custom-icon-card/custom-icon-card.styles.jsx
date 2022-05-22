import styled from 'styled-components';
import { redCompany, footerBackground, greencompany } from '../../../config/styles/common-styles';
import { StyledLink } from '../../../config/styles/components-styles';

export const CustomLinkIconCardContainer = styled(StyledLink)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-decoration-style: none;
  text-decoration: none;
  min-height: 100%;
  color: white;
  @media only screen and (min-width: 891px) {
    justify-content: center;
    margin: 10px; 
  }
  &.help-resource-card, &.resource-card {
    width: 100%;
    padding: 15px;
    z-index: 30;
    color: ${greencompany};
    align-content: center;
    text-align: center;
    flex-direction: column;

    &:hover {
      color: ${redCompany};
    }

    @media only screen and (min-width: 891px) {
      width: 300px;
    }
  }
  &.resource-preview-card {
    width: 100%;
    z-index: 30;
    color: white;
    align-content: center;
    text-align: center;
    flex-direction: column;
    height: 250px;
    @media only screen and (max-width: 891px) {
      height: 325px;
    }
    &:hover {
      color: ${redCompany};
    }
  }
`

export const CustomLinkIconButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration-style: none;
  text-decoration: none;
  margin: 10px; 
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  &.help-resource-card-header, &.resource-card-header {
    border: 2px solid ${greencompany};
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
    padding: 50px 70px;
  }
  &.resource-card-header {
    border: 2px solid ${redCompany};
  }
`

export const IconContainer = styled.div`
  width: 55px;
  height: 55px;
  color: ${redCompany};
  position: relative;
  &.help-resource-card-icon {
    width: 100px;
    height: 100px;
  }
  &.resource-card-icon {
    width: 120px;
    height: 120px;
  }
  &.resource-preview-card-icon {
    width: 100%;
    height: 100%;
    border: 1px solid ${footerBackground};
  }

`

export const TitleContainer = styled.h5`
  &.resource-preview-card-title {
    line-height: 1.7em;
  }
  &.help-resource-card-title, &.resource-card-title {
    color: white;
    font-size: 1.2em;
    font-weight: 500;
  }
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  &.help-resource-card-content, &.resource-card-content, &.resource-preview-card-content {
    color: white;
    background-color: ${greencompany};
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
    padding: 4px 10px;
    margin-top: 5px;
  }
  &.resource-card-content {
    background-color: ${redCompany};
  }
  &.resource-preview-card-content {
    color: white;
    background-color: ${footerBackground};
    text-overflow:ellipsis;
    overflow:hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    max-height: 160px;
  }
`

export const DescriptionContainer = styled.p`
  text-align: center;
  &.resource-card-description {
    color: white;
    font-size: 0.9em;
    font-weight: 500;
  };
  
`