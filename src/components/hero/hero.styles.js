import styled, { css } from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
const { flat, fontSizes, fonts } = theme;

export const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;

export const StyledOverline = styled.h1`
  color: ${flat.dark.stroke};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;

const titleStyles = css`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;

export const StyledTitle = styled.h2`
  ${titleStyles};
  color: ${flat.dark.paragraph};
`;

export const StyledSubtitle = styled.h3`
  ${titleStyles};
  color: ${flat.dark.headline};
`;

export const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;

export const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;
