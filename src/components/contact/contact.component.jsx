import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig, email } from '@config';
import { StyledContainer, StyledHeading, StyledEmailLink } from './contact.styles';

const Contact = ({ data }) => {
  const {
    frontmatter: { title },
    html,
  } = data[0].node;
  // const { title } = frontmatter;
  const revealContainer = useRef(null);

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer>
      <StyledHeading id="contact" ref={revealContainer}>
        {title}
      </StyledHeading>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <StyledEmailLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
        Say Hi
      </StyledEmailLink>
    </StyledContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;
