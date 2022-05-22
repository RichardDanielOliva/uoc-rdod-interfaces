import React from "react";

import {
  CustomLinkItemContainer,
  CustomLinkButtonItemContainer,
} from "./custom-menu.styles";

export const CustomLinkItem = React.forwardRef(({ name, url, actualLocation }, ref) => {
  return (
    <CustomLinkItemContainer ref={ref} href={url} isSelected={url === actualLocation}>
      {name}
    </CustomLinkItemContainer>
  );}
);

export const CustomLinkButtonItem = React.forwardRef(({ name, handleOnClick }, ref) => {
  return (
    <CustomLinkButtonItemContainer ref={ref} onClick={handleOnClick}>
      {name}
    </CustomLinkButtonItemContainer>
  );}
);