import React from 'react';

const FolderModal = ({
  modalId,
  title,
  backToFilesText,
  iconSrc,
  fileName,
  fileLink,
  fileNote,
  apiKey,
  folder,
  date,
  fileDetails,
  onDelete,
  onInvite
}) => (
  <div className="modal fade" id={modalId} >
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="row">
          <div className="container mt-2" style={{ marginLeft: "15px", marginRight: "15px" }}>
            <div className=" col-12 d-flex justify-content-between">
              <div className=" d-flex w-25 align-items-center mt-2">
                <p className="h6 mb-0 text-truncate" style={{
                  flex: 1,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginRight: '10px',
                  marginLeft: '15px'
                }}>
                  {title}
                </p>
                <span className="text-muted" style={{ fontSize: '10px' }}>
                  {backToFilesText}
                </span>
              </div>
              <button style={{ marginRight: "35px" }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>
        </div>
        <hr />
        <div className="container mt-2">
          <div className="row">
            <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
              <img src={iconSrc} alt='icon' className="img-fluid" style={{ height: "154px", width: "154px", objectFit: "cover", border:"0.5px solid gray" }} />
            </div>
            <div className="col-12 col-md-9">
              <p style={{}} className="h6">{title}: <span className='text-muted'>{fileName}</span></p>
              <p className="text-muted">{fileLink}</p>
              <p style={{ margin: "0em" }} className="text-muted fw-bold btn btn-default"><i className="bi bi-copy me-2"></i> Copy Link</p>
              <hr />
              <p className='fw-semibold'><i className="bi bi-file-text-fill me-2"></i> File Note</p>
              <p style={{ margin: "0em" }} className="text-muted">{fileNote}</p>
              <hr />
              <p className='fw-semibold' style={{ margin: "0em" }}><i className="bi bi-box me-2"></i> File API Keys</p>
              <p className="text-muted">The following API Key’s for this folder(s) can allow you to share it to other API connectors, AI LLMs or AI Hardware. It will wrap up your files into a single API key that you can share to any third party. </p>
              <div className="bg-light d-flex flex-column flex-lg-row align-items-center p-2">
                <p className="mb-2 mb-md-0 d-flex align-items-center me-3 fw-bold">
                  {apiKey} <i className="bi bi-copy ms-2"></i>
                </p>
                <p className="mb-2 mb-md-0 text-muted me-3">Folder: {folder}</p>
                <p className="mb-2 mb-md-0 me-3">{date}</p>
                <button className="btn btn-dark">Revoke</button>
              </div>
              <hr />
              <div>
                <p><i className="bi bi-file-text-fill me-2"></i>File Details  </p>
                <div>
                  {fileDetails.map((detail, index) => (
                    <p className="fw-bold" style={{ margin: "0em" }} key={index}>{detail.label}: <span className='text-muted'>{detail.value}</span></p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container mb-2">
          <div className="row">
            <div className="col-12 d-flex flex-column flex-lg-row justify-content-between w-100">
              <div className="col-12 col-lg-auto mb-2 mb-lg-0">
                <button
                  className="btn btn-outline-danger w-100"
                  onClick={onDelete}
                  style={{color: "black"}}
                >
                  Delete File
                </button>
              </div>
              <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center w-100 w-lg-auto justify-content-lg-end">
                <div className="col-12 col-lg-auto mb-2 mb-lg-0 mt-lg-2 me-lg-3">
                  <p
                    className="h6 text-muted btn w-100"
                    style={{ border: "0.5px solid gray" }}
                  >
                    Chat and Explore this File
                  </p>
                </div>
                <div className="col-12 col-lg-auto">
                  <button className="btn btn-primary w-100" onClick={onInvite}>
                    Invite others and Create a Share Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
);

export default FolderModal;
