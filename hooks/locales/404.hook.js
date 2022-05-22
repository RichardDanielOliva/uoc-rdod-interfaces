import useTranslation from 'next-translate/useTranslation';

export const useLocale404Error = (props, functions) => {
    const { t } = useTranslation('404');
    return t('not_found_page',  { }, { returnObjects: true });
}
