import styled, { css } from 'styled-components'
import { theme, mixins, media, Section } from '@styles'
const { flat, fontSizes, fonts } = theme
const { flexCenter, inlineLink, bigButton } = mixins

const titleStyles = css`
  h2 {
    font-size: 68px;
    line-height: 1;
    margin: 0;
    font-weight: 500;
    ${media.desktop`font-size: 68px;`};
    ${media.tablet`font-size: 56px;`};
    ${media.phablet`font-size: 50px;`};
    ${media.phone`font-size: 46px;`};
  }
`

const subTitleStyles = css`
  h3 {
    font-size: 56px;
    line-height: 1;
    margin: 0 0;
    letter-spacing: -0.048rem;
    font-weight: 500;
    ${media.desktop`font-size: 52px;`};
    ${media.tablet`font-size: 48px;`};
    ${media.phablet`font-size: 44px;`};
    ${media.phone`font-size: 40px;`};
  }
`

export const StyledContainer = styled(Section)`
  ${flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
  ${titleStyles};
  ${subTitleStyles};
`

export const StyledOverline = styled.h1`
  color: ${flat.dark.paragraph};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.lg};
  line-height: 1.2;
  letter-spacing: -0.022rem;
  /* font-family: ${fonts.SFMono}; */
  font-weight: 500;
  text-transform: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`

export const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${inlineLink};
  }
`

export const StyledEmailLink = styled.a`
  ${bigButton};
  margin-top: 50px;
`

export const StyledTitle = styled.h2`
  ${titleStyles};
  color: ${flat.dark.paragraph};
`

export const StyledSubtitle = styled.h3`
  ${subTitleStyles};
  color: ${flat.dark.paragraph};
`
