import React, { useState } from 'react';

import {
  FormGroup,
  CustomLabel,
} from './custom-inputs.styles';

const CustomRadioInput = ({
    value,
    options=[],
    id='custom-text-input',
    className='custom-text-input',
    onChange,
    flexDirection='column'
}) => {
  const onCLickHandle = (value) => () => {
    onChange(value)
  }
  return (  
    <FormGroup flexDirection={flexDirection} className={`${className}-container`}>
          {
          options.map((option) =>(
              <CustomLabel 
                key={`${id}-${option.value}`}
                className={`${className}-label`}>
                <input 
                  type="radio" 
                  className={className}
                  value={vale} 
                  onChange={onCLickHandle(value)}
                  checked={value === option.value} />
                {option.label}
              </CustomLabel>
            ))
            }
    </FormGroup>
  );
};

export default CustomRadioInput;