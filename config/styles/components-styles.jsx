import styled, { css } from 'styled-components';
import Link from 'next/link';
import { greencompany, blueLightcompany, redCompany, buttonDGPanelColor, greyTransparent, lightGrey } from './common-styles';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core';

export const StyledLink = ({ as, children, className, href }) => (
  <Link href={href !== null && href !== undefined ? href : ''} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

const OutlineWhite = css`
  color: white;
  border: 1.5px solid white;
  background-color: rgba(255,255,255,0);
  &:hover {
    background-color: rgba(255,255,255,0.3);
  }
`;

const OutlineDarkBlue = css`
  color: ${redCompany};
  border: 2px solid ${redCompany};
  background-color: rgba(255,255,255,0);
  &:hover {
    color: ${blueLightcompany};
    border-color: ${blueLightcompany};
  }
`;


export const DefaultCustomLinkStyle = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  text-decoration-style: none;
  text-decoration: none;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;
  padding: 4px 16px 6px 15px;

  &.tkrisk-additional-resources {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: left;
    text-decoration-style: none;
    text-decoration: none;
    cursor: pointer;
    text-align: left;
    font-weight: 600;
    color: ${redCompany};
    &:hover {
      text-decoration: solid underline ${redCompany} 2px;
    }
  }

  &.company {
    color: white;
    background-color: ${redCompany};
    &:hover {
      background-color: ${greencompany};
    }
  }
  &.green {
    color: white;
    background-color: ${greencompany};
    &:hover {
      background-color: ${redCompany};
    }
  }
  &.white {
    color: ${redCompany};
    background-color: white;
    &:hover {
      color: white;
      background-color: ${greencompany};
    }
  }

  &.home {
    padding: 3px 10px 5px 10px;
    
    
    @media only screen and (max-width: 690px) {
      ${OutlineWhite};
    }
  }

  &.dark-blue {
    color: white;
    background-color: ${redCompany};
    &:hover {
      background-color: ${greencompany};
    }
  }

  &.simple-black {
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }

  &.outline-white {
    ${OutlineWhite};
  }

  &.outline-dark-blue {
    ${OutlineDarkBlue}
  }

  &.white-title-link {
    color: white;
    background-color: rgba(255,255,255,0);
    text-align: left;
    padding: 8px 0px;
  }

  &.simple-dark-blue {
    color: ${redCompany};
    background-color: rgba(255,255,255,0);
    &:hover {
      text-decoration: solid underline ${redCompany} 2px;
    }
  }

  &.simple-white {
    color: white;
    &:hover {
      text-decoration: solid underline white 2px;
    }
  }

  &.simple-light-blue {
    text-align: flex-start;
    color: ${blueLightcompany};
    background-color: rgba(255,255,255,0);
    &:hover {
      text-decoration: solid underline ${redCompany} 2px;
      color: ${redCompany};
    }
  }

  &.bold {
    font-weight: 500;
  }

  &.small {
    font-size: 0.9em;
  }

  &.expand-w{
    width: 100%;
  }

  &.row{
    flex-direction: row;
  }
`;

export const CustomLink = styled(StyledLink)`
  ${DefaultCustomLinkStyle}
`;

export const CustomHeaderLink = styled(StyledLink)`
  ${DefaultCustomLinkStyle}
  padding: 5px 36px 7px 36px;
  margin-top: 5px;
  margin-right: 10px;
  border: solid ${buttonDGPanelColor} 1px;
`;

export const CustomALink = styled.a`
  ${DefaultCustomLinkStyle}
`;

export const CustomSelect = withStyles((theme) => ({
  root: {
    width: '2em',
    height: '1em',
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    color: greyTransparent,
    padding: '0.05em',
    height: '1em',
    width: '1em',
    fontSize: '1em',
    '&$checked': {
      transform: 'translateX(1em)',
      color:  'white',
      '& + $track': {
        opacity: 1,
        backgroundColor: redCompany,
        borderColor: redCompany,
      },
    },
  },
  thumb: {
    width: '0.9em',
    height: '0.9em',
    boxShadow: 'none'
  },
  track: {
    border: `1px solid ${redCompany}`,
    borderRadius: '0.5em',
    opacity: 1,
    backgroundColor: blueLightcompany,
  },
  checked: {},
}))(Switch);