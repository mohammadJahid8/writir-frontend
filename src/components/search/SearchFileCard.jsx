import React from 'react';
import figmaCard from '../../assets/figmaCard.png';

const SearchFileCard = ({ imageSrc, badgeText, title, subtitle, link, actions }) => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between pt-4">
            <div className="mb-4 mb-md-0 me-md-4">
                <img alt="" src={imageSrc || figmaCard} className="img-fluid w-100 w-md-auto" />
            </div>
            <div className="flex-1">
                <div style={{fontSize:"12px", textAlign:"center", backgroundColor:"#D7E7F5"}} className="text-primary w-25 fw-light mb-2 rounded">{badgeText}</div>
                <p className="h4 mb-2">
                    {title}: <span className="fw-light text-muted">{subtitle}</span>
                </p>
                <div
                    style={{ wordWrap: 'break-word', }}
                    className="h6 fw-light text-muted mb-2 searchFont">{link}
                </div>
                <div className="d-flex flex-column flex-md-row">
                    {actions.map((action, index) => (
                        <span
                            key={index}
                            style={{ fontSize: '12px' }}
                            className={`mb-2 mb-md-0 ${index < actions.length - 1 ? 'me-md-3' : ''} ${action.className}`}
                        >
                            {action.text}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SearchFileCard;
