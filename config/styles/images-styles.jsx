import styled, { css }  from 'styled-components';
import Image from 'next/image';
import { redCompany, cH1 } from './common-styles';

export const getImage = (id, props) => {
    return <img {...props} src={`https://websiteprodstoragene.blob.core.windows.net/images/${id}.webp`} alt={id} />
  }

export const getImageById = (id) => {
    switch (id) {
        case 'tkrisk':
            return <CustomImage src={'https://websiteprodstoragene.blob.core.windows.net/images/tkrisk.webp'} alt={'resource image'}/>
        case 'resource-image':
            return <CustomImage src={'https://websiteprodstoragene.blob.core.windows.net/images/tkrisk-card-background.webp'} alt={'resource image'}/>
        default:
            return <CustomImage src={'https://websiteprodstoragene.blob.core.windows.net/images/tkrisk-card-background.webp'} alt={''}/>
    }
}

export const getSolutionsImageById = (id, width, height) => {
    return <CustomSizeImage src={`https://websiteprodstoragene.blob.core.windows.net/images/${id}.webp`} alt={id} width={width} height={height}/>
}

export const getResourcesImageById = (url) => {
    return <CustomImage src={url} alt={url} />    
}

export const getDefaultProfileImage = ({firstName, lastName, email}) => {
    let name = firstName && lastName ? 
        `${firstName.substring(0, 1)}${lastName.substring(0, 1)}`.toUpperCase() : 
        `${email.substring(0, 1)}`.toUpperCase()
    return (
        <CustomDefaultImage className={'default-profile-image'}>
            {name}
        </CustomDefaultImage>
    )
}

export const CustomDefaultImage = styled.div`
  height: 100%;
  width: 100%;
  font-size: 15px;
  background-color: ${redCompany};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const CustomImageHelper = styled.div`
    ${props => props.width && css`
        & span {
            width: ${props.width}px !important;
            height: ${props.height}px !important;
        }
    `}
    width: 100%;
    position: relative;
    & img {
        position: relative !important;
        height: unset !important;
    }
    & span {
        position: relative !important;
    }
`;

const myLoader = ({ src, width, quality }) => src;

export const CustomSizeImage = styled((props) => (
<CustomImageHelper width={props.width} height={props.height} position="relative">
    <Image layout="fill" objectFit="cover" alt={props.alt} src={props.src} loader={myLoader} unoptimized={true}/>
    </CustomImageHelper>
))``;

export const CustomImage = styled((props) => (
<CustomImageHelper>
    <Image layout="fill" objectFit="cover" alt={props.alt} loader={myLoader}  unoptimized={true}
    {...props} />
    </CustomImageHelper>
))``;

export const CustomBackgroundImage = styled((props) => (
    <Image layout="fill" objectFit="cover" priority={true} alt={props.alt} quality={100} loader={myLoader} unoptimized={true}
     {...props} />
  ))`
  position: fixed;
  overflow: hidden;
  z-index: -10;
  opacity: ${props => props.opacity};
  @media only screen and (min-width: 891px) {
    mask-image: ${props => props.gradient};
  }
`;

export const CustomIconImage = (props) => (
    <Image layout={'fill'} objectFit="contain" alt={props.alt}  {...props}/>
  );
