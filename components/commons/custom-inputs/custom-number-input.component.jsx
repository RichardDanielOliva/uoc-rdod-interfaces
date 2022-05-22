import React, { useState } from 'react';
import { CELL_TYPE } from './custom-inputs.helper';

import {
  FormGroup,
  CustomLabel,
  CustomInputContainer,
  CustomHelperText,
  CustomInput,
} from './custom-inputs.styles';

const CustomNumberInput = ({
    value=0,
    min=0,
    max=100,
    step=0.1,
    label,
    helperText,
    id='custom-number-input',
    className='custom-number-input',
    placeholder='',
    onChange,
    disabled,
    flexDirection='column'
}) => {
  if(value === null) value=''
  return (  
    <FormGroup flexDirection={flexDirection} 
      className={`${className}-group`}>
        {label && <CustomLabel htmlFor={id} className={`${className}-label`}>{label}</CustomLabel>}
        <CustomInputContainer>
          <CustomInput
              id={id}
              className={className}
              type={CELL_TYPE.NUMBER}
              onChange={onChange}
              value={value}
              min={min}
              max={max}
              step={step}
              placeholder={placeholder}
              disabled={disabled}
          />
          {helperText && 
            <CustomHelperText 
              className={`${className}-helper-text`}>
                {helperText}
            </CustomHelperText>}
        </CustomInputContainer>
    </FormGroup>
  );
};

export default CustomNumberInput;