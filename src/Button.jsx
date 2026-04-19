function Button(props) {

    const { type, disabled, children, onClick } = props

    return (
        <button type={type} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;