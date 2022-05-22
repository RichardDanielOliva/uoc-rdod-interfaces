import React, { useState } from 'react';

import {
  FormGroup,
  CustomLabel,
  CustomSelect,
} from './custom-inputs.styles';

const CustomSelectInput = ({
    value='',
    label,
    id='custom-text-input',
    className='custom-text-input',
    onChange,
    options,
    disabled,
    multiple=false,
    flexDirection='column'
}) => {
  return (  
    <FormGroup flexDirection={flexDirection} className={`${className}-group`}>
        {label && <CustomLabel htmlFor={id} className={`${className}-label`}>{label}</CustomLabel>}
        <CustomSelect
            id={id}
            className={className}
            onChange={onChange}
            value={value}
            multiple={multiple}
            disabled={disabled}
        >
          {options.map(({value, label}) =>
            <option key={`${className}-option-${value}`} value={value}>{label}</option>
          )}
        </CustomSelect>
    </FormGroup>
  );
};

export default CustomSelectInput;