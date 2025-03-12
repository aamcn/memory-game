
function Button({ buttonId, buttonText, buttonType}) {

    return(
        <>
            <button id={buttonId} type={buttonType}>{buttonText}</button>
        </>
    )
}

export default Button;