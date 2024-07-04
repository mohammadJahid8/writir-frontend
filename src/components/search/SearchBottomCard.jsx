import React from 'react';
import figmaIcon from '../../assets/figmaCard.png';

const SearchBottomCard = ({ imageSrc, title, description, actions }) => {
    return (
        <div className="d-flex flex-column align-items-start justify-content-between pt-4 ">
            <div className="d-flex mb-4 mb-3 me-md-4">
                <img alt="" src={imageSrc || figmaIcon} className="img-fluid" style={{ width: '23px', height: '23px', marginRight: '8px' }} />
                <p className="h4 mb-0 text-truncate-custom">
                    {title}
                </p>
            </div>
            <div className="flex-1">
                <p
                    style={{ wordWrap: 'break-word' }}
                    className="h6 fw-light text-muted mb-2 searchFont me-3 me-md-0">{description}
                </p>
                <div className="d-flex justify-content-between flex-column flex-md-row">
                    <span style={{ fontSize: '12px' }} className="fw-bold text-primary me-3">{actions[0].text}</span>
                    <div className="d-flex flex-column flex-md-row">
                        {actions.slice(1).map((action, index) => (
                            <span
                                key={index}
                                style={{ fontSize: '12px' }}
                                className={`mb-2 mb-md-0 ${index < actions.length - 2 ? 'me-md-3' : ''} ${action.className}`}
                            >
                                {action.text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBottomCard;
