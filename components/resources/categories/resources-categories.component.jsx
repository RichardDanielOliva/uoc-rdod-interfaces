import React from 'react';
import { useLocaleResources, useLocaleResourcesCategories } from '../../../hooks/locales/resources.hook';
import CustomSelectInput from '../../commons/custom-inputs/custom-select-input.component';
import ResourcesSlideViewer from '../slide/resources-slide-viewer.component';

import {
  CardContainer, 
  RightContainer,
  PreviewTitle,
  ResourcesContainer,
  RelatedResourcesContainer,
  ViewMoreContainer,
  ViewMoreButton,
  HelperContainer,
  OptionsContainer,
  InputOptionContainer
} from './resources-categories.style';

const CommonsOptions = () => {
  return (<>
          <InputOptionContainer>
          <CustomSelectInput
            label={'Fecha'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
        </InputOptionContainer>
      <InputOptionContainer>
        <CustomSelectInput
          label={'Precio'}
          value={'All'}
          options={[{ value: 'All' }]}
        />
      </InputOptionContainer>
      </>)
}

const PopularesOptions = () => {
  return (
    <HelperContainer>
      <OptionsContainer>
        <InputOptionContainer>
          <CustomSelectInput
            label={'Ciudad'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
        </InputOptionContainer>
        <CommonsOptions />
      </OptionsContainer>
    </HelperContainer>
  )
}

const SportOptions = () => {
  return (
    <HelperContainer>
      <OptionsContainer>
        <InputOptionContainer>
          <CustomSelectInput
            label={'Tipo de deporte'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
        </InputOptionContainer>
        <CommonsOptions />
      </OptionsContainer>
    </HelperContainer>
  )
}

const MusicOptions = () => {
  return (
    <HelperContainer>
      <OptionsContainer>
      <InputOptionContainer>
          <CustomSelectInput
            label={'Tipo de música'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
        </InputOptionContainer>
        <InputOptionContainer>
          <CustomSelectInput
            label={'Duración'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
        </InputOptionContainer>
        <CommonsOptions />
      </OptionsContainer>
    </HelperContainer>
  )
}

const TheatherOptions = () => {
  return (
    <HelperContainer>
      <OptionsContainer>
        <InputOptionContainer>
          <CustomSelectInput
            label={'Museo'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
        </InputOptionContainer>
        <CommonsOptions />
      </OptionsContainer>
    </HelperContainer>
  )
}

export const getOptions = (id) => {
  switch (id) {
    case 'populares':
      return <PopularesOptions />
    case 'music':
      return <MusicOptions />
    case 'sport':
      return <SportOptions />
    case 'theater':
      return <TheatherOptions />
      default:
          return <SportOptions />
  }
}

export const EventCategories = ({id, title, resources}) => {
  const data = useLocaleResources();
  return (
    <RightContainer key={`section-${id}`} id={id}>
      <PreviewTitle>{title}</PreviewTitle>
      {getOptions(id)}
      <ResourcesContainer>
        <RelatedResourcesContainer>
          <ResourcesSlideViewer resources={resources} data={data}/>
        </RelatedResourcesContainer>
      </ResourcesContainer>
      <HelperContainer>
      <ViewMoreContainer>
          <ViewMoreButton href={'/events'}>
            {`Ampliar búsqueda >>`}
          </ViewMoreButton>
        </ViewMoreContainer>
        </HelperContainer>
    </RightContainer>
  )
}

const ResourcesCategoriesCard = ({ }) => {
  const RESOURCES_CATEGORIES = useLocaleResourcesCategories();

  return (
    <CardContainer>
      {
         RESOURCES_CATEGORIES.map((props) => <EventCategories {...props}/>)
      }
    </CardContainer>
  );
};

export default ResourcesCategoriesCard;
