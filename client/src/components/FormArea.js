const FormArea = ({
    name,
    value,
    handleChange,
    placeholder,
    className,
    labelText,
}) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="textarea-label">
                {labelText || name}
            </label>
            <textarea
                value={value}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                rows={6}
                className={className}
            ></textarea>
        </div>
    );
};

export default FormArea;
