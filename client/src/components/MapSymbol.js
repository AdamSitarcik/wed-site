import { FaMapMarkerAlt } from 'react-icons/fa';

const MapSymbol = ({ href }) => {
    return (
        <a href={`${href}`} className="react-icon">
            <FaMapMarkerAlt />
        </a>
    );
};

export default MapSymbol;
