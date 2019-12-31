import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import sr from '@utils/sr'

import { srConfig } from '@config'
import { IconGitHub, IconExternal } from '@components/icons'
import { Heading } from '@styles'

import {
  StyledContainer,
  StyledContent,
  StyledProjectName,
  StyledDescription,
  StyledTechList,
  StyledLinkWrapper,
  StyledFeaturedImg,
  StyledImgContainer,
  StyledProject,
} from './featured.styles'

const Featured = ({ data }) => {
  const featuredProjects = data.filter(
    ({ node }) => node.frontmatter.show === 'true'
  )
  const revealTitle = useRef(null)
  const revealProjects = useRef([])

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig())
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)))
  }, [])

  return (
    <StyledContainer id='projects'>
      <Heading ref={revealTitle}>Some Things I&apos;ve Built</Heading>

      <div>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node
            const { external, title, tech, github, cover } = frontmatter

            return (
              <StyledProject key={i}>
                <StyledContent>
                  <StyledProjectName>
                    {external ? (
                      <a
                        href={external}
                        target='_blank'
                        rel='nofollow noopener noreferrer'
                        aria-label='External Link'
                      >
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </StyledProjectName>
                  <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                  {tech && (
                    <StyledTechList>
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </StyledTechList>
                  )}
                  <StyledLinkWrapper>
                    {github && (
                      <a
                        href={github}
                        target='_blank'
                        rel='nofollow noopener noreferrer'
                        aria-label='GitHub Link'
                      >
                        <IconGitHub />
                      </a>
                    )}
                    {external && (
                      <a
                        href={external}
                        target='_blank'
                        rel='nofollow noopener noreferrer'
                        aria-label='External Link'
                      >
                        <IconExternal />
                      </a>
                    )}
                  </StyledLinkWrapper>
                </StyledContent>
                <StyledImgContainer
                  key={i}
                  href={external ? external : github ? github : '#'}
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                >
                  <StyledFeaturedImg fluid={cover.childImageSharp.fluid} />
                </StyledImgContainer>
              </StyledProject>
            )
          })}
      </div>
    </StyledContainer>
  )
}

Featured.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Featured
