import styled from "styled-components";
import {
  redCompany,
  greencompany,
  cLabel,
  cH3
} from "../../../config/styles/common-styles";
import { StyledLink } from "../../../config/styles/components-styles";

export const FormCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.h3`
  font-weight: 500;
  width: 100%;
  margin-bottom: 10px;
`
export const DescriptionContainer = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`

export const ErrorMessagesContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;
`;

export const ErrorMessage = styled.li``;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CustomButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0px;
  align-items: flex-end;  
`;

export const CustomButtonContainer = styled.div`
  &.login-form-footer-button {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0px 35px;
    &:hover {
      cursor: pointer;
      button {
        text-decoration: underline;
      }
    } 
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  text-decoration-style: none;
  text-decoration: none;
  width: 100%;
  background-color: ${redCompany};
  color: white;
  border-radius: 10px;
  padding: 3px;
`;

export const CustomButton = styled.button`
  
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  text-decoration-style: none;
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  padding: 8px;
  color: white;
  border-radius: 5px;
  background-color: ${redCompany};
  
  &:hover {
    background-color: ${greencompany};
  }

  &:first-child {
    margin-right: 5px;
  }

    color: white;
    font-size: 12px;
    padding-left: 10px;
    width: auto;
    margin: 0px;
    font-weight: 400;
    &:hover {
      text-decoration: underline;
      background-color: ${redCompany};
    }
  

  &.login-form-footer-button {
    ${cH3};
    margin-top: 8px !important;
    width: 100px;
    color: ${redCompany};
    background-color: transparent;
  }
`;

export const CustomLink = styled(StyledLink)`
  display: flex;
  flex-direction: column;
  text-decoration-style: none;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: solid underline white 2px;
  }

    color: white;
  
`;

export const MessageLinkContainer = styled.p`
  font-size: 0.65em; 
  display: flex;
  margin: 2px 0;
  flex-direction: column;
  
`;
