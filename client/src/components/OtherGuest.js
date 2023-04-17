const OtherGuest = ({
    type,
    name,
    value,
    handleChange,
    labelText,
    className,
    placeholder,
}) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>

            <input
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                className={className}
                placeholder={placeholder}
            />
        </div>
    );
};

export default OtherGuest;
