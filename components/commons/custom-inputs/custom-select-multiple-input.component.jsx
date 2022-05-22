import React, { useState } from 'react';

import {
  FormGroup,
  CustomLabel,
  CustomSelectMultiple,
} from './custom-inputs.styles';

const onChangeHandle = (options, onChange) => (value, { action, removedValue }) => {
  switch (action) {
    case 'remove-value':
    case 'pop-value':
      if (removedValue.isFixed) {
        return;
      }
      break;
    case 'clear':
      value = options.filter(v => v.isFixed);
      break;
  }
  onChange(value);
}

const CustomSelectMultipleInput = ({
    value=[],
    label,
    id='custom-text-input',
    className='custom-text-input',
    onChangeMultiple,
    options,
    flexDirection='column'
}) => {
  return (  
    <FormGroup flexDirection={flexDirection} className={`${className}-group`}>
        {label && <CustomLabel htmlFor={id} className={`${className}-label`}>{label}</CustomLabel>}
        <CustomSelectMultiple
            id={id}
            isClearable={value.some(v => !v.isFixed)}
            className={className}
            onChange={onChangeHandle(options, onChangeMultiple)}
            value={value}
            options={options}
            styles={{ multiValueRemove: (base, state) => state.data.isFixed ? { ...base, display: 'none' } : base }}
            isMulti={true}
        />
    </FormGroup>
  );
};

export default CustomSelectMultipleInput;