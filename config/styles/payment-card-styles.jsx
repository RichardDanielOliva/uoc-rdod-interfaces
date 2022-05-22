import styled from 'styled-components';
import { cP } from "./common-styles";

export const CustomCardElementContainer = styled.div`
  width: 100%;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  .custom-card-element-base{
    border: 1px solid rgba(150,150,150, 1);
    border-radius: 4px;
    padding: 4px;
  }

  .appElement input {
    ${cP};
    font-size: 20px ;
    font-weight: 400 !important;
    line-height: 1.7em !important;
  }
`;

export const CustomCardElementClasses = {
    base: 'custom-card-element-base',
    invalid: 'custom-card-element-invalid',
  }
  
  export const CustomCardElementStyles = {
    base: {
      fontSize: '15px',
      fontWeight: '400',
      lineHeight: '1.7em'
    },
  }