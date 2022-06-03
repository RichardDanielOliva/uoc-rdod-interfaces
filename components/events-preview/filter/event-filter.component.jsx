import React from 'react';
import { AVAILABLE_CATEGORIES_OPTIONS } from '../../../hooks/locales/resources.hook';
import CustomSelectInput from '../../commons/custom-inputs/custom-select-input.component';
import { EventPreviewFilterContainer, OptionsContainer, InputOptionContainer } from '../event-card.styles';


const CommonsOptions = ({ category }) => {
  return (<>
          <InputOptionContainer>
          <CustomSelectInput
            id={'custom-input-fecha-filter' + category}
            label={'Fecha'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
        </InputOptionContainer>
      <InputOptionContainer>
        <CustomSelectInput
          id={'custom-input-precio-filter' + category}
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
                    id='custom-input-musica-filter'
            label={'Tipo de música'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
        </InputOptionContainer>
        <InputOptionContainer>
          <CustomSelectInput
          id='custom-input-duracion-filter'
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
                    id='custom-input-deporte-filter'
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
                          id='custom-input-museo-filter'
            label={'Museo'}
            value={'All'}
            options={[{ value: 'All' }]}
          />
                    <CustomSelectInput
                                 id='custom-input-idioma-filter'
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
                     id='custom-input-categoria-filter'
          label={'Categoria'}
          value={category}
          options={AVAILABLE_CATEGORIES_OPTIONS}
          onChange={(event) => setCategory(event.target.value)}
        />
      </InputOptionContainer>
      <CommonsOptions category={category}/>
      {getCategoryOptions(category)}
    </OptionsContainer>
  </EventPreviewFilterContainer>
  );
};

export default EventPreviewFilter;