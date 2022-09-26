import PropTypes from 'prop-types';

const ActionButton = ({ action }) => (<button type="button">{action}</button>);

ActionButton.propTypes = {
  action: PropTypes.string.isRequired,
};

export default ActionButton;
