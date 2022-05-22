import React, { useState, useEffect } from 'react';
import CustomSlideImages from '../custom-slide-images/custom-slide-images.component';
import { CustomErrorMessageWrapper } from './custom-inputs.helper';

import {
  FormGroup,
  CustomLabel,
  CustomInput,
  CustomSlideImageContainer
} from './custom-inputs.styles';

const CustomImagesInput = ({
    label,
    images,
    onLoadImage,
    id='custom-text-input',
    className='custom-text-input',
    flexDirection='column'
}) => {
    const [files, setFiles] = useState([])
    const [invalidImage, setInvalidImage] = useState(false)

    useEffect(() => {
        files.forEach(async file => {
            if(file.type === 'image/png' || file.type === 'image/jpeg'){
                let reader = new FileReader();

                reader.onload = function (e) {
                    images.push([e.target.result, file])
                    onLoadImage([...images])
                }
        
                await reader.readAsDataURL(file);
                setInvalidImage("")
            }else
                setInvalidImage("File type accepted: .png or .jpg")
        })
    }, [files]);

  return (  
    <CustomErrorMessageWrapper errorMessage={invalidImage}>
    <FormGroup flexDirection={flexDirection}>
        {label && <CustomLabel htmlFor={id} className={`${className}-label`}>{label}</CustomLabel>}
        <CustomInput
            id={id}
            className={`${className} custom-image-input`}
            type="file"
            accept="image/*"
            onChange={e => {
                setFiles([...e.target.files])
            }}
            multipleS
        />
          </FormGroup>
          {images && Boolean(images.length) && (
              <CustomSlideImageContainer>
                  <CustomSlideImages
                      images={images.map(image => image[0])}
                      removeImage={(removeIndex) => {
                            let nextImages = images.filter((image, index) => index !== removeIndex);
                            onLoadImage(nextImages);
                            if(nextImages.length < 1)
                                document.getElementsByClassName('custom-image-input')[0].value = '';
                      }} />
              </CustomSlideImageContainer>
          )}
      </CustomErrorMessageWrapper>
  );
};

export default CustomImagesInput;