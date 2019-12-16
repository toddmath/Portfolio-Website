import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { flat, fontSizes } = theme;

export const StyledContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
`;

export const StyledHeading = styled(Heading)`
  color: ${flat.dark.headline};
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;

  &:before {
    font-size: ${fontSizes.xl};
    ${media.tablet`font-size: ${fontSizes.lg};`};
  }

  &:after {
    width: 100%;
  }
`;

// const Heading = styled.h3`
//   position: relative;
//   display: flex;
//   align-items: center;
//   margin: 10px 0 40px;
//   width: 100%;
//   white-space: nowrap;
//   font-size: ${fontSizes.h3};
//   ${media.tablet`font-size: 24px;`};
//   color: ${flat.dark.headline};

//   &:before {
//     counter-increment: section;
//     content: '0' counter(section) '.';
//     margin-right: 10px;
//     font-family: ${fonts.SFMono};
//     font-weight: normal;
//     color: ${flat.dark.tertiary};
//     font-size: ${fontSizes.xl};
//     position: relative;
//     bottom: 4px;
//     ${media.tablet`font-size: ${fontSizes.lg};`};
//   }

//   &:after {
//     content: '';
//     display: block;
//     height: 1px;
//     width: 300px;
//     background-color: ${flat.dark.tertiary};
//     position: relative;
//     top: -5px;
//     margin-left: 20px;
//     ${media.desktop`width: 200px`};
//     ${media.tablet`width: 100%;`};
//     ${media.thone`margin-left: 10px;`};
//   }
// `;

export const StyledTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  color: ${flat.dark.headline};
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;

export const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;

  &:hover,
  &:focus,
  &:active {
    color: ${flat.dark.background};
  }
`;
