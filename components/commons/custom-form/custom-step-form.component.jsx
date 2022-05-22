import React, { useState } from 'react';
import { useEffect } from 'react';
import { CELL_TYPE, GetCustomInput } from '../custom-inputs/custom-inputs.helper';

import {
  FormCard,
  CardHeader,
  TitleContainer,
  DescriptionContainer,
  CardFooter,
  CardBody,
  CustomButtonsContainer,
  MessageLinkContainer,
  CustomButton,
  CustomLink
} from './custom-form.style';

export const getDefaultFormData = (inputs) => {
  let data={}, images={};
  Object.keys(inputs).forEach((item) => {
    if(inputs[item].type === CELL_TYPE.IMAGES){
      images[item] = [];
    }else{
      data[item] = inputs[item].initialValue ? inputs[item].initialValue : '';
    }
  })

  return { data, images }
}

export const getRelatedValues = (formData, inputs, inputId, value='') => {
  return Object.keys(formData).reduce((relatedValueAcc, relatedInputId) => {
    if(inputs[relatedInputId].valueDepRef === inputId)
      relatedValueAcc[relatedInputId] = value;
    return relatedValueAcc
  }, {});
}

export const getInputValue = (event, input) => {
  if(input.type === CELL_TYPE.NUMBER && event.target.value !== ''){
    if(event.target.value < input.min) 
      return input.min
    else if(event.target.value > input.max)
      return input.max
    else 
      return input.isFloat ? event.target.value : parseInt(event.target.value)
  }else
    return event.target.value;
}

const CustomStepForm = ({ 
  id='custom-form', 
  className='custom-form',
  onSubmit,
  onValidate,
  onCustomChangeHandle,
  form,
  initialStepIndex=0,
  cancelButton,
  flexDirection
}) => {
  const [currentStep, setCurrentStep] = useState(initialStepIndex);
  const [formData, setFormData] = useState({});
  const [imagesData, setImagesData] = useState({});
  const inputs = form.inputs;

  useEffect(() => {
    let defaultFormData = getDefaultFormData(inputs)
    setCurrentStep(initialStepIndex)
    setFormData(defaultFormData.data);
    setImagesData(defaultFormData.images)
  }, [form])

  const [errorMessages, setErrorMessage] = useState({});
  let currentFormStep = form.steps[currentStep]
  let { footer: { button={}, messages=[] }, header } = currentFormStep;
    return (
      <FormCard className={className}>
        <CardHeader className={`${className}-header`}>
          {header && <>
            {header.title &&
              <TitleContainer>
                {header.title}
              </TitleContainer>}
            {header.description &&
              <DescriptionContainer>
                {header.description}
              </DescriptionContainer>}
          </>}
        </CardHeader>
        <CardBody>
          {
            currentFormStep.inputIds.map((inputId, index) => (
              <GetCustomInput
                {...inputs[inputId]}
                key={`${id}-${inputId}-${index}`}
                className={`${className}-input`}
                value={formData[inputId]}
                images={imagesData[inputId]}
                errorMessage={errorMessages[inputId]}
                valueDepRef={inputs[inputId].valueDepRef ? formData[inputs[inputId].valueDepRef]: ''}
                onChangeMultiple={(value) => setFormData({
                  ...formData,
                  ...getRelatedValues(formData, inputs, inputId),
                  [inputId]: value,
                })}
                onChange={(event) => {
                    let value = getInputValue(event, inputs[inputId]);
                    if(onCustomChangeHandle)
                      onCustomChangeHandle(value, inputId, formData, setFormData)
                    else
                    setFormData({
                      ...formData,
                      ...getRelatedValues(formData, inputs, inputId),
                      [inputId]: value,
                    })
                  }
                }
                onLoadImage={(images) => setImagesData({
                  ...imagesData,
                  [inputId]: images
                })}
                flexDirection={flexDirection}
              />
            ))
          }
        </CardBody>
        <CardFooter>
          <CustomButtonsContainer className={`${className}-footer-buttons`}>
            {currentStep > 0 &&
              <CustomButton
                className={`${className}-footer-button`}
                onClick={() => setCurrentStep(currentStep - 1)}>
                {'Step back' /** TODO */}
              </CustomButton>}
            {
              currentStep === 0 && cancelButton &&
              <CustomButton
                className={`${className}-footer-button`}
                onClick={cancelButton.onClick}>
                {cancelButton.name}
              </CustomButton>
            }
            <CustomButton
              className={`${className}-footer-button`}
              onClick={() => {
                let [isValid, error] = onValidate(inputs, currentFormStep.inputIds, formData)
                if (isValid) {
                  if(currentStep + 1 === form.steps.length) onSubmit(formData, imagesData)
                  else setCurrentStep(currentStep + 1)
                  setErrorMessage({})
                }
                else setErrorMessage(error)
              }}>
              {button.name}
            </CustomButton>
          </CustomButtonsContainer>
          {
            messages.map(({ text, link }) => (
              <MessageLinkContainer key={`${id}-footer-message-${text}`} className={`${className}-footer-message-link`}>
                {text}
                <div href={link.url}  className={`${className}-footer-link`}>{link.name}</div>
              </MessageLinkContainer>
            ))
          }
        </CardFooter>
      </FormCard>
  );
};

export default CustomStepForm;