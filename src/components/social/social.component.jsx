import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { socialMedia } from '@config';
import { FormattedIcon } from '@components/icons';
import { useTimeout } from '@hooks';
import { StyledContainer, StyledList, StyledItem, StyledLink } from './social.styles';

const Social = () => {
  const [isMounted, setIsMounted] = useState(false);
  useTimeout(() => setIsMounted(true), 2000);

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={3000} className="fade">
            <StyledList>
              {socialMedia &&
                socialMedia.map(({ url, name }, i) => (
                  <StyledItem key={i}>
                    <StyledLink
                      href={url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={name}>
                      <FormattedIcon name={name} />
                    </StyledLink>
                  </StyledItem>
                ))}
            </StyledList>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledContainer>
  );
};

export default Social;
