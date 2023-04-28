import { FiMail, FiPhone, FiFacebook } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';

const ContactInfo = ({ name, phone, email, align, facebook }) => {
    return (
        <div className={`contact ${align}`}>
            <div>{name}</div>
            <div>
                <FiPhone /> {phone}
            </div>
            <div>
                <FiMail /> {email}
            </div>
            <div>
                <a href={facebook} target="_blank" rel="noopener noreferrer">
                    <BsFacebook />
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
