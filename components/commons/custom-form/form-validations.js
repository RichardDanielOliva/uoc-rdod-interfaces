import { CountryRegionData } from "react-country-region-selector";
import { isValidPhoneNumber } from "react-phone-number-input";
import { CELL_TYPE } from "../custom-inputs/custom-inputs.helper";

export const invalidRequired = (input, value) => {
    return ['', null, undefined].includes(value) && input.required;
}

export const invalidEmail = (value) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

export const invalidPhone = (value) => {
  return !isValidPhoneNumber(value);
}

export const invalidPostalCode = (countryName, value) => {
  const postalCodes = require('postal-codes-js');
  let country = CountryRegionData.find(countryData => countryData[0] === countryName);
  
  if(country)
    country = country[1];

  return postalCodes.validate(country, value) !== true;
}

export const onGenericValidate = (inputs, currentInputs, formData) => {
    let errorMessages = {};
    currentInputs.forEach((inputId) => {
        if(invalidRequired(inputs[inputId], formData[inputId]))
            errorMessages[inputId] = `This field is required`;
        else if(inputs[inputId].type === CELL_TYPE.EMAIL && invalidEmail(formData[inputId]))
            errorMessages[inputId] = `Invalid email address`;
        else if(inputs[inputId].type === CELL_TYPE.PHONE && invalidPhone(formData[inputId]))
          errorMessages[inputId] = `Invalid phone number`;
        else if(inputs[inputId].type === CELL_TYPE.POSTAL_CODE &&
          invalidPostalCode(formData.country, formData[inputId])){
            errorMessages[inputId] = `Invalid postal code number`;
        }

    })

    return [Object.keys(errorMessages).length === 0, errorMessages]
}

export const populateUserValues = (form, user, userInputs) => {
    const formValues = JSON.parse(JSON.stringify(form));
  
    if(user){
      Object.entries(userInputs)
        .filter(([inputId, inputOptions]) =>  formValues.inputs[inputId] !== undefined )
        .forEach(([inputId, inputOptions]) => {
        formValues.inputs[inputId] = {
          ...formValues.inputs[inputId],
          ...inputOptions,
          disabled: inputOptions.disabled && ![null, undefined, ''].includes(user[inputId])
        }
        if(user[inputId]) formValues.inputs[inputId].initialValue = user[inputId]
      } )
    }

    return formValues;
}