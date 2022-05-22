import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NAVIGATION_ITEMS } from '../../../config/constants';
import { AlignIcon, UserCircleCloseIcon } from '../../../config/styles/icons-styles';

import { 
  NavigationItem,
  NavigationIconItem
 } from './navigation-item.component';
import {
  NavigationContainer,
  NavigationContentContainer,
  NavigationSectionContainer,
  NavigationIconLink,
  CompanyIconContainer,
  NavigationItemsContainer,
  NavigationToggleItemsContainer,
  NavigationHideItemsContainer,
  ButtonsContainer,
  ToggleButton,
  CompanyText,
  RegisterdTrademark
} from './navigation.style';

const Navigation = () => {
  const router = useRouter();
  const className = router.pathname === '/examples' ? 'full-width' : ''
  const [ isToggle, setIsToggle] = useState(true);
  useEffect(() => { setIsToggle(true)}, [router])
  return (
    <NavigationContainer className={'navigation'}>
      <NavigationContentContainer className={className}>
        <NavigationSectionContainer >
          <ButtonsContainer>
            <ToggleButton onClick={() => setIsToggle(!isToggle)}>
              <AlignIcon />
            </ToggleButton>
            <NavigationIconLink href={'/'}>          
              <CompanyIconContainer>
              </CompanyIconContainer>
              <CompanyText>
                RDOD tickets <RegisterdTrademark>&reg;</RegisterdTrademark>
              </CompanyText>
            </NavigationIconLink>
            
          </ButtonsContainer>

          <NavigationItemsContainer >
            {NAVIGATION_ITEMS.map(({ id, ...props }) => {
              return (
                <NavigationItem
                  key={`navigation-item-${id}`}
                  actualLocation={router.pathname}
                  {...props} />
              )
            })}
          </NavigationItemsContainer>
        </NavigationSectionContainer>
        <NavigationSectionContainer>
          <NavigationToggleItemsContainer isToggle={isToggle.toString()}>
            <NavigationIconItem
              url={'/'}
              actualLocation={router.pathname}
              name={'Sign in'}>
              <UserCircleCloseIcon /> 
            </NavigationIconItem>
            <NavigationHideItemsContainer>
            {NAVIGATION_ITEMS.map(({ id, ...props }) => {
              return (
                <NavigationItem
                  key={`navigation-item-${id}`}
                  actualLocation={router.pathname}
                  {...props} />
              )
            })}   
          </NavigationHideItemsContainer>
          </NavigationToggleItemsContainer>
        </NavigationSectionContainer>
        </NavigationContentContainer>
    </NavigationContainer>
  );
};

export default Navigation;