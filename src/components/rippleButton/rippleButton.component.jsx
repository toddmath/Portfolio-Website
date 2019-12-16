import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledRippleButton, StyledRipple, StyledRippleLink } from './rippleButton.styles';

const RippleButton = ({ children, onClick, aTag = false, to = '' }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 1200);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  const onButtonClick = e => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
    setTimeout(() => onClick && onClick(e), 800);
  };

  if (aTag) {
    return (
      <StyledRippleLink
        rel="nofollow noopener noreferrer"
        target="_blank"
        href={to}
        onClick={onButtonClick}>
        {isRippling && (
          <StyledRipple
            style={{
              left: coords.x + 10,
              top: coords.y,
            }}
          />
        )}
        <span className="content">{children}</span>
      </StyledRippleLink>
    );
  } else
    return (
      <StyledRippleButton onClick={onButtonClick}>
        {isRippling && (
          <StyledRipple
            style={{
              left: coords.x + 10,
              top: coords.y,
            }}
          />
        )}
        <span className="content">{children}</span>
      </StyledRippleButton>
    );
};

RippleButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.string]),
  onClick: PropTypes.func,
  aTag: PropTypes.bool,
  to: PropTypes.string,
};

export default RippleButton;
