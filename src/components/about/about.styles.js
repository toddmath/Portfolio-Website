import styled from 'styled-components';
import Img from 'gatsby-image';
import { theme, mixins, media, Section } from '@styles';
const { colors, flat, fontSizes, fonts } = theme;

export const StyledContainer = styled(Section)`
  position: relative;
`;

export const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
  /* width: 1302.17px;
  max-width: 1302.17px; */
  width: 100%;
`;

export const StyledContent = styled.div`
  width: 804.802px;
  max-width: 804.802px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;

export const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;

export const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.grey};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${flat.dark.tertiary};
    font-size: ${fontSizes.sm};
    line-height: 15px;
  }
`;

export const StyledPic = styled.div`
  position: relative;
  /* width: 40%; */
  width: 430.608px;
  max-width: 430.608px;
  /* max-width: 300px; */
  /* margin-left: 60px; */
  margin-left: 76.244px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.desktop`width: 100%;`};
  ${media.phablet`width: 80%;`};
`;

export const StyledAvatar = styled(Img)`
  position: relative;
  mix-blend-mode: normal;
  filter: grayscale(100%);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;

export const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${flat.dark.cardTagBackground};
    mix-blend-mode: multiply;
  }
  &:after {
    border: 2px solid ${flat.dark.tertiary};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;
