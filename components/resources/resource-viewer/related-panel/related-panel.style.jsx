import styled from 'styled-components';
import { blueLightcompany } from '../../../../config/styles/common-styles';
import { StyledLink } from '../../../../config/styles/components-styles';

export const CardContainer = styled.div`
  flex-direction: column;
  width: 100%;
`;

export const ProductContainer = styled.div`
  margin:  0 0 15px 0;
  padding: 15px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  border: 1px solid rgba(210,210,210, 1);
`;

export const ProductTitle = styled.h4`
  margin: 5px 0;
`;

export const ResourceLink = styled(StyledLink)`
  text-decoration-style: none;
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  margin: 5px 0;
  font-weight: 600;
  color: ${blueLightcompany};
  &:hover {
    text-decoration: solid underline ${blueLightcompany} 2px;
  }
`;

export const ResourceItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

export const OtherLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-between;
`;
