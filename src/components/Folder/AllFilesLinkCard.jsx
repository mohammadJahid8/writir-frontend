import React from 'react'
import { dateFormatter } from '../../helpers/timeConverter'
import { Card } from '../card/card'

const AllFilesLinkCard = ({ iconSrc, title, subtitle, date, onIconClick, className, modalName }) => {
    return (
        <Card className={`p-3 ${className}`}>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={iconSrc} alt="icon" className="me-3" style={{ width: '40px', height: '40px', objectFit: "contain" }} />
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-1">
                            <div className="text-primary">•</div>
                            <p className="mb-0 ms-2 h6">{title}</p>
                        </div>
                        <p className="text-muted mb-0" style={{ fontSize: "12px", marginLeft: "12px" }}>
                            {subtitle} <span className="text-center" style={{ fontSize: '10px' }}>•</span> {dateFormatter(date)}
                        </p>
                    </div>
                </div>
                <i className="bi bi-three-dots-vertical" data-bs-toggle="modal" data-bs-target={`#${modalName}`} style={{ cursor: 'pointer' }} onClick={onIconClick}></i>
            </div>
        </Card>
    )
}

export default AllFilesLinkCard