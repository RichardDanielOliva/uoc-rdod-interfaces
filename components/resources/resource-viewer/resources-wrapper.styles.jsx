import styled from 'styled-components';
import { DefaultCardContainerStyle, DefaultCardContentStyle } from '../../../config/styles/common-styles';

export const CardContainer = styled.div`
  ${DefaultCardContainerStyle}
`;

export const CardContentContainer = styled.div`
    ${DefaultCardContentStyle}
    align-items: flex-start;
    justify-content: flex-start;
`;

export const MainContentContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media only screen and (min-width: 891px) {
    width: 65%;
  }
`;

export const RelatedPanelContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 891px) {
    width: 25%;
    max-width: 260px;
  }
`;