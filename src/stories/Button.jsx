import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ buttonType, state, showIconLeft, showLabel, showIconRight, label, ...props }) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${buttonType}`].join(' ')}
      {...props}
    >
      { showIconLeft ? (
        <svg class="btn-icon btn-icon--left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10.2 19.3V13.9H13.8V19.3H18.3V12.1H21L12 4L3 12.1H5.7V19.3H10.2Z"/>
        </svg>):(null)}
      
        { showLabel ? (
        `${label}`):(null)}
      
      { showIconRight ? (
        <svg class="btn-icon btn-icon--right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4153 14.7828C12.9706 14.7828 13.4215 15.2337 13.4215 15.789C13.4215 16.3448 12.9706 16.7951 12.4153 16.7951C11.8595 16.7951 11.4092 16.3448 11.4092 15.789C11.4092 15.2337 11.8595 14.7828 12.4153 14.7828ZM12.4153 13.5558C11.5117 13.5546 10.6957 14.0975 10.3491 14.9319C10.0018 15.7663 10.192 16.727 10.8307 17.3669C11.4687 18.0061 12.4294 18.1982 13.2644 17.8528C14.0994 17.5074 14.6442 16.6933 14.6442 15.789C14.6442 14.5577 13.6466 13.5583 12.4153 13.5558ZM17.5233 10.6564V8.11227C17.5233 5.28896 15.235 3 12.411 3C9.58773 3 7.29877 5.28834 7.29877 8.11227V10.6319C5.96319 10.9 5.00245 12.0718 5 13.4331V18.1368C5 19.7178 6.28221 21 7.86319 21H16.8607C18.4423 21 19.7239 19.7178 19.7239 18.1368V13.4331C19.7202 12.1104 18.8104 10.9626 17.5233 10.6564ZM12.4153 4.23067C14.5583 4.23558 16.2945 5.97301 16.2963 8.11656V10.5706H8.52577V8.11656C8.52761 5.96933 10.2681 4.23067 12.4153 4.23067ZM18.4969 18.1368C18.4969 19.0405 17.7644 19.773 16.8607 19.773H7.86319C6.95951 19.773 6.22699 19.0405 6.22699 18.1368V13.4331C6.22699 12.5301 6.95951 11.7975 7.86319 11.7975H16.8607C17.7644 11.7975 18.4969 12.5301 18.4969 13.4331V18.1368Z"/>
      </svg>):(null)}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Is this the principal call to action on the page?
   */
  state: PropTypes.oneOf(['default', 'selected', 'hover', 'disabled']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Does this button have icon left or not?
   */
  showIconLeft: PropTypes.bool,
  /**
   * Does this button have text or not?
   */
  showLabel: PropTypes.bool,
  /**
   * Does this button have icon right or not?
   */
  showIconRight: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonType: 'primary',
  state: 'default',
  showIconLeft: false,
  showLabel: true,
  showIconRight: false,
  onClick: undefined,
};
