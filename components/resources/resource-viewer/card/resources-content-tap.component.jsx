import React from 'react';

import {
  TextContainer
} from './resource-card.style';

const ResourceContentTap = ({resource}) => {
  return (
    <TextContainer dangerouslySetInnerHTML={{ __html: resource.description }} />
  );
};

export default ResourceContentTap;