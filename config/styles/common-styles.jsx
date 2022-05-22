import styled, { css } from "styled-components";
export const mainDGPanelColor = "rgba(229, 233, 241, 0.9)";
export const textHoverColor = "rgba(250, 250, 250, 1)";
export const textDisableColor = "rgba(250, 250, 250, 0.5)";
export const textDGPanelColor = "rgba(0, 0, 0, 1) !important;"
export const buttonDGPanelColor = "rgba(117, 117, 117, 0.8)";
export const buttonDGPanelDisableColor = "rgba(117, 117, 117, 0.5)";
export const greencompany = "#46C1A4";
export const greenLightcompany = "#79d2be";
export const secondaryColor = '#00383f';
export const secondaryLightColor = '#f2e3dd';
export const redCompany = '#390D02';
export const redIntenseCompany = '#A52502';
export const blueLightcompany = '#4c90c5';
export const LightWhite = '#f5f5f5';
export const LightRed = '#ffe6e6';
export const lightGrey = '#e6e6e6';
export const greyColor = '#8d8d8d';
export const cH5fontSize = "16px";
export const greyTransparent = '#f8f8f8';
export const blueTransparent = '#d9edf7';
export const greenTransparent = '#edf7f0';
export const footerBackground = '#390D02;';
export const cH1 = css`
  margin: 0;
  padding: 0;
  font-weight: 600;
  @media only screen and (min-width: 1250px) {
    font-size: 40px;
  };
  @media only screen and (min-width: 891px) and (max-width: 1250px) {
    font-size: 33px;
  };
  @media only screen and (max-width: 891px) {
    font-size: 27px;
  };
`;

export const cH2 = css`
  margin: 0;
  padding: 0;
  font-weight: 600;
  @media only screen and (min-width: 1250px) {
    font-size: 34px;
  };
  @media only screen and (min-width: 891px) and (max-width: 1250px) {
    font-size: 28px;
  };
  @media only screen and (max-width: 891px) {
    font-size: 23px;
  };
`;

export const cH3 = css`
  margin: 0;
  padding: 0;
  font-weight: 600;
  @media only screen and (min-width: 1250px) {
    font-size: 23px;
  };
  @media only screen and (min-width: 891px) and (max-width: 1250px) {
    font-size: 20px;
  };
  @media only screen and (max-width: 891px) {
    font-size: 18px;
  };
`;

export const cH4 = css`
  margin: 0;
  padding: 0;
  font-weight: 400;
  @media only screen and (min-width: 1250px) {
    font-size: 21px;
  };
  @media only screen and (min-width: 891px) and (max-width: 1250px) {
    font-size: 18px;
  };
  @media only screen and (max-width: 891px) {
    font-size: 17px;
  };
`;

export const cH5 = css`
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 891px) {
    font-size: 15px;
  };
  @media only screen and (max-width: 891px) {
    font-size: 14px;
  };
`;

export const cP = css`
  ${cH5};
  font-weight: 400;
  line-height: 1.7em;
`;

export const cInput = css`
  ${cP};
`;

export const cLabel = css`
  font-size: 14px;
  position: relative;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: auto;
  &.align-left.home {
    margin-left: 0px;
    margin-right: 0px;
    min-width: 150px;
    @media only screen and (max-width: 690px) {
      margin: auto;
    }
  }

  @media only screen and (min-width: 690px) {
    &.align-left {
      margin-left: 0px;
    }
    &.align-right {
      margin-right: 0px;
    }
  }
`;

export const DefaultLinkStyle = css`
    height: 100%;
    color: black;
    font-size: 14px;
    white-space: nowrap;
    padding: 5px 0;
    display: flex;
    align-items:center;
    justify-content: left;
    text-decoration-style: none;
    text-decoration: none;
    cursor: pointer;
    text-align: left;
    color: ${blueLightcompany};
    &:hover {
      color: ${redCompany};
    }
    ${props => props.isSelected && css`
    background-color: rgba(210,210,210, 0.3);
    `}
`;

export const DefaultFlexRowStyle = css`
  width: 100%;
  display: flex;

  @media only screen and (min-width: 891px) {
    flex-direction: row;
  }
`;

export const DefaultFlexCenterRowStyle = css`
  ${DefaultFlexRowStyle}
`;

export const DefaultItemCardStyle = css`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  background-color: white;
  max-height: 350px;

  @media only screen and (min-width: 891px) {
    max-width: 350px;
    width: 95%;
  }
`;

export const DefaultCardContainerStyle = css`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  z-index: 3;
  justify-content: center;
  padding: 30px 15px;
`;

export const DefaultCardContentStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  @media only screen and (min-width: 891px) {
    flex-direction: row;
    padding: 0 5%;
    max-width: 1170px;
  }

  @media only screen and (min-width: 1250px) {
    padding: 0;
  }
  
  &.full-width {
    padding: 0 !important;
    max-width: 100% !important;
  }
`;

export const DefaultInnerHTMLStyle = css`
  & li {
    line-height: 2em;
    margin-left: 30px;
  }

  & h2 {
    line-height: 3em;
  }

  & h4 {
    line-height: 3em;
  }

  & p {
    line-height: 2em;
  }

  & span.release {
    color: ${greenLightcompany};
  }

  & span.release {
    letter-spacing: 0.1em;
  }
  
  & span.smaller-font {
    font-size: 0.8em;
  }
`;

export const fadeInAnimation = css`
  animation: fadeIn 0.8s;
  -webkit-animation: fadeIn 0.8s;
  -moz-animation: fadeIn 0.8s;
  -o-animation: fadeIn 0.8s;
  -ms-animation: fadeIn 0.8s;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  ${fadeInAnimation}
`;
