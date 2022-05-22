import React from 'react';
import {
  FormGroup,
  CustomLabel,
  CustomPhoneInput,
  CustomHelperText,
  CustomInputContainer,
} from './custom-inputs.styles';

var lookup = require('country-data-list').lookup;

const CustomPhoneComponent = ({
    value,
    label,
    helperText,
    country,
    id='custom-text-input',
    className='custom-text-input',
    onChangeMultiple,
    flexDirection='column'
}) => {
  return (  
    <FormGroup flexDirection={flexDirection} className={`${className}-group`}>
      {label && <CustomLabel htmlFor={id} className={`${className}-label`}>{label}</CustomLabel>}
      <CustomInputContainer>
        <CustomPhoneInput
          international
          defaultCountry={lookup.countries({name: country}).length > 0 ? lookup.countries({name: country})[0].alpha2 : ''}
          value={value}
          onChange={onChangeMultiple} />
        {helperText && 
          <CustomHelperText 
            className={`${className}-helper-text`}>
              {helperText}
          </CustomHelperText>}
      </CustomInputContainer>
    </FormGroup>
  );
};

export default CustomPhoneComponent;