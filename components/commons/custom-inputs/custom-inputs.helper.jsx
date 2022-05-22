import CustomTextAreaInput from "./custom-text-area-input.component";
import CustomSelectInput from "./custom-select-input.component";
import CustomTextInput from "./custom-text-input.component";

import { ErrorLabelContainer } from './custom-inputs.styles';
import CustomImagesInput from "./custom-images-input.component";
import CustomSelectMultipleInput from "./custom-select-multiple-input.component";
import CustomCountryInput from "./custom-country-input.component";
import CustomRegionInput from "./custom-region-input.component";
import CustomPhoneComponent from "./custom-phone-input.component";
import CustomNumberInput from "./custom-number-input.component";

export const CELL_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  EMAIL: 'email',
  PASSWORD: 'password',
  SELECT: 'select',
  RADIO: 'radio',
  TEXT_AREA: 'textArea',
  IMAGES: 'images',
  COUNTRY: 'country',
  REGION: 'region',
  PHONE: 'phone',
  POSTAL_CODE: 'postal_code'
}

export const CustomErrorMessageWrapper = ({ children, errorMessage }) => {
  return (errorMessage ?
    <>
      {children}
      <ErrorLabelContainer >
        {errorMessage}
      </ErrorLabelContainer>
    </>
    : <> {children} </>)

}

export const GetCustomInput = ({
    type = CELL_TYPE.TEXT,
    isMultiple,
    errorMessage,
    valueDepRef,
    ...props
  }) => {
    switch (type) {
      case CELL_TYPE.SELECT:
        if(isMultiple)
          return <CustomSelectMultipleInput {...props} />
        else
          return <CustomSelectInput {...props} />
      case CELL_TYPE.TEXT_AREA:
        return <CustomErrorMessageWrapper errorMessage={errorMessage}>
          <CustomTextAreaInput {...props} />
        </CustomErrorMessageWrapper>
      case CELL_TYPE.TEXT:
      case CELL_TYPE.EMAIL:
      case CELL_TYPE.PASSWORD:
        return <CustomErrorMessageWrapper errorMessage={errorMessage}>
          <CustomTextInput {...props} type={type}/>
        </CustomErrorMessageWrapper>
      case CELL_TYPE.POSTAL_CODE:
        return <CustomErrorMessageWrapper errorMessage={errorMessage}>
          <CustomTextInput {...props} type={CELL_TYPE.TEXT} />
        </CustomErrorMessageWrapper>
      case CELL_TYPE.IMAGES:
        return <CustomImagesInput {...props} />
      case CELL_TYPE.COUNTRY:
        return <CustomErrorMessageWrapper errorMessage={errorMessage}>
          <CustomCountryInput {...props} />
        </CustomErrorMessageWrapper>  
      case CELL_TYPE.REGION:
        return <CustomErrorMessageWrapper errorMessage={errorMessage}>
          <CustomRegionInput {...props} country={valueDepRef}/>
        </CustomErrorMessageWrapper>
      case CELL_TYPE.PHONE:
        return <CustomErrorMessageWrapper errorMessage={errorMessage}>
          <CustomPhoneComponent {...props} country={valueDepRef}/>
        </CustomErrorMessageWrapper>
      case CELL_TYPE.NUMBER:
        return <CustomErrorMessageWrapper errorMessage={errorMessage}>
          <CustomNumberInput {...props} country={valueDepRef}/>
        </CustomErrorMessageWrapper>
      default:
        return <CustomErrorMessageWrapper errorMessage={errorMessage}>
        <CustomTextInput {...props} type={type}/>
      </CustomErrorMessageWrapper>
    }
  };
  
  