import PropTypes from "prop-types";
import React from "react";


function Button({ buttonId, buttonText, buttonType, onClick, buttonClass }) {
  return (
      <button id={buttonId} type={buttonType} onClick={onClick} aria-label={buttonText} className={buttonClass}>
        {buttonText}
      </button>
  );
}

Button.propTypes = {
  buttonId: PropTypes.string,
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
  buttonClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
