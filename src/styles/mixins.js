import { css, keyframes } from 'styled-components'
import theme from './theme'
import media from './media'

const {
  flat,
  borderRadius,
  gradients,
  transition,
  fonts: { SFMono },
  fontSizes: { sm, smish, md, lg },
} = theme

const rippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`

const buttonStyles = css`
  box-sizing: border-box;
  color: ${flat.dark.button};
  background-color: transparent;
  border: 1px solid ${flat.dark.button};
  border-radius: ${borderRadius};
  font-family: ${SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${transition};
  &:hover,
  &:focus,
  &:active {
    background-color: ${flat.dark.button};
    color: ${flat.dark.buttonText};
  }
  &:after {
    display: none !important;
  }
`

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexRow: css`
    display: flex;
    flex-direction: row;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${flat.dark.link};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-shadow: none;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${transition};
    cursor: pointer;
    color: ${flat.dark.link};
    &:hover,
    &:focus,
    &:active {
      color: ${flat.dark.link};
      background-position: 0 91%;
      background-size: 1px 1px;
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
      bottom: 0.26em;
      background-color: ${flat.dark.link};
      transition: ${transition};
      opacity: 0.7;
      background-position: 0;
      background-image: linear-gradient(${flat.dark.link}, ${flat.dark.link});
      background-repeat: repeat-x;
    }
  `,

  smallButton: css`
    padding: 0.75rem 1rem;
    font-size: ${smish};
    ${buttonStyles};
  `,

  bigButton: css`
    padding: 1.25rem 1.75rem;
    font-size: ${sm};
    ${buttonStyles};
  `,

  rippleEffect: keyframes`
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(10);
      opacity: 0.375;
    }
    100% {
      transform: scale(35);
      opacity: 0;
    }
  `,

  ripple: css`
    width: 20px;
    height: 20px;
    position: absolute;
    ${gradients.blueTeal};
    display: block;
    content: '';
    border-radius: 9999px;
    opacity: 1;
    animation: 1.2s ease 1 forwards ${rippleEffect};
  `,

  rippleButton: css`
    ${buttonStyles};
    font-size: ${sm};
    padding: 1em 1rem;
    line-height: 1.2;
    overflow: hidden;
    position: relative;
    > .content {
      position: relative;
      z-index: 2;
    }
  `,

  sidePadding: css`
    /* padding: 0 123.363px; */
    padding: 0 24px;
    /* padding: 0 150px; */
    /* ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`}; */
    /* ${media.desktop`padding: 0 62.83px;`};
    ${media.tablet`padding: 0 38.832px;`};
    ${media.thone`padding: 0 24px`};
    ${media.phablet`padding: 0 24px;`}; */
  `,

  sectionPadding: css`
    padding: 164.485px 76.244px;
    ${media.bigDesktop`padding: 124.485px 29.124px;`};
    ${media.desktop`padding: 100px 29.124px;`};
    ${media.tablet`padding: 100px 29.124px;`};
    ${media.thone`padding: 62.83px 29.124px;`};
    ${media.phablet`padding: 38.832px 18px;`};
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${flat.dark.shadow};
    transition: ${transition};
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${flat.dark.shadow};
    }
  `,

  sectionCounter: css`
    margin: 0 auto 20px;
    position: relative;
    font-size: ${lg};
    counter-increment: item 1;
    ${media.thone`
      margin: 0 auto 10px;
      font-size: ${md};
    `};
    ${media.tiny`
      font-size: ${smish};
    `};
    &:before {
      display: block;
      content: '0' counter(item) '.';
      color: ${flat.dark.tertiary};
      font-size: ${md};
      margin-bottom: 5px;
    }
  `,

  largeShadow: css`
    box-shadow: -16px 0px 30px -18px ${flat.dark.headerShadow};
  `,

  textSelectShadow: css`
    position: relative;
    color: inherit;
    background: none repeat scroll 0% 0% transparent;
    text-shadow: 0 0 0 ${flat.dark.paragraph}, 0 0 0 ${flat.dark.select},
      0.0025em 0.0025em 0 ${flat.dark.highlight},
      0.005em 0.005em 0 ${flat.dark.highlight},
      0.0075em 0.0075em 0 ${flat.dark.highlight},
      0.01em 0.01em 0 ${flat.dark.highlight},
      0.0125em 0.0125em 0 ${flat.dark.highlight},
      0.015em 0.015em 0 ${flat.dark.highlight},
      0.0175em 0.0175em 0 ${flat.dark.highlight},
      0.02em 0.02em 0 ${flat.dark.highlight},
      0.0225em 0.0225em 0 ${flat.dark.highlight},
      0.025em 0.025em 0 ${flat.dark.highlight},
      0.0275em 0.0275em 0 ${flat.dark.highlight},
      0.03em 0.03em 0 ${flat.dark.highlight},
      0.0325em 0.0325em 0 ${flat.dark.highlight},
      0.035em 0.035em 0 ${flat.dark.highlight},
      0.0375em 0.0375em 0 ${flat.dark.highlight},
      0.04em 0.04em 0 ${flat.dark.highlight},
      0.0425em 0.0425em 0 ${flat.dark.highlight},
      0.045em 0.045em 0 ${flat.dark.highlight},
      0.0475em 0.0475em 0 ${flat.dark.highlight},
      0.05em 0.05em 0 ${flat.dark.highlight},
      0.0525em 0.0525em 0 ${flat.dark.highlight},
      0.055em 0.055em 0 ${flat.dark.highlight},
      0.0575em 0.0575em 0 ${flat.dark.highlight},
      0.06em 0.06em 0 ${flat.dark.highlight},
      0.0625em 0.0625em 0 ${flat.dark.highlight},
      0.065em 0.065em 0 ${flat.dark.highlight},
      0.0675em 0.0675em 0 ${flat.dark.highlight},
      0.07em 0.07em 0 ${flat.dark.highlight},
      0.0725em 0.0725em 0 ${flat.dark.highlight},
      0.075em 0.075em 0 ${flat.dark.highlight},
      0.0775em 0.0775em 0 ${flat.dark.highlight},
      0.08em 0.08em 0 ${flat.dark.highlight},
      0.0825em 0.0825em 0 ${flat.dark.highlight},
      0.085em 0.085em 0 ${flat.dark.highlight},
      0.0875em 0.0875em 0 ${flat.dark.highlight},
      0.09em 0.09em 0 ${flat.dark.highlight},
      0.0925em 0.0925em 0 ${flat.dark.highlight},
      0.095em 0.095em 0 ${flat.dark.highlight},
      0.0975em 0.0975em 0 ${flat.dark.highlight},
      0.1em 0.1em 0 ${flat.dark.highlight};
  `,
}

/**
* ORIGINAL:
  inlineLink: css`
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
      bottom: 0.26em;
      background-color: ${flat.dark.tertiary};
      transition: ${theme.transition};
      opacity: 0.7;
    }
  `,
*/

export default mixins
