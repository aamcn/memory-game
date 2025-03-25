import PropTypes from "prop-types";

function Button({ buttonId, buttonText, buttonType, onClick }) {
  return (
    <>
      <button id={buttonId} type={buttonType} onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
}

Button.propTypes = {
  buttonId: PropTypes.number,
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
};

export default Button;
