import React from 'react';
import PropTypes from 'prop-types';
import { navLinks } from '@config';
import {
  StyledContainer,
  Sidebar,
  NavLinks,
  NavList,
  NavLink,
  NavItem,
  Resume,
} from './menu.styles';

const Menu = ({ menuOpen, toggleMenu }) => {
  const onMenuClick = e => {
    const { target } = e;
    const isLink = target.hasAttribute('href');
    const isNotMenu = target.classList && target.classList[0].includes('StyledContainer');

    if (isLink || isNotMenu) toggleMenu();
  };

  return (
    <StyledContainer
      menuOpen={menuOpen}
      onClick={onMenuClick}
      aria-hidden={!menuOpen}
      aria-expanded={menuOpen}
      tabIndex={menuOpen ? 1 : -1}>
      <Sidebar>
        <NavLinks>
          <NavList>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <NavItem key={i}>
                  <NavLink to={url}>{name}</NavLink>
                </NavItem>
              ))}
          </NavList>
          <Resume href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
            Resume
          </Resume>
        </NavLinks>
      </Sidebar>
    </StyledContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
