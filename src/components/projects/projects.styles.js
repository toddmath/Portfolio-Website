import { Link } from 'gatsby';
import styled from 'styled-components';
import { theme, mixins, media, Section, Button } from '@styles';
const { flat, fontSizes, fonts } = theme;

export const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  background-color: ${flat.light.background};

  &:before,
  &:after {
    background-color: ${flat.light.background};
  }
`;

export const StyledTitle = styled.h4`
  margin: 0 auto;
  font-size: ${fontSizes.h3};
  color: ${flat.dark.headline};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;

export const StyledArchiveLink = styled(Link)`
  ${mixins.inlineLink};
  text-align: center;
  margin: 0 auto;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  &:after {
    bottom: 0.1em;
  }
`;

export const StyledGrid = styled.div`
  margin-top: 50px;

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;

export const StyledProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${flat.dark.cardBackground};
`;

export const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
`;

export const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;

export const StyledFolder = styled.div`
  color: ${flat.dark.cardTagBackground};
  svg {
    width: 40px;
    height: 40px;
  }
`;

export const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: ${flat.dark.cardTagBackground};
`;

export const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${flat.dark.cardHeadline};
`;

export const StyledProjectDescription = styled.div`
  font-size: 17px;
  color: ${flat.dark.cardParagraph};
  a {
    ${mixins.inlineLink};
  }
`;

export const StyledTechList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${flat.dark.grey};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const StyledMoreButton = styled(Button)`
  margin: 100px auto 0;
`;
