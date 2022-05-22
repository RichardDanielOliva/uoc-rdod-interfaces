import styled, { css } from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';

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
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  margin: auto;
`;

export const SlideItemContainer = styled.div`
  ${displayImages}
  max-width: 100%;
  display: flex;
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
  background-color: rgba(0,0,0,0.1);
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 22px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  &:hover{
    background-color: rgba(0,0,0,0.8);
    color: white;
  }
`;

export const Next = styled.a`
  background-color: rgba(0,0,0,0.1);
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 22px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  right: 0;
  border-radius: 3px 0 0 3px;
  &:hover{
    background-color: rgba(0,0,0,0.8);
    color: white;
  }
`;

export const PropertyImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const DeleteIcon = styled(IoIosCloseCircle)`
  color: red;
  cursor: pointer;
  position: absolute;
  top: 2%;
  right: 2%;
`