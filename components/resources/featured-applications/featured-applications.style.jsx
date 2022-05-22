import styled, { css } from 'styled-components';
import { DefaultCardContainerStyle, DefaultCardContentStyle, greencompany, blueLightcompany, redCompany } from '../../../config/styles/common-styles';

export const CardContainer = styled.div`
  ${DefaultCardContainerStyle};
  flex-direction: column;
  padding: 0px;
  margin-bottom: 50px;
`;

export const CardTitleContainer = styled.h3`
  color: white;
  background-color: ${greencompany};
  width: 100%;
  text-align: center;
  padding: 7px;
`;
