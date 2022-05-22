import styled from 'styled-components';
import { blueLightcompany } from '../../../config/styles/common-styles';
import { StyledLink } from '../../../config/styles/components-styles';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  &.related-preview {
    width: 45%;
  }
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

export const ImageResource = styled.div`
  width: 100%;
  margin-bottom: 5px;
  overflow: hidden;
  border: 1px solid #e6e6e6;
`;