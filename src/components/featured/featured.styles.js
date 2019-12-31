import styled from 'styled-components'
import Img from 'gatsby-image'

import { theme, mixins, media, Section } from '@styles'

const { flexCenter, boxShadow, inlineLink } = mixins

const {
  colors,
  flat,
  fontSizes: { smish, lg },
  fonts: { SFMono },
  transition,
  borderRadius,
  margin,
} = theme

export const StyledContainer = styled(Section)`
  ${flexCenter};
  flex-direction: column;
  align-items: flex-start;
  /* transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); */
  transition: ${transition};
`

export const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 8;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`

export const StyledLabel = styled.h4`
  font-size: ${smish};
  font-weight: normal;
  color: ${flat.dark.cardHeadline};
  font-family: ${SFMono};
  margin-top: 10px;
  padding-top: 0;
`

export const StyledProjectName = styled.h5`
  z-index: 100;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${flat.dark.headline};
  ${media.tablet`font-size: 24px;`};
  ${media.thone`color: ${flat.dark.headline};`};
  a {
    ${media.tablet`display: block;`};
  }
`

export const StyledDescription = styled.div`
  ${boxShadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${flat.dark.cardBackground};
  color: ${flat.dark.cardParagraph};
  font-size: ${lg};
  border-radius: ${borderRadius};
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  `};
  p {
    margin: 0;
  }
  a {
    ${inlineLink};
  }
`

export const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0 10px;
  li {
    font-family: ${SFMono};
    font-size: ${smish};
    color: ${flat.dark.grey};
    margin-right: ${margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.thone`
      color: ${colors.lightestSlate};
      margin-right: 10px;
    `};
  }
`

export const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: ${flat.dark.link};
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`

export const StyledFeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
  `};
`

export const StyledImgContainer = styled.a`
  ${mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  border-radius: ${borderRadius};
  /* transition: ${transition}; */
  /* transition: all .25s cubic-bezier(0.215, 0.610, 0.355, 1); */
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / 13;
    ${StyledFeaturedImg} {
      filter: grayscale(100%) invert(.2) brightness(20%);
    }
    &:before {
      background-color: transparent;
    }
  `};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${StyledFeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    /* transition: ${transition}; */
    /* transition: all .25s cubic-bezier(0.215, 0.610, 0.355, 1); */
    background-color: ${flat.dark.imgBackground};
    mix-blend-mode: screen;
    ${media.thone`
      background-color: ${flat.dark.link};
      filter: saturate(2) blur(0.02em) invert(0) brightness(45%);
    `}
  }
`

export const StyledProject = styled.div`
  transition: inherit;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.thone`
    margin-bottom: 70px;
    align-items: end;
  `};
  ${media.tablet`align-items: start;`};
  ${StyledImgContainer} {
    ${media.tablet`
      height: 80%;
      grid-column: 13 / 4;
      align-self: end;
    `}
    ${media.thone`
      grid-column: 1 / 13;
    `};
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 6 / -1;
      text-align: right;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
    ${StyledTechList} {
      justify-content: flex-end;
      li {
        margin-left: ${margin};
        margin-right: 0;
      }
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${StyledImgContainer} {
      grid-column: 1 / 8;
      ${media.tablet`
        height: 80%;
        grid-column: 1 / 9;
        align-self: end;
        `};
      ${media.thone`
        grid-column: 1 / -1;
      `};
    }
  }
`
