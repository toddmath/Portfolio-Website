import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import Zoom from 'react-reveal/Zoom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { email } from '@config'
import { useTimeout } from '@hooks'
import {
  StyledOverline,
  StyledTitle,
  StyledSubtitle,
  StyledDescription,
  StyledEmailLink,
  StyledContainer,
} from './hero.styles'

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)
  useTimeout(() => setIsMounted(true), 700)
  const { frontmatter, html } = data[0].node

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted && (
          <>
            <CSSTransition key={'first'} classNames='fadeup' timeout={0}>
              <StyledOverline style={{ transitionDelay: '100ms' }}>
                {frontmatter.title}
              </StyledOverline>
            </CSSTransition>
            <CSSTransition key={'second'} classNames='fade' timeout={100}>
              <StyledTitle style={{ transitionDelay: '200ms' }}>
                {frontmatter.name}.
              </StyledTitle>
            </CSSTransition>
            <CSSTransition key={'third'} classNames='fade' timeout={200}>
              <StyledSubtitle style={{ transitionDelay: '300ms' }}>
                {frontmatter.subtitle}
              </StyledSubtitle>
            </CSSTransition>
            <CSSTransition key={'fourth'} classNames='fade' timeout={300}>
              <StyledDescription
                style={{ transitionDelay: '400ms' }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </CSSTransition>
            <CSSTransition key={'fifth'} classNames='fade' timeout={400}>
              <div style={{ transitionDelay: '500ms' }}>
                <StyledEmailLink href={`mailto:${email}`}>
                  Get In Touch
                </StyledEmailLink>
              </div>
            </CSSTransition>
          </>
        )}
      </TransitionGroup>
    </StyledContainer>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero

/*
  items.map((item, i) => (
    <CSSTransition key={i} classNames='fadeup' timeout={0}>
      {item}
    </CSSTransition>
  ))
*/
