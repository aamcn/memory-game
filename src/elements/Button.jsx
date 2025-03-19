import PropTypes from "prop-types";


function Button({ buttonId, buttonText, buttonType }) {
  
  return (
    <>
      <button id={buttonId} type={buttonType}>
        {buttonText}
      </button>
    </>
  );
}

Button.propTypes = {
  buttonId: PropTypes.number, 
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
}

export default Button;
