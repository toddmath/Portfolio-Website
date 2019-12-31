/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react'

import {
  StyledTextContainer,
  StyledTextTitleContent,
  StyledTextTitleContentClone,
  StyledTextSubtitleContent,
  StyledTextSubtitleContentClone,
} from './animated-text.styles'

const AnimatedText = ({
  textColor,
  overlayColor,
  maskX,
  maskY,
  title,
  subtitle,
  ...props
}) => {
  // const containerElem = useRef(null)
  // const initialMousePos = { x: 0, y: 0 }

  // const [mousePos, setMousePos] = useState(initialMousePos)

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

  return (
    <>
      <StyledTextContainer style={{ '--maskX': maskX, '--maskY': maskY }} {...props}>
        <StyledTextTitleContent color={textColor}>{title}</StyledTextTitleContent>
        <StyledTextTitleContentClone color={overlayColor}>
          {title}
        </StyledTextTitleContentClone>
      </StyledTextContainer>
      <StyledTextContainer style={{ '--maskX': maskX, '--maskY': maskY }} {...props}>
        <StyledTextSubtitleContent color={textColor}>
          {subtitle}
        </StyledTextSubtitleContent>
        <StyledTextSubtitleContentClone color={overlayColor}>
          {subtitle}
        </StyledTextSubtitleContentClone>
      </StyledTextContainer>
    </>
  )
}

export default AnimatedText
