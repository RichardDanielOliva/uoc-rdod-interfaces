import styled, { css } from 'styled-components';
import Select from 'react-select';
import PhoneInput from 'react-phone-number-input';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { blueTransparent, cH2, cH3, footerBackground, LightRed } from '../../../config/styles/common-styles';
export const FormGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${props => props.flexDirection};
  margin: 5px 0;

  flex-direction: columns !important;
  
  &.text-area {
    flex-direction: column !important;
  }
`;

export const CustomSlideImageContainer = styled.div`
  height: 150px;
  max-width: 100%;
`;

export const CustomLabel = styled.label`
  ${cH3};
  width: 100%;
  white-space: nowrap;
  font-size: 0.9em !important;
  margin-right: 15px;
  margin-bottom: 6px;
  width: auto;
  
  &.text-area {
    align-self: flex-start !important;
    margin-bottom: 5px;
    white-space: break-spaces;
  }
  &.checkout-form-input-label {
    color: black;
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  border: 1px solid rgba(150,150,150, 1);
  border-radius: 4px;
  padding: 4px;
  
  ${props => props.disabled && css`
    background-color: ${footerBackground} !important;
  `}
`;

export const CustomSelect = styled.select`
  width: 100%;
  border: 1px solid rgba(150,150,150, 1);
  border-radius: 4px;
  padding: 4px;
  margin-bottom: 10px;
`;

export const CustomSelectMultiple = styled(Select)`
  width: 100%;
  border: 1px solid rgba(150,150,150, 1);
  border-radius: 4px;
  padding: 4px;
  margin-bottom: 10px;
`;

export const CustomTextArea = styled.textarea`
  width: 100%;
  border: 1px solid rgba(150,150,150, 1);
  border-radius: 4px;
  padding: 4px;
  margin-bottom: 10px;
`;


export const ErrorLabelContainer = styled.div`
  background-color: ${LightRed};
  border: 1px solid #ce0000;
  width: 100%;
  padding: 5px 10px;
  position: relative;
  border-radius: 5px;
  z-index: 99;
`

export const CustomHelperText = styled.small`
  width: 100%;
  margin-top: 2px;
`;

export const CustomInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CustomCountryDropDown = styled(CountryDropdown)`
  width: 100%;
  border: 1px solid rgba(150,150,150, 1);
  border-radius: 4px;
  padding: 4px;
`;

export const CustomRegionDropDown = styled(RegionDropdown)`
  width: 100%;
  border: 1px solid rgba(150,150,150, 1);
  border-radius: 4px;
  padding: 4px;
`;

export const CustomPhoneInput = styled(PhoneInput)`
  width: 100%;
  border-radius: 4px;
  display: flex;
  
`;