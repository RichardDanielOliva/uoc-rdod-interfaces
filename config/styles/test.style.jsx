import styled from 'styled-components';
import { redCompany, DefaultCardContainerStyle, DefaultCardContentStyle, DefaultInnerHTMLStyle } from '../../config/styles/common-styles';

export const CardContainer = styled.div`
  ${DefaultCardContainerStyle}
height: 20vh;
  

  background-color: ${redCompany};
`;

export const CardContentContainer = styled.div`
    ${DefaultCardContentStyle}
`;

