import React, { useState } from 'react';

import {
  FormGroup,
  CustomLabel,
  CustomInputContainer,
  CustomHelperText,
  CustomInput,
} from './custom-inputs.styles';

const CustomTextInput = ({
    value='',
    label,
    helperText,
    id='custom-text-input',
    className='custom-text-input',
    type='text',
    placeholder='',
    onChange,
    onBlur,
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
              type={type}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
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

export default CustomTextInput;