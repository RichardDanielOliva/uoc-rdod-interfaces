import React from 'react';

import {
    NavigationItemContainer, 
    NavigationIconItemContainer,
    NavigationIconContainer,
    IconDescriptionContainer
} from './navigation.style';

export const NavigationItem = ({name, url, actualLocation, className}) => {    
    return (
        <NavigationItemContainer
            className={className}
            href={url}
            //isSelected={url===actualLocation}
            > 
            {name}
        </NavigationItemContainer>
    )
};

export const NavigationIconItem = React.forwardRef(
    ({ children, id, className, name, actualLocation, url }, ref) => {
        return (
            <NavigationIconItemContainer
                ref={ref}
                href={url}
                isSelected={url === actualLocation}
                id={id}
                className={className}
                aria-label={`navigation-item-menu-${id}`}
            >
                <NavigationIconContainer className={`${className}-icon`}>
                    {children}
                </NavigationIconContainer>
                <IconDescriptionContainer className={`${className}-text`}>
                    {name}
                </IconDescriptionContainer>
            </NavigationIconItemContainer>
        );
    },
);