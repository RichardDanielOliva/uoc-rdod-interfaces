import styled from 'styled-components';
import { DefaultCardContainerStyle, redCompany, redIntenseCompany, secondaryColor } from '../../config/styles/common-styles';
import { StyledLink } from '../../config/styles/components-styles';

export const EventPreviewContainer = styled.div`
  display: flex;
  width: 100%;
`

export const FilterContainer = styled.div`
  display: flex;
  width: 30%;
  background-color: ${secondaryColor};
  color: white;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-height: 80vh;
`

export const OptionsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const EventPreviewFilterContainer = styled.div`
  ${DefaultCardContainerStyle};
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 20px 50px 5px 100px;
  margin: 0;
`;


export const InputOptionContainer = styled.div`
  width: 100%;
  margin: 5px;
`;

export const EventPreviewListContainer = styled.div`
  ${DefaultCardContainerStyle};
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
`;

export const EventListOptionsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 100px 10px 30px;
  border-bottom: 1px solid ${redIntenseCompany};
`;

export const ListOptionsInputsContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ListInputContainer = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 25px 0 0;
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px; //clamp(18px, 1.1vw, 1.1vw); 
  height: 30px; // clamp(18px, 1.1vw, 1.1vw); 
  margin: 0 5px 0 0;
  `;

export const ListOptionsButtonsContainer = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
`;

export const CustomButton = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  color: white;
  background-color: ${secondaryColor};
  border: 1px solid white;
  border-radius: 4px;
  padding: 4px;

  &:hover {
    background-color: ${redIntenseCompany};
    cursor: pointer;
  }

  &.large {
    width: 100%;
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(150,150,150, 1);
  border-radius: 4px;
  padding: 2px;
`;

export const EventListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EventCardContainer = styled(StyledLink)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  text-decoration-style: none;
  text-decoration: none;
  color: black; 
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }

  &.list{
    flex-direction: row;
    padding: 10px 100px 10px 30px;
  }
`;

export const EventViewContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &.list{
    width: 70%;
  }
`;

export const EventViewImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  &.list{
    width: 30%;
  }
`;

export const EventViewTitle = styled.h3`
  width: 100%;
  color: ${secondaryColor};
`;

export const EventViewSubTitle = styled.h4`
  width: 100%;
  color: ${redIntenseCompany};
  margin: 2px 0;
`;

export const EventViewLocation = styled.div`
  width: 100%;
  margin: 2px 0;
`;

export const EventViewPrice = styled.div`
  width: 100%;
  margin: 2px 0;
`;