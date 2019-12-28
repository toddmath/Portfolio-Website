import styled, { css, keyframes } from 'styled-components'
import { theme, mixins } from '@styles'
const { flat, loadEase, transition, gradients } = theme

export const StyledContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${flat.dark.background};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`

export const StyledLogo = styled.div`
  width: max-content;
  max-width: 100px;
  transition: ${transition};
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #T {
      opacity: 0;
    }
  }
`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
    stroke: ${flat.dark.background};
    opacity: 0.2;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
    stroke: ${flat.dark.paragraph};
    opacity: 0.6;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
    stroke: ${flat.dark.link};
    opacity: 1;
  }
`

export const StyledLoader = css`
  animation: ${rotate} 2s linear infinite;
  transition: ${transition};

  & circle {
    animation: 1.5s ${dash} ${loadEase} infinite;
  }
`

export const StyledSvg = styled.svg`
  ${StyledLoader};
  opacity: ${props => (props.isMounted ? 1 : 0)};
  width: ${props => props.size || '10vw'};
  height: ${props => props.size || '10vw'};
  stroke: ${flat.dark.link};
  background-color: transparent;
  color: transparent;
  transition: ${transition};
`

export const StyledGridContainer = styled.div`
  position: relative;
  display: block;
  text-align: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  transition: ${transition};
`

/**
 * display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
 */

export const StyledGrid = styled.div`
  display: grid;
  grid-gap: 1vmax;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(10, 1fr);
  opacity: ${props => (props.isMounted ? 1 : 0)};
  transition: ${transition};
  ${gradients.brightBlue};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const smallSquareStyles = css`
  min-width: 8vw;
  width: auto;
  min-height: 13vh;
  height: auto;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: contrast(2);
`

/**
  width: 18px;
  height: 18px; */

/* CSS */
const circleStyles = css`
  pointer-events: none;
  position: relative;
  width: 28px;
  height: 28px;
  margin: 1px;
  font-size: 14px;
`

/* background-color: ${flat.dark.button}; */

// * CSS
export const StyledSquare = styled.div`
  ${circleStyles};
  ${smallSquareStyles};
`
