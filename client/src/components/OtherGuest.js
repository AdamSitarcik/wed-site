import { AiOutlineDelete } from 'react-icons/ai';

const OtherGuest = ({
    type,
    name,
    value,
    handleChange,
    labelText,
    className,
    placeholder,
    onDeleteClick,
}) => {
    return (
        <div className='form-row'>
            <div className='input-row'>
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={handleChange}
                    className={className}
                    placeholder={placeholder}
                />
                <button
                    type='button'
                    className='delete-guest-btn'
                    onClick={onDeleteClick}
                >
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    );
};

export default OtherGuest;
