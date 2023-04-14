import { FiMail, FiPhone } from 'react-icons/fi';

const ContactInfo = ({ name, phone, email, align }) => {
    return (
        <div className={`contact ${align}`}>
            <div>{name}</div>
            <div>
                <FiPhone /> {phone}
            </div>
            <div>
                <FiMail /> {email}
            </div>
        </div>
    );
};

export default ContactInfo;
