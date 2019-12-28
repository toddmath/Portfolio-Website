/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import PropTypes from 'prop-types'
import { Head, Nav, Social, Email, Footer, withToast } from '@components'
import { GlobalStyle } from '@styles'
import { SkipToContent, StyledContent } from './layout.styles'

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="*"]')
}

const Layout = ({ children, location }) => {
  // const [isLoading, setIsLoading] = useState(location.pathname === '/')
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
    error: '',
  })

  useEffect(() => {
    fetch('https://api.github.com/repos/toddmath/Portfolio-Website')
      .then(res => res.json())
      .then(json => {
        const { stargazers_count, forks_count } = json
        setGitHubInfo({ stars: stargazers_count, forks: forks_count })
      })
      .catch(error => {
        setGitHubInfo({ error: error.message })
      })
  }, [])

  // useEffect(() => {
  //   if (isLoading) return
  //   if (location.hash) {
  //     const id = location.hash.substring(1) // location.hash without the '#'
  //     setTimeout(() => {
  //       const el = document.getElementById(id)
  //       if (el) el.scrollIntoView()
  //     }, 0)
  //   }
  // }, [isLoading])

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id='root'>
          <Head metadata={site.siteMetadata} />
          <GlobalStyle />
          <SkipToContent href='#content'>Skip to Content</SkipToContent>
          <StyledContent id='content'>
            <Nav location={location} />
            <Social />
            <Email />
            {children}
            <Footer githubInfo={githubInfo} />
          </StyledContent>
        </div>
      )}
    />
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   location: PropTypes.object.isRequired,
// }

export default withToast(Layout)

/**
 * render={({ site }) => (
        <div id="root">
          <Head metadata={site.siteMetadata} />
          <GlobalStyle />
          <SkipToContent href="#content">Skip to Content</SkipToContent>
          {isLoading ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent id="content">
              <Nav location={location} />
              <Social />
              <Email />
              {children}
              <Footer githubInfo={githubInfo} />
            </StyledContent>
          )}
        </div>
      )}
 */
