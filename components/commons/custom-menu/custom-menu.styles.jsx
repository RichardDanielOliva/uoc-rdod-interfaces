import styled, { css } from 'styled-components';
import Menu from '@material-ui/core/Menu';
import { DefaultLinkStyle } from '../../../config/styles/common-styles';
import { StyledLink } from '../../../config/styles/components-styles';

export const MenuContainer = styled.div`
    & .profile-nav-dropdown {color:red}
`

export const MenuIconContainer = styled.div`
    margin-left: 5px;
    margin-top: 3px;
    height: 18px;
    width: 18px;
`

export const CustomButton = styled.button`
    ${DefaultLinkStyle}
    font-size: 13px;
    ${props => props.enable && css`
    &:hover{
        text-decoration:none; 
        cursor:pointer;  
    }
    `}
`

export const CustomMenuItem = styled(Menu)`
    & .MuiMenu-paper {
        top: 100px !important;
    }
    & .MuiList-padding {
        padding: 0px 6px;
    }
`

export const CustomLinkItemContainer = styled(StyledLink)`
    ${DefaultLinkStyle};
    font-size: 13px;
`;


export const CustomLinkButtonItemContainer = styled.button`
    ${DefaultLinkStyle};
    font-size: 13px;
`;