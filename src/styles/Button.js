import styled from 'styled-components';
import theme from './theme';
const { fontSizes, fonts, flat } = theme;

const Button = styled.button`
  color: ${flat.dark.button};
  background-color: transparent;
  border: 1px solid ${flat.dark.button};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smish};
  font-family: ${fonts.Montserrat};
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${flat.dark.button};
    color: ${flat.dark.buttonText};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
