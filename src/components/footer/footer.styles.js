import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { flat, fontSizes, fonts } = theme;

export const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${flat.dark.cardBackground};
  color: ${flat.dark.background};
  text-align: center;
  height: auto;
  min-height: 70px;
`;

export const StyledSocial = styled.div`
  color: ${flat.dark.cardHeadline};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;

export const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
`;

export const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const StyledMetadata = styled.div`
  margin: 10px 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;

export const StyledGitHubLink = styled.a`
  color: ${flat.dark.cardHeadline};

  &:hover,
  &:focus,
  &:active {
    color: ${flat.dark.button};
  }
`;

export const StyledGitHubInfo = styled.div`
  margin-top: 10px;

  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
  }
`;

export const StyledGitHubInfoInner = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 7px;
  justify-content: space-between;
`;
