import { FaMapMarkerAlt } from 'react-icons/fa';

const MapSymbol = ({ href }) => {
    return (
        <a
            href={`${href}`}
            className="react-icon"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaMapMarkerAlt />
        </a>
    );
};

export default MapSymbol;
