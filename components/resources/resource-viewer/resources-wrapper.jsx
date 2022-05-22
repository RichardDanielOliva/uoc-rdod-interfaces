import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Custom404 from '../../../pages/404';
import ResourceCard from './card/resource-card.component';
import RelatedPanel from './related-panel/related-panel.component';

import {
  CardContainer,
  CardContentContainer,
  MainContentContainer,
  RelatedPanelContainer
} from './resources-wrapper.styles';
import { getcompanySpinner } from '../../commons/custom-spinner/spinner.component';
import { fetchResource, fetchResources } from '../../../redux/resources/resources.actions';

const ResourcesWrapper = ({resourceId, resources, fetchResources, fetchResource}) => {
  useEffect(() => {
    if (!resources) fetchResources();
  }, []);

  if (resources && !resources[resourceId].description) fetchResource(resourceId);
  
  if(!resources || !resources[resourceId].description) return (
    <CardContainer>{getcompanySpinner('Loading resources')}</CardContainer>
  );

  let resource = resources[resourceId];
  if(!resource) return <Custom404 />;
  return (
    <CardContainer>
      <CardContentContainer>
        <MainContentContainer>
          <ResourceCard
            resource={resource}
             />
        </MainContentContainer>
        <RelatedPanelContainer>
          <RelatedPanel 
            resource={resource}
            />
        </RelatedPanelContainer>
      </CardContentContainer>
    </CardContainer>
  );
};

const mapStateToProps = state => ({
  resources: state.resources.data
});

export const mapDispatchToProps = dispatch => ({
  fetchResources: () => dispatch(fetchResources()),
  fetchResource: (resourceId) => dispatch(fetchResource(resourceId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesWrapper);
