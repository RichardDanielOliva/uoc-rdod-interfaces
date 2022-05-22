import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { blueLightcompany, redCompany, cH3, cH4, cH5, greencompany, LightWhite } from '../../../../config/styles/common-styles';

export const CardContainer = styled.div`
  width: 100%;
`;

export const VideoContainer = styled.div`
  width: 100%;
  @media only screen and (min-width: 891px) {
    width: 90%;
  }
`;

export const ResourceVideo = styled.iframe`
  width: 100%;
  height: 30vh;
  max-height: 500px;
  margin-bottom: 15px;
  @media only screen and (min-width: 891px) {
    height: 50vh;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const ImageTitle = styled.div`
font-size: 12px;
font-weight: bold;
margin-bottom: 20px;
&.centered {
  text-align: center;
}
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 891px) {
    width: 90%;
  }
`;

export const TitleContainer = styled.h3`
  display: flex;
  flex-direction: column;
  margin: 15px 0 5px;
  color: ${redCompany};
  width: 100%;
  font-weight: 500;
  border-bottom: 1px solid #cbcbcb;
`;

export const SubTitleContainer = styled.h5`
  font-weight: 400;
  color: black;
`;

export const AuthorContainer = styled.h5`
  font-weight: 400;
  color: black;
  font-style: italic;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  
  p {
    padding-bottom:10px;
  }
  li {
    padding-bottom:10px;
  }
  .title {
    ${cH3};
    color: ${greencompany};
    font-weight: 500;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .subtitle {
    ${cH4};
    color: ${greencompany};
    font-weight: 500;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .subsubtitle {
    @media only screen and (min-width: 891px) {
      font-size: 17px;
    };
    @media only screen and (max-width: 891px) {
      font-size: 16px;
    };
    color: ${greencompany};
    font-weight: 500;
    padding: 5px 0px;
  }
  .centered {
    text-align: center;
  }
  .comment {
    float: right;
    white-space: nowrap;
    padding-left: 40px;
    :before {
      content: '▹'
    }
  }
  .line {
    width: 100%;
  }
  .commented-line {
    display: flex;
  }
  .procedure {
    width: 100%;
    white-space: nowrap;
    @media only screen and (max-width: 891px) {
      font-size: 0.7em;
      overflow: auto;
      padding-bottom: 10px;
    };
  }
  .tab1 {
    padding-left: 30px;
  }
  .tab2 {
    padding-left: 60px;
  }
  .tab3 {
    padding-left: 90px;
  }
  .tab4 {
    padding-left: 120px;
  }
  ul {
    list-style: disc;
    list-style: inside;
  }
  .references-title {
    ${cH3};
    color: black;
    padding-bottom: 10px;
  }
  .ref-content {
    display: flex;
    flex-direction: row;
    padding-bottom: 8px;
  }
  .ref-reference {
    min-width: 120px;
  }
  .image-title {
    font-size: 12px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;
    
  }
  .figure-tabular {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    @media only screen and (max-width: 891px) {
      overflow-x: auto;
      justify-content: flex-start;
    };
    
  }
  .paragraph {
    padding-top: 10px;
    padding-bottom: 30px;
  }
  .abstract {
    padding-top: 40px;
    p {
      line-height: inherit;
    }
  }
  .cite-link {
    color: ${blueLightcompany};
    text-decoration: none;
  }
`;

export const CustomAppBar = styled(AppBar)`
  display:flex;
  width: 100%;
  border: none;
  box-shadow: none !important;
  
  & .MuiTab-textColorInherit {
    border-radius: 10px 10px 0px 0px;
    border: 1px solid grey;
    border-bottom: none;
    margin-right: 10px;
    min-height: auto;
    padding: 3px 12px;
  }
  & .Mui-selected {
    background-color: ${LightWhite};
    font-weight: 600;
    border-radius: 10px 10px 0px 0px;
    border: none;
  }
  & .MuiTabs-indicator {
    display: none
  }
`;

export const CustomTabListContainer = styled(Tabs)`
  
&.MuiTabs-root {
  min-height: auto;
}
  width: 100%;
  color: black;
  background-color: white;
  display: flex;
  border: none;
  .MuiTab-wrapper {
    text-transform: none;
  }
`;

export const RelatedContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 140px 20px;
  background-color: ${LightWhite};
  height: 100%;
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h4`
`;

export const ResourceOptions = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  margin: 0 0 10px 0;

`;

export const ResourceContainer = styled.li`
  display: list-item;
  margin: 5px 0;
`;

export const ResourceLink = styled.a`
  height: 100%;
  width: 100%;
  padding: 5px 0px;
  display: flex;
  align-items:center;
  justify-content: left;
  text-decoration-style: none;
  text-decoration: none;
  cursor: pointer;
  text-align: left;
  color: ${blueLightcompany};
  &:hover {
    text-decoration: solid underline ${blueLightcompany} 2px;
  }
`;