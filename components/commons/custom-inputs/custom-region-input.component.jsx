import React from 'react';

import {
  FormGroup,
  CustomLabel,
  CustomRegionDropDown,
} from './custom-inputs.styles';

const CustomRegionInput = ({
    country='',
    value='',
    label,
    id='custom-text-input',
    className='custom-text-input',
    onChangeMultiple,
    flexDirection='column'
}) => {
  return (  
    <FormGroup flexDirection={flexDirection} className={`${className}-group`}>
        {label && <CustomLabel htmlFor={id}  className={`${className}-label`}>{label} </CustomLabel>}
        <CustomRegionDropDown
          country={country}
          value={value}
          onChange={onChangeMultiple} />
    </FormGroup>
  );
};

export default CustomRegionInput;