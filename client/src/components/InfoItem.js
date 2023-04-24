const InfoItem = ({ title, icon, description }) => {
    return (
        <li className='info-item'>
            <div className='item-title'>{title}</div>
            <div className='icon'>{icon}</div>
            {description}
        </li>
    );
};

export default InfoItem;
