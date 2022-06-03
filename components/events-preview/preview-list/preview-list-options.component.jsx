import React from 'react';
import { SearchIcon, LocationIcon, DateIcon } from '../../../config/styles/icons-styles';
import { CustomButton, EventListOptionsContainer, ListOptionsInputsContainer, ListInputContainer, ListOptionsButtonsContainer, IconContainer, CustomInput } from '../event-card.styles';

const EventListOptions = ({ viewInList, setViewInList }) => {
  return (
    <EventListOptionsContainer>
      <ListOptionsInputsContainer>
        <ListInputContainer>
        <IconContainer htmlFor={'palabra-clave-input-id'}>
            <SearchIcon />
          </IconContainer>
          <CustomInput 
            id={'palabra-clave-input-id'}
            placeholder={'Palabra clave'}/>
        </ListInputContainer>
        <ListInputContainer >
        <IconContainer htmlFor={'palabra-Ubicación-input-id'}>
            <LocationIcon />
          </IconContainer>
        <CustomInput
                      id={'palabra-Ubicación-input-id'}
          placeholder={'Ubicación'}/>
        </ListInputContainer >
        <ListInputContainer >
        <IconContainer htmlFor={'palabra-fecha-input-id'}>
            <DateIcon />
          </IconContainer>
        <CustomInput 
                                id={'palabra-fecha-input-id'}
          placeholder={'Fecha'}/>
        </ListInputContainer >
        <CustomButton onClick={() => {}}>
          Buscar
        </CustomButton>
      </ListOptionsInputsContainer>
      <ListOptionsButtonsContainer>
        {
          viewInList ? <CustomButton 
            className='large' 
            onClick={() => setViewInList(false)}>
            Ver mapa
          </CustomButton> :
            <CustomButton className='large'
              onClick={() => setViewInList(true)}>
              Ver lista
            </CustomButton>
        }
      </ListOptionsButtonsContainer>
    </EventListOptionsContainer>
  );
};

export default EventListOptions