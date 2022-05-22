import styled, { css } from 'styled-components';
import { redCompany, DefaultCardContainerStyle, DefaultCardContentStyle, redIntenseCompany } from '../../../config/styles/common-styles';

export const CardContainer = styled.div`
  ${DefaultCardContainerStyle};

  min-height: 100px;
  background-color: ${redCompany};
  opacity: 1;

  &.home-header-card {
    height: 35vh;
  }
`;

export const CardContentContainer = styled.div`
  ${DefaultCardContentStyle};
  justify-content: center;
  flex-direction: column !important;
  
  @media only screen and (min-width: 891px) {
    align-items: flex-start;
  }

  opacity: 1;
`;

export const TitleContainer = styled.h2`
  color: white;
  margin-bottom: 10px;
  width: 80%;
  text-align: center;
  @media only screen and (min-width: 891px) {
    width: 60%;
    text-align: left;
  }
  &.full-width {
    width: 100% !important;
  }
  &.black {
    color: black;
  }
`

export const DescriptionContainer = styled.h5`
  color: white;
  font-weight: 500;
  margin-bottom: 10px;
  width: 80%;
  text-align: center;
  @media only screen and (min-width: 891px) {
    width: 60%;
    text-align: left;
  }
  &.full-width {
    width: 100% !important;
  }
  &.black {
    color: black;
  }
`;
