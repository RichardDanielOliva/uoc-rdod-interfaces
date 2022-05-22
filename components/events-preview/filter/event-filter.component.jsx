import React from 'react';
import { AVAILABLE_CATEGORIES_OPTIONS } from '../../../hooks/locales/resources.hook';
import CustomSelectInput from '../../commons/custom-inputs/custom-select-input.component';
import { EventPreviewFilterContainer, OptionsContainer, InputOptionContainer } from '../event-card.styles';


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

const MusicOptions = () => {
  return (<>
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
      </>)
}

const SportOptions = () => {
  return (<>
        <InputOptionContainer>
          <CustomSelectInput
            label={'Tipo de deporte'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
        </InputOptionContainer>
      </>)
}

const TheaterOptions = () => {
  return (<>
          <InputOptionContainer>
          <CustomSelectInput
            label={'Museo'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
                    <CustomSelectInput
            label={'Idioma'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
      </InputOptionContainer>
      </>)
}


export const getCategoryOptions = (id) => {
  switch (id) {
    case 'music':
      return <MusicOptions />
    case 'sport':
      return <SportOptions />
    case 'theater':
      return <TheaterOptions />
      default:
          return <SportOptions />
  }
}

const EventPreviewFilter = ({ category, setCategory }) => {
  return (
    <EventPreviewFilterContainer>
    <OptionsContainer>
      <InputOptionContainer>
        <CustomSelectInput
          label={'Categoria'}
          value={category}
          options={AVAILABLE_CATEGORIES_OPTIONS}
          onChange={(event) => setCategory(event.target.value)}
        />
      </InputOptionContainer>
      <CommonsOptions />
      {getCategoryOptions(category)}
    </OptionsContainer>
  </EventPreviewFilterContainer>
  );
};

export default EventPreviewFilter;