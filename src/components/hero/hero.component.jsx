/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSpring } from 'react-spring'

// import { CSSTransition, TransitionGroup } from 'react-transition-group'
// import anime from 'animejs'
// import Rotate from 'react-reveal/Rotate'

import { email } from '@config'
import { useTimeout, useMousePosition } from '@hooks'

import { theme } from '@styles'

import { AnimatedText } from '@components'

import {
  AnimatedOverline,
  AnimatedDescription,
  AnimatedEmailLink,
  StyledContainer,
} from './hero.styles'

const Hero = ({ data }) => {
  const {
    frontmatter: { title, name, subtitle },
    html,
  } = data[0].node

  // const containerElem = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  useTimeout(() => setIsMounted(true), 700)

  // const handleMouseMove = event => {
  //   // if (event.target) event.preventDefault()
  //   event = event.nativeEvent // eslint-disable-line no-param-reassign
  //   const elem = containerElem.current
  //   const newX = (event.offsetX / elem.clientWidth) * 100
  //   const newY = (event.offsetY / elem.clientHeight) * 100
  //   const newMousePos = {
  //     x: newX,
  //     y: newY,
  //   }

  //   setMousePos(newMousePos)
  // }

  // const handleMouseOut = () => setMousePos(initialMousePos)

  const { x, y } = useMousePosition()

  const handleMouseX = mouseX => mouseX / 14

  const handleMouseY = mouseY => mouseY / 14

  const opt = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 340,
    immediate: isMounted,
    config: { mass: 1, friction: 28, tension: 200 },
  })

  // const One = () => <AnimatedOverline>{title}</AnimatedOverline>

  // const Two = () => <AnimatedTitle>{name}</AnimatedTitle>

  // const Three = () => <AnimatedSubtitle>{subtitle}</AnimatedSubtitle>

  // const Four = () => (
  //   <AnimatedDescription dangerouslySetInnerHTML={{ __html: html }} />
  // )

  // const Five = () => (
  //   <div>
  //     <AnimatedEmailLink href={`mailto:${email}`}>Get In Touch</AnimatedEmailLink>
  //   </div>
  // )

  // const items = [One, Two, Three, Four, Five]

  // const trans = useTransition(items)

  return (
    <StyledContainer>
      <div>
        <AnimatedOverline style={opt} className='hero'>
          {title}
        </AnimatedOverline>
        <AnimatedText
          maskX={handleMouseX(x)}
          maskY={handleMouseY(y)}
          textColor={theme.flat.dark.paragraph}
          overlayColor={theme.flat.dark.button}
          title={name}
          subtitle={subtitle}
        />
        <AnimatedDescription
          style={opt}
          className='hero'
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div>
          <AnimatedEmailLink style={opt} className='hero' href={`mailto:${email}`}>
            Get In Touch
          </AnimatedEmailLink>
        </div>
      </div>
    </StyledContainer>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
