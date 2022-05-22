import React from 'react';

import {
  RelatedContentContainer,
  SectionContainer,
  SectionTitle,
  ResourceOptions,
  ResourceContainer,
  ResourceLink
} from './resource-card.style';

const ResourcesRelatedContent = ({resource}) => {
    return (
        <RelatedContentContainer>
        {
              resource.relatedContent.map((section, idx) => (
                <SectionContainer 
                  key={`tkrisk-related-content-${section}`}>
                    <SectionTitle>{section.title}</SectionTitle>
                    <ResourceOptions>
                    {section.items.map(({title, url}) => (
                      <ResourceContainer  key={`tkrisk-related-content-items-${section}`}>
                        <ResourceLink href={url}>
                          {title}
                        </ResourceLink>
                      </ResourceContainer>
                    ))}
                  </ResourceOptions>
                </SectionContainer>
              ))
            }
        </RelatedContentContainer>
    );
};

export default ResourcesRelatedContent;