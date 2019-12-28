import styled, { keyframes } from 'styled-components'
import { theme } from '@styles'
const { flat, fonts, borderRadius, fontSizes } = theme

export const StyledToast = styled.div`
  border: 2px solid transparent;
  background-color: ${flat.dark.background};
  border-radius: ${borderRadius};
  width: 100%;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  margin: 1.5rem 0 1rem;
  padding: 1rem;
  display: flex;
  position: relative;
  top: 4rem;
  right: 1rem;
  cursor: pointer;
  flex: 1;
  cursor: pointer;
  font-family: ${fonts.Montserrat};
  overflow: hidden;
  justify-content: space-between;
`

// box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

export const StyledToastText = styled.div`
  padding: 0.5rem 1rem;
  line-height: 1.4;
`

export const StyledToastCloseBtn = styled.button`
  border: none;
  background-color: transparent;
  margin: 0;
  color: ${flat.dark.button};
  font-weight: bold;
  font-size: ${fontSizes.xl};
  background: transparent;
  outline: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  align-self: flex-start;
  display: inline-block;
  position: absolute;
  top: 4px;
  right: 4px;

  &:hover,
  &:focus {
    opacity: 1;
  }
`

const progressBarAnimation = keyframes`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`

export const StyledProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: ${props => (props.rtl ? `initial` : 0)};
  width: 100%;
  height: 5px;
  z-index: $rt-z-index;
  opacity: 0.7;
  background-color: rgba(255, 255, 255, 0.7);
  animation: ${props => (props.animate ? `${progressBarAnimation} 1s linear` : '')};
  background: ${props => (props.color ? `${flat.dark.button}` : `transparent`)};
  right: ${props => (props.rtl ? 0 : `unset`)};
  transform-orign: ${props => (props.rtl ? `right` : `left`)};
`
