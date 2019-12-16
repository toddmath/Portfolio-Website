import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import { StyledContainer, StyledLinkWrapper, StyledEmailLink } from './email.styles';

const Email = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={3000} classNames="fade">
            <StyledLinkWrapper>
              <StyledEmailLink href={`mailto:${email}`}>{email}</StyledEmailLink>
            </StyledLinkWrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledContainer>
  );
};

export default Email;
