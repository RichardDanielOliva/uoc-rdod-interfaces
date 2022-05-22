import styled, { css } from 'styled-components';
import { DefaultCardContainerStyle, DefaultCardContentStyle, greencompany, blueLightcompany, redCompany, footerBackground, redIntenseCompany, DefaultLinkStyle } from '../../../config/styles/common-styles';
import { StyledLink } from '../../../config/styles/components-styles';

export const CardContainer = styled.div`
  ${DefaultCardContainerStyle};
  padding: 0px !important;
  flex-direction: column !important;
`;

export const RightContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
  @media only screen and (min-width: 891px) {
    display: block;
  }
`;

export const PreviewTitle = styled.h3`
  font-weight: 500;
  text-align: center;
  padding: 7px;
  width: 100%;
  color: white;
  background-color: ${redIntenseCompany};
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
`;


export const ResourcesContainer = styled.div`
  ${DefaultCardContainerStyle};
  padding: 5px 15px 15px 15px;
`;

export const RelatedResourcesContainer = styled.div`
  ${DefaultCardContentStyle};
  flex-direction: row;
`;

export const ViewMoreContainer = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  width: 1170px;
  padding: 10px 0 0 0;
`;

export const ViewMoreButton = styled(StyledLink)`
  ${DefaultLinkStyle}
  color: ${redIntenseCompany};
  ${props => props.enable && css`
  &:hover{
      text-decoration:none; 
      cursor:pointer;  
  }`}
`;

export const OptionsContainer = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  width: 1170px;
`;

export const HelperContainer = styled.div`
  ${DefaultCardContainerStyle};
  justify-content: center;
  padding: 5px 30px;
`;

export const InputOptionContainer = styled.div`
  width: 150px;
  margin: 0 5px;
`;
