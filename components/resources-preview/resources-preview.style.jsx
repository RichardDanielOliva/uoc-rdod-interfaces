import styled from 'styled-components';
import { redCompany, cH4, DefaultCardContainerStyle, DefaultItemCardStyle, DefaultCardContentStyle, greyColor, greencompany } from '../../config/styles/common-styles';
import { StyledLink } from '../../config/styles/components-styles';

export const CardContainer = styled.div`
  ${DefaultCardContainerStyle}
`;

export const CardContentContainer = styled.div`
  ${DefaultCardContentStyle};
  flex-direction: column !important;
  margin-top: 40px;
`;

export const HeaderContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  text-align: center;

  @media only screen and (min-width: 891px) {
    width: 100%;
    height: 45%;
    justify-content: space-around;
    align-content: space-around;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 20px;
  height: 730px;

  @media only screen and (min-width: 891px) {
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: row;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  font-size: 1.2em;
`;

export const IconContainer = styled.div`
  width: 25px;
  padding: 10px 0 0;
  height: 100%;
  color: ${redCompany};
`;

export const ResourceContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  @media only screen and (min-width: 891px) {
    margin: 0 10px;
    max-width: 350px;
    width: 28%;
  }
  & a {
    padding: 0;
  };
`;

export const TitleContainer = styled.h2`
`

export const DescriptionContainer = styled.p`
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 1em;
`

export const SeeMoreButtonContainer  = styled(StyledLink)`
  ${cH4};
  color: ${redCompany};
  cursor: pointer;

  &:hover{
    text-decoration: solid underline 2px;
  }
`;

export const ResourceImage = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: 175px;
  margin-bottom: 7px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  @media only screen and (min-width: 891px) {
    max-height: 100%;
  }
`;

export const ButtonContainer = styled.div`
  margin: auto;
  width: 100%;
  z-index: 30;
  padding: 10px;
  bottom: 0;
  background-color: ${greencompany};
  border: 1px solid #e6e6e6;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  font-weight: 500;
`;