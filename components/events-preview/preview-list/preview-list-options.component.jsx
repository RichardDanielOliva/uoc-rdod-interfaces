import React from 'react';
import { SearchIcon, LocationIcon, DateIcon } from '../../../config/styles/icons-styles';
import { CustomButton, EventListOptionsContainer, ListOptionsInputsContainer, ListInputContainer, ListOptionsButtonsContainer, IconContainer, CustomInput } from '../event-card.styles';

const EventListOptions = ({ viewInList, setViewInList }) => {
  return (
    <EventListOptionsContainer>
      <ListOptionsInputsContainer>
        <ListInputContainer>
        <IconContainer>
            <SearchIcon />
          </IconContainer>
          <CustomInput placeholder={'Palabra clave'}/>
        </ListInputContainer>
        <ListInputContainer >
        <IconContainer>
            <LocationIcon />
          </IconContainer>
        <CustomInput placeholder={'Ubicación'}/>
        </ListInputContainer >
        <ListInputContainer >
        <IconContainer>
            <DateIcon />
          </IconContainer>
        <CustomInput placeholder={'Fecha'}/>
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