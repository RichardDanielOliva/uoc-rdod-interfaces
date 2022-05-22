import styled, { css } from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';
import { redCompany, blueLightcompany, lightGrey } from '../../../config/styles/common-styles';


const displayStyles = css`
  display: flex;
  width: 100%;
`;

const noDisplayStyles = css`
  display: none;
`;

const displayImages = props => {
  if (props.display === "true") 
    return displayStyles;
  else 
    return noDisplayStyles;
};

export const SlideShowContainer = styled.div`
${(props) => props.width && css`
width: ${props.width}px !important;
`}
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  margin: auto;
`;

export const SlideItemContainer = styled.div`
  ${displayImages}
  position: relative;
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
`;

export const NumberText = styled.div`
  background-color: rgba(0,0,0,0.1);
  color: #f2f2f2;
  font-size: 16px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;

export const Prev = styled.a`
  cursor: pointer;
  color: ${redCompany};
  font-size: 62px;
  transition: 0.6s ease;
  user-select: none;
  margin: auto 10px auto 0px;
  &:hover{
    color: ${blueLightcompany};
  }
  ${(props) => props.disabled && css`
    color: ${lightGrey};
    &:hover{
      color: ${lightGrey};
      cursor: default;
    }
  `}
`;

export const Next = styled.a`
cursor: pointer;
color: ${redCompany};
font-size: 62px;
transition: 0.6s ease;
user-select: none;
margin: auto 0px auto 10px;
&:hover{
  color: ${blueLightcompany};
}
${(props) => props.disabled && css`
color: ${lightGrey};
&:hover{
  color: ${lightGrey};
  cursor: default;
}
`}
`;

export const PropertyImage = styled.img`
  width:100%;
  height:auto;
`;

export const DeleteIcon = styled(IoIosCloseCircle)`
  color: red;
  cursor: pointer;
  position: absolute;
  top: 2%;
  right: 2%;
`