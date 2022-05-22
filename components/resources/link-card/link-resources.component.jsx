import React from 'react';
import { connect } from 'react-redux';
import { getResourcesImageById } from '../../../config/styles/images-styles';
import {
  CardContainer,
  ResourceLink,
  ImageResource
} from './link-resources.style';

const LinkResourceCard = ({resourceId, resources, className}) => {
  let {title} = resources[resourceId];
  return (<CardContainer className={className}>
    <ResourceLink href={`/resources/${resourceId}`}>
      <ImageResource>
        {getResourcesImageById(resourceId)}
      </ImageResource>
      {title}
    </ResourceLink>
  </CardContainer>)
}

const mapStateToProps = state => ({
  resources: state.resources.data
});

export default connect(mapStateToProps)(LinkResourceCard);
