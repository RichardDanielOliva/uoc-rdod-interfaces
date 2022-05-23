import styled, { css } from 'styled-components';
import { DefaultCardContainerStyle, redIntenseCompany, secondaryColor, secondaryLightColor } from '../../config/styles/common-styles';

export const EventViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const EventViewerCardContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
`

export const EventViewerHelperContainer = styled.div`
  ${DefaultCardContainerStyle};
  justify-content: center;
  padding: 30px;
`;

export const EventViewerContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1170px;
  z-index: 99;
  background-color: white;
`;

export const EventContentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const EventOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const EventHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  overflow: hidden;

  &.options-sections {
    background-color: ${secondaryLightColor};
    padding: 30px;
  }
`;

export const EventViewTitle = styled.h3`
  width: 100%;
  color: ${secondaryColor};
  margin: 70px 0;
`;

export const EventViewSubTitle = styled.h4`
  width: 100%;
  color: ${redIntenseCompany};
`;

export const EventViewLocation = styled.div`
  width: 100%;
  margin: 2px 0;
`;

export const EventViewPrice = styled.div`
  width: 100%;
  margin: 20px 0 0 0;
`;

export const EventContentOptionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(150,150,150, 1);
`;

export const EventDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;

export const EventSubtitle = styled.h4`
  color: ${redIntenseCompany};
  margin: 5px 0;
`;

export const EventDescription = styled.div`
& p{
  margin: 10px 0;
}
`;

export const EventOtherInfoContainer = styled.div`
  width: 1170px;
`;

export const SimpleEventContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const EventMapContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const RelatedEventsContainer = styled.div`
  flex-direction: row;
  margin: 20px 0;
`;

export const PreviewTitle = styled.h3`
  font-weight: 500;
  text-align: center;
  padding: 7px;
  width: 100%;
  color: white;
  background-color: ${redIntenseCompany};
`;

export const CustomButton = styled.div`
  width: 100%;
  margin: 5px;
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
`;

export const OtherOptionsCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;


export const OtherOptionsButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 15px 0;
  text-decoration-style: none;
  text-decoration: none;
  color: black; 
  &:hover {
    color: ${redIntenseCompany};
    cursor: pointer;
  }
`;

export const ContentOptionsButton = styled.button`
  display: flex;
  align-items: center;
  width: 100px;
  margin: 15px 30px;
  text-decoration-style: none;
  text-decoration: none;
  color: black; 
  &:hover {
    color: ${redIntenseCompany};
    cursor: pointer;
  }

  
  ${props => props.isSelected && css`
  fill: ${redIntenseCompany};
  color: ${redIntenseCompany};
`}
`;

export const ContentOptionsContainer = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 15px 0;
  text-decoration-style: none;
  text-decoration: none;
  color: black; 
  &:hover {
    color: ${redIntenseCompany};
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px; //clamp(18px, 1.1vw, 1.1vw); 
  height: 20px; // clamp(18px, 1.1vw, 1.1vw); 
  margin: 0 5px 0 0;
  `;
