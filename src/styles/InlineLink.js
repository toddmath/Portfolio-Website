import styled from 'styled-components';
import theme from './theme';
const { flat } = theme;

const InlineLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${theme.transition};
  cursor: pointer;
  color: ${flat.dark.tertiary};
  &:hover,
  &:focus,
  &:active {
    color: ${flat.dark.tertiary};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${flat.dark.tertiary};
    transition: ${theme.transition};
  }
`;

export default InlineLink;
