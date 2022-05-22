import styled from 'styled-components';
import { redCompany, DefaultCardContainerStyle, DefaultCardContentStyle } from '../../../config/styles/common-styles';

export const CardContainer = styled.div`
  ${DefaultCardContainerStyle};

  background-color: ${redCompany};
`;

export const CardContentContainer = styled.div`
  ${DefaultCardContentStyle}
  flex-direction: column;
  @media only screen and (min-width: 690px) {
    flex-direction: row;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 20px;

  @media only screen and (min-width: 690px) {
    margin-top: 0;
    margin-bottom: 0;
    width: 50%;
    justify-content: space-around;
    padding: 0 20px 40px 0;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  padding-top: 20px;

  @media only screen and (min-width: 690px) {
    justify-content: space-around;
    padding: 0 0 0 20px;
  }
`;

export const TitleContainer = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 60px;

  @media only screen and (min-width: 690px) {
    text-align: left;
  }
`

export const DescriptionContainer = styled.h4`
  color: white;
  text-align: center;
  margin: 15px 0;
  @media only screen and (min-width: 690px) {
    text-align: left;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media only screen and (min-width: 690px) {
    flex-direction: row;
    justify-content: space-between;
    align-content: space-around;
  }
`;


export const VideoContainer = styled.div`
  width: 90vw;
  height: 50vw;
  @media only screen and (min-width: 690px) {
    width: 45vw;
    height: 25vw;
    max-width: 450px;
    max-height: 250px;
  }
`;

export const TkriskVideo = styled.iframe`
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 690px) {
    display: flex;
  }
`