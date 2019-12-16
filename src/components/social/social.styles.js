import styled from 'styled-components';
import { theme, media } from '@styles';
const { flat } = theme;

export const StyledContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  color: ${flat.dark.headline};
  ${media.desktop`left: 25px;`};
  ${media.tablet`display: none;`};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${flat.dark.headline};
  }
`;

export const StyledItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled.a`
  padding: 10px;
  color: ${flat.dark.link};

  &:hover,
  &:focus,
  &:active {
    transform: translateY(-3px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
