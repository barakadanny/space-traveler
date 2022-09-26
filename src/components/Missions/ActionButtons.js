import PropTypes from 'prop-types';
const ActionButton = ({ action }) => {
  return (<button>{action}</button>)
}
   

ActionButton.propTypes = {
    action: PropTypes.string.isRequired,
  };

  export default ActionButton;