import useTranslation from 'next-translate/useTranslation';
import { SECTIONS } from '../../config/resources';

export const useLocaleHomeDescription = (props, functions) => {
    const { t } = useTranslation('home');
    return t('description',  { }, { returnObjects: true });
}

export const useLocaleHomeTrial = (props, functions) => {
    const { t } = useTranslation('home');
    return t('trial',  { }, { returnObjects: true });
}

export const useLocaleHomeProduct = (props, functions) => {
    const { t } = useTranslation('home');
    return t('products',  {}, { returnObjects: true });
}

export const useLocaleHomeResourcesPreview = (props, functions) => {
    const { t } = useTranslation('home');
    const RESOURCES_PREVIEW = t('resources_preview',  {}, { returnObjects: true });
    RESOURCES_PREVIEW.resources = SECTIONS
    return RESOURCES_PREVIEW;
}