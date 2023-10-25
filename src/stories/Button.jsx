import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ buttonType, iconLeft, buttonLabel, iconRight, label, ...props }) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${buttonType}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Does this button have icon left or not?
   */
  iconLeft: PropTypes.bool,
  /**
   * Does this button have text or not?
   */
  buttonLabel: PropTypes.bool,
  /**
   * Does this button have icon right or not?
   */
  iconRight: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonType: 'primary',
  iconLeft: false,
  buttonLabel: true,
  iconRight: false,
  onClick: undefined,
};
