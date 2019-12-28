import styled from 'styled-components'
import { Link } from 'gatsby'
import { theme, mixins, media } from '@styles'
const {
  flat,
  fontSizes,
  fonts,
  transition,
  navHeight,
  navScrollHeight,
  hamburgerWidth,
  hamBefore,
  hamAfter,
  hamBeforeActive,
  hamAfterActive,
  borderRadius,
} = theme
const { flexBetween, flexCenter } = mixins

export const StyledContainer = styled.header`
  ${flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${flat.dark.background};
  transition: ${transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props =>
    props.scrollDirection === 'none' ? navHeight : navScrollHeight};
  box-shadow: ${props =>
    props.scrollDirection === 'up'
      ? `0 8px 16px -10px ${flat.dark.headerShadow}`
      : 'none'};
  transform: translateY(
    ${props =>
      props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px'}
  );
  border-bottom: ${props =>
    props.scrollDirection === 'up' ? `1px solid ${flat.dark.headerBorder}` : 'none'};
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`

export const StyledNav = styled.nav`
  ${flexBetween};
  align-items: stretch;
  position: relative;
  width: 100%;
  color: ${flat.dark.paragraph};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
  box-sizing: border-box;
`

export const StyledLogo = styled.div`
  ${flexCenter};
  a {
    display: block;
    color: ${flat.dark.link} !important;
    width: 72px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: ${flat.dark.transLink};
      }
    }
    svg {
      color: ${flat.dark.link} !important;
      transition: ${transition};
      user-select: none;
      stroke: ${flat.dark.link};
    }
  }
`

export const StyledHamburger = styled.div`
  ${flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`

export const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${hamburgerWidth}px;
  height: 24px;
`

export const StyledHamburgerInner = styled.div`
  background-color: ${flat.dark.link};
  position: absolute;
  width: ${hamburgerWidth}px;
  height: 2px;
  border-radius: ${borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${flat.dark.link};
    position: absolute;
    left: auto;
    right: 0;
    width: ${hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? hamBeforeActive : hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? hamAfterActive : hamAfter)};
  }
`

export const StyledLink = styled.div`
  display: flex;
  align-items: stretch;
  ${media.tablet`display: none;`};
`

export const StyledList = styled.ol`
  ${flexBetween};
`

export const StyledListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.smish};
  counter-increment: item 1;
  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${flat.dark.link};
    font-size: ${fontSizes.xs};
  }
`

export const StyledListLink = styled(Link)`
  padding: 12px 10px;
`

export const StyledButtonContainer = styled.div`
  display: inline-flex;
  align-items: stretch;
  transition-delay: ${props => (props.delay ? props.delay : '100ms')};
`

// export const StyledResumeButton = styled.a`
//   ${smallButton};
//   margin-left: 10px;
//   font-size: ${fontSizes.smish};
// `;

// export const StyledRipple = styled.span`
//   ${ripple};
// `;

// export const StyledResume = styled.a`
//   ${rippleButton};
// `;
