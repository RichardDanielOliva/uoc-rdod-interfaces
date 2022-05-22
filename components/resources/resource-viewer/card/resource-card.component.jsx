import React from 'react';
import { ResourceLink } from '../../../contact_us-request/confirmation/contact_request-confirmation.styles';
import {
  CardContainer,
  ResourceVideo,
  VideoContainer,
  ContentContainer,
  DescriptionContainer,
  TitleContainer,
  AuthorContainer,
  TextContainer,
  ImageTitle,
  ResourceOptions
} from './resource-card.style';
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import { getImage } from '../../../../config/styles/images-styles';

const ResourceCard = ({ resource }) => {
  return (
    <CardContainer>

      {resource.videoUrl && <VideoContainer> <ResourceVideo src={resource.videoUrl} /> </VideoContainer>}
      <ContentContainer>
        <DescriptionContainer className={resource.section==='bayesian-modelling'?'article':''}>
          <TitleContainer>
            {resource.title}
          </TitleContainer>
          {resource.author && resource.author.map((x) => <AuthorContainer key={`autor-${x}`}> {x} </AuthorContainer>)}
          {resource.date && <AuthorContainer> {resource.date} </AuthorContainer>}
          {
            resource.description.map((section, index) => {
              switch (section.type) {
                case 'text':
                  return <TextContainer 
                    key={`resources-description-${index}`} 
                    dangerouslySetInnerHTML={{ __html: section.content }} />
                case 'image':
                  return <>
                    {getImage(section.content.id,
                      {style: { width:section.content.width, margin:section.content.margin }})}
                    <ImageTitle 
                      key={`resources-description-${index}`} 
                      className={section.content.margin ? 'centered' : ''}>{section.content.title}</ImageTitle>
                  </>
                case 'latex':
                  return <TextContainer key={`resources-description-${index}`} >
                    <Latex>{section.content}</Latex>
                    </TextContainer>
              }
            })
          }
          {
            resource.relatedContent && resource.relatedContent[1].items[0].url !== '' &&
            <>
              <TitleContainer> {resource.relatedContent[1].title} </TitleContainer>
              <ResourceOptions>
                {resource.relatedContent[1].items.map(({ title, url }) => (
                  <ResourceLink key={`referencess-${title}`} href={url}> {title} </ResourceLink>
                ))}
              </ResourceOptions>
            </>
          }
        </DescriptionContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default ResourceCard;