import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGitHub,
  IconLinkedin,
  IconCodepen,
  IconInstagram,
  IconTwitter,
  IconStar,
  IconFork,
} from '@components/icons';
import { socialMedia } from '@config';
import {
  StyledContainer,
  StyledSocial,
  StyledSocialList,
  StyledSocialLink,
  StyledMetadata,
  StyledGitHubLink,
  StyledGitHubInfo,
  StyledGitHubInfoInner,
} from './footer.styles';

const Footer = ({ githubInfo }) => (
  <StyledContainer>
    <StyledSocial>
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <StyledSocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}>
                {name === 'Github' ? (
                  <IconGitHub />
                ) : name === 'Linkedin' ? (
                  <IconLinkedin />
                ) : name === 'Codepen' ? (
                  <IconCodepen />
                ) : name === 'Instagram' ? (
                  <IconInstagram />
                ) : name === 'Twitter' ? (
                  <IconTwitter />
                ) : (
                  <IconGitHub />
                )}
              </StyledSocialLink>
            </li>
          ))}
      </StyledSocialList>
    </StyledSocial>
    <StyledMetadata>
      <StyledGitHubLink
        href="https://github.com/toddmath/Portfolio-Website"
        target="_blank"
        rel="nofollow noopener noreferrer">
        <div>Design inspired by Brittany Chiang</div>

        {githubInfo.stars && githubInfo.forks && (
          <StyledGitHubInfo>
            <StyledGitHubInfoInner>
              <IconStar />
              <span>{githubInfo.stars}</span>
            </StyledGitHubInfoInner>
            <StyledGitHubInfoInner>
              <IconFork />
              <span>{githubInfo.forks}</span>
            </StyledGitHubInfoInner>
          </StyledGitHubInfo>
        )}
      </StyledGitHubLink>
    </StyledMetadata>
  </StyledContainer>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
