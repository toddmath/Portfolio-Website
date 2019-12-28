import { css } from 'styled-components'

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  const width = sizes[label] / 16
  acc[label] = (...args) => css`
    @media (max-width: ${width.toFixed(2)}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export default media
