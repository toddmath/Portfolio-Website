import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
// import { IconLoader } from '@components/icons';
import { StyledContainer, StyledSvg } from './loader.styles';
import { useTimeout } from '@hooks';

// const Loader = ({ finishLoading }) => {
//   const animate = () => {
//     const loader = anime.timeline({ complete: () => finishLoading() });

//     loader.add({
//       targets: '.loader',
//       duration: 200,
//       easing: 'easeInOutSine',
//       opacity: 0,
//       zIndex: -1,
//     });
//   };

//   // const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     // const timeout = setTimeout(() => setIsMounted(true), 10);
//     animate();
//     // return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <StyledContainer className="loader">
//       <Helmet bodyAttributes={{ class: `hidden` }} />
//     </StyledContainer>
//   );
// };

const Loader = ({ size, finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({ complete: () => finishLoading() });

    loader.add({
      target: '.loader',
      duration: 1250,
      easing: 'easeInOutSine',
      opacity: 0,
      zIndex: -1,
    });
  };

  const [isMounted, setIsMounted] = useState(false);

  // const mountIt = () => setIsMounted(true);
  useTimeout(() => setIsMounted(true), 100);

  useEffect(() => animate(), []);

  return (
    <StyledContainer className="loader">
      <Helmet bodyAttributes={{ class: `hidden` }} />
      <StyledSvg
        isMounted={isMounted}
        xmlns="http://www.w3.org/2000/svg"
        size={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
      </StyledSvg>
    </StyledContainer>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;

/**
 *
 * .add({
        targets: '.staggering-axis-grid .el',
        translateX: anime.stagger(10, { grid: [10, 7], from: 'center', axis: 'x' }),
        translateY: anime.stagger(10, { grid: [10, 7], from: 'center', axis: 'y' }),
        rotateZ: anime.stagger([0, 90], { grid: [10, 7], from: 'center', axis: 'x' }),
        delay: anime.stagger(200, { grid: [10, 7], from: 'center' }),
        easing: 'easeInQuad',
      });

      delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),

 *   .add({
        target: '.loader',
        duration: 1250,
        easing: 'easeInOutSine',
        opacity: 0,
        zIndex: -1,
      })

    <StyledSvg
        isMounted={isMounted}
        xmlns="http://www.w3.org/2000/svg"
        size={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
      </StyledSvg>

      <StyledGrid isMounted={isMounted}>
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
          <StyledSquare className="el" />
        </StyledGrid>

        .add({
        targets: '.staggering-axis-grid .el',
        scale: [
          { value: 0.1, easing: 'easeOutSine', duration: 500 },
          { value: 1, easing: 'easeInOutQuad', duration: 1200 },
        ],
        delay: anime.stagger(200, { grid: [10, 7], from: 'center' }),
      });
 */
