import React from 'react'
import rantirLogoWhite from '../../assets/rantirlogoWhite.png';

const AddWorkspaceButton = ({ onClick }) => {
    return (
        <div className='d-flex'>
            <img alt="static logo" src={rantirLogoWhite} style={{ height: "19px", width: "19px", marginTop: "4px", marginRight: "4px" }} />
            <div
                onClick={onClick}
                className='d-flex'
                style={{ width: "120px", height: "25px", borderRadius: "6px", border: "0.92px", backgroundColor: " hsla(0, 100%, 100%, 0.50)", cursor: "pointer" }}>
                <i className="bi bi-plus"></i>
                <p style={{ fontSize: "12px", marginTop: "4px" }}>Add a workspace</p>
            </div>
        </div>
    )
}

export default AddWorkspaceButton