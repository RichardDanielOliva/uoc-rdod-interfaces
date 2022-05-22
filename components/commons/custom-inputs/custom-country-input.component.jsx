import React from 'react';

import {
  FormGroup,
  CustomLabel,
  CustomCountryDropDown,
  CustomHelperText,
  CustomInputContainer,
} from './custom-inputs.styles';

const CustomCountryInput = ({
  value = '',
  label,
  id = 'custom-text-input',
  className = 'custom-text-input',
  onChangeMultiple,
  flexDirection = 'column',
  whitelist,
  helperText
}) => {
  return (
    <FormGroup flexDirection={flexDirection} className={`${className}-group`}>
      {label && <CustomLabel htmlFor={id} className={`${className}-label`}>{label}</CustomLabel>}
      <CustomInputContainer>
        <CustomCountryDropDown
          value={value}
          whitelist={whitelist}
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

export default CustomCountryInput;