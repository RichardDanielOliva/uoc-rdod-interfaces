import React from "react";

import {
  MenuContainer,
  MenuIconContainer,
  CustomButton,
  CustomMenuItem,
} from "./custom-menu.styles";
import { useState } from "react";
import { DownArrowIcon } from "../../../config/styles/icons-styles";

const CustomMenu = React.forwardRef(
  (
    {
      children,
      className,
      id,
      name,
      icon, // TODO
      style,
      enable = true,
    },
    ref
  ) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (enable) => (event) => {
      if (enable) setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <MenuContainer className={className} id={id}>
        <CustomButton enable={enable} onClick={handleClick(enable)}>
          {name}
          <MenuIconContainer>
            <DownArrowIcon />
          </MenuIconContainer>
        </CustomButton>
        <CustomMenuItem
          ref={ref}
          id={id}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onClick={()=>setAnchorEl(false)}
        >
          {children}
        </CustomMenuItem>
      </MenuContainer>
    );
  }
);
export default CustomMenu;
