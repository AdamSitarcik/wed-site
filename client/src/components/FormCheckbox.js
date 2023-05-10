const FormCheckbox = ({ message, name, onChange }) => {
    return (
        <div className="checkbox-container form-row">
            {message}
            <input type="checkbox" name={name} onChange={onChange} />
        </div>
    );
};

export default FormCheckbox;
