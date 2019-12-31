import styled, { css } from 'styled-components'
import { theme, media } from '@styles'

const { flat } = theme

export const StyledTextWrapper = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  min-height: 20vh;
  padding: 0 1rem;
  background-color: ${flat.dark.link};
`

export const StyledTextContainer = styled.div`
  position: relative;
  cursor: default;
  user-select: none;
  --maskX: 0;
  --maskY: 0;
  transition: all 200ms ease-in-out;
  /* height: 100vh; */
  /* width: 100vw; */
`

const textTitleStyles = css`
  font-size: 68px;
  line-height: 1;
  margin: 0;
  font-weight: 500;
  ${media.desktop`font-size: 68px;`};
  ${media.tablet`font-size: 56px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 46px;`};
`

const textSubtitleStyles = css`
  font-size: 56px;
  line-height: 1;
  margin: 0 0;
  letter-spacing: -0.048rem;
  font-weight: 500;
  ${media.desktop`font-size: 52px;`};
  ${media.tablet`font-size: 48px;`};
  ${media.phablet`font-size: 44px;`};
  ${media.phone`font-size: 40px;`};
`

export const StyledTextTitleContent = styled.h2`
  ${textTitleStyles};
  color: ${props => (props.color ? props.color : flat.dark.paragraph)};
`

export const StyledTextSubtitleContent = styled.h3`
  ${textSubtitleStyles};
  height: 100%;
  width: 100%;
  color: ${props => (props.color ? props.color : flat.dark.paragraph)};
`

export const StyledTextTitleContentClone = styled.h2`
  ${textTitleStyles};
  color: ${props => (props.color ? props.color : flat.dark.button)};
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  clip-path: polygon(
    0 0,
    calc(var(--maskX) * 1.2% + (var(--maskY) - 50) * 0.4%) 0,
    calc(var(--maskX) * 0.52% + (var(--maskY) - 50) * -0.4%) 100%,
    0 100%
  );
`

export const StyledTextSubtitleContentClone = styled.h3`
  ${textSubtitleStyles};
  color: ${props => (props.color ? props.color : flat.dark.button)};
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  line-height: 1.2;
  clip-path: polygon(
    0 0,
    calc(var(--maskX) * 1.2% + (var(--maskY) - 50) * 0.4%) 0,
    calc(var(--maskX) * 0.52% + (var(--maskY) - 50) * -0.4%) 100%,
    0 100%
  );
`
