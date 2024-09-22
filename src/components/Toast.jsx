import PropTypes from 'prop-types';

const Toast = ({ message, type }) => {
  // Your existing code...

  return (
    <div
      className={`magicHiteshfolio-toast ${typeClass[type] || 'magicHiteshfolio-toast-info'}`}
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
};

export default Toast;
