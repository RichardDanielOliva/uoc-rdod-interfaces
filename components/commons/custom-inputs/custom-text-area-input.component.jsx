import React from 'react';

import {
  FormGroup,
  CustomLabel,
  CustomTextArea,
} from './custom-inputs.styles';

const CustomTextAreaInput = ({
    value='',
    label,
    id='custom-text-area-input',
    className='custom-text-area-input',
    onChange,
    disabled,
    flexDirection='column',
    rows='10',
}) => {
  return (  
    <FormGroup flexDirection={'column'} className={`${className}-group text-area`}>
        {label && <CustomLabel htmlFor={id} className={`${className}-label text-area`}>{label}</CustomLabel>}
        <CustomTextArea
            id={id}
            className={className}
            rows={rows}
            onChange={onChange}
            value={value}
            disabled={disabled}
        />
    </FormGroup>
  );
};

export default CustomTextAreaInput;