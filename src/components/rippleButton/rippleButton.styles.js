import styled from 'styled-components'
import { mixins, theme } from '@styles'
const { ripple, rippleButton } = mixins

export const StyledRipple = styled.span`
  ${ripple};
`

export const StyledRippleButton = styled.button`
  ${rippleButton};
`

export const StyledRippleLink = styled.a`
  ${rippleButton};
  padding: 1.8em auto;
  font-size: ${theme.fontSizes.smish};
  height: 100% !important;
`
