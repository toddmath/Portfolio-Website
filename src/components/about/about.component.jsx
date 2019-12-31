/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import sr from '@utils/sr'

import { srConfig, github } from '@config'
import { Heading } from '@styles'

import {
  StyledContainer,
  StyledFlexContainer,
  StyledContent,
  SkillsContainer,
  Skill,
  StyledPic,
  StyledAvatar,
  StyledAvatarLink,
} from './about.styles'

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node
  const { title, skills, avatar } = frontmatter

  const revealContainer = useRef(null)

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <StyledContainer id='about' ref={revealContainer}>
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </StyledContent>
        <StyledPic>
          <StyledAvatarLink href={github}>
            <StyledAvatar fluid={avatar.childImageSharp.fluid} alt='Avatar' />
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>
    </StyledContainer>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired,
}

export default About
