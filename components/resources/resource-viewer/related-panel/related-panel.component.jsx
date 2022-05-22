import React from 'react';
import LinkResourceCard from '../../link-card/link-resources.component';
import {
  CardContainer,
  ProductContainer,
  ProductTitle,
  ResourceLink,
  OtherLinks,
  ResourceItemContainer,
} from './related-panel.style';
import { CustomLink } from '../../../../config/styles/components-styles';
import { useLocaleProductsContent } from '../../../../hooks/locales/products.hook';
import { useLocaleResourcesRelated } from '../../../../hooks/locales/resources.hook';

const RelatedPanel = ({resource}) => {
  const RELATED_RESOURCES = useLocaleResourcesRelated();
  return (
    <CardContainer>
      <ProductContainer>
        <ProductTitle>{RELATED_RESOURCES.productTitle}</ProductTitle>
        <ResourceLink href={`/products/${resource.product}`}>
          { useLocaleProductsContent()[resource.product].title}
        </ResourceLink>
        <OtherLinks>
          <CustomLink className={'simple-light-blue small'} href={`/products/tkrisk/get`}>
            {'Request Trial'}
          </CustomLink> 
          <CustomLink className={'simple-light-blue small'} href={`/about_us/pricing_licensing`}>
            {'Get Pricing'}
          </CustomLink>
        </OtherLinks>
      </ProductContainer>
      <ResourceItemContainer>
      <ProductTitle>{RELATED_RESOURCES.nextResourceTitle}</ProductTitle>
        <LinkResourceCard 
          resourceId={resource.nextVideo}
          />
      </ResourceItemContainer>
      <ResourceItemContainer>
      <ProductTitle>{RELATED_RESOURCES.relatedResourcesTitle}</ProductTitle>
        {
          resource.relatedVideos.map(relatedResourceId =>
            <LinkResourceCard 
            key={`resources-related-panel-${relatedResourceId}`}
            resourceId={relatedResourceId}
            />)
        }
      </ResourceItemContainer>
    </CardContainer>
  );
};

export default RelatedPanel;