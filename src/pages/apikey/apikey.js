import FolderCard from "../../components/Folder/FolderCard";
import { Card } from "../../components/card/card";

function ApiKeyPage() {
  return (
    <div className="max-w">
      <div className="col-xl-12">
        <div className="row max-w">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#/">Explore</a>
            </li>
            <li className="breadcrumb-item active">API Key</li>
          </ul>

          <h1 className="page-header">
            Manage your API Keys <small>active sync</small>
          </h1>

          <hr className="mb-4" />
        </div>
        <div className="row max-w">
          <p className="h6 mb-3">
            API Calls are a part of the Computir Suite & Associated Partner
            Applications.{" "}
            <span className="text-underline">
              View the essential Apps in your Plan
            </span>
          </p>
          <div className="col-12 mb-3">
            <FolderCard
              title={"All Past API Keys"}
              subTitle={
                "The following API Key’s for this folder(s) can allow you to share it to other API connectors, AI LLMs or AI Hardware. It will wrap up your files into a single API key that you can share to any third party."
              }
              icon={"bi bi-box"}
            >
              <div className="row p-2 bg-secondary bg-opacity-10  align-items-center">
                <div className="col-md-8 d-flex align-items-center mb-2 mb-md-0">
                  <p className="mx-1 mx-md-2 mb-0">
                    SGJ3W235HSLIKA8PAD8Y7 KLSHDFA
                  </p>
                  <i className="fa-regular fa-copy"></i>
                </div>
                <div className="col-md-4 d-flex justify-content-between align-items-center">
                  <p className="text-muted mb-0">Folder: Designer</p>
                  <p className="text-muted mb-0">May 2, 2024</p>
                  <button type="button" className="btn btn-dark">
                    Revoke
                  </button>
                </div>
              </div>
            </FolderCard>
          </div>
        </div>
        <div className="row max-w">
          <div className="col-12 mb-3">
            <Card className="p-3 h-100 w-100">
              <p className="fw-semibold">Token</p>
              <div class="input-group mb-3 api-input">
                <input
                  type="text"
                  class="form-control api-input-field"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-dark api-input-button"
                    type="button"
                    id="button-addon2"
                  >
                    Save
                  </button>
                </div>
              </div>
              <p className="fw-semibold">Type</p>
              <div className="d-flex align-items-center  ">
                <div className="form-check me-2">
                  <input
                    className="form-check-input custom-radio"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label className="" for="exampleRadios1">
                    External
                  </label>
                </div>
                <div className="form-check me-2">
                  <input
                    className="form-check-input custom-radio"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="" for="exampleRadios2">
                    Internal
                  </label>
                </div>
              </div>
              <small className="text-muted mt-3">
                Ensure that you use the appropriate API key for the intended
                purpose and never utilize the internal API in a client-side
                implementation.
              </small>
              <Card className="p-3 h-100 w-100 mt-3">
                <p>Select Folder</p>
                <div className="form-check mt-2">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className=" fw-semibold" for="flexCheckDefault">
                    List Media Folders
                  </label>
                </div>

                <div class="form-check mt-2">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label for="flexCheckDefault" className=" fw-semibold">
                    Create Media Folder
                  </label>
                </div>
                <div class="form-check mt-2">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label for="flexCheckDefault" className="fw-semibold">
                    Edit Media Folder
                  </label>
                </div>
                <div class="form-check mt-2">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label for="flexCheckDefault" className="fw-semibold">
                    Trash Media Folder
                  </label>
                </div>
                <div class="form-check mt-2">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label for="flexCheckDefault" className="fw-semibold">
                    Delete Media Folder
                  </label>
                </div>
                <div class="form-check mt-2">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label for="flexCheckDefault" className="fw-semibold">
                    List Media Files
                  </label>
                </div>
                <div class="form-check mt-2">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label for="flexCheckDefault" className="fw-semibold">
                    Create Media File
                  </label>
                </div>
                <div class="form-check mt-2">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label for="flexCheckDefault" className="fw-semibold">
                    Edit Media File
                  </label>
                </div>
                <div class="form-check mt-2">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label for="flexCheckDefault" className="fw-semibold">
                    Trash Media File
                  </label>
                </div>
                <div class="form-check mt-2">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label for="flexCheckDefault" className="fw-semibold">
                    Delete Media File
                  </label>
                </div>
              </Card>
              <div class="form-check mt-4">
                <input
                  className="form-check-input custom-checkbox"
                  type="checkbox"
                  value=""
                  id="permission"
                />
                <label for="permission" className="fw-semibold">
                  Give special permissions
                </label>
              </div>
              <p className="text-muted mt-3">
                Choosing this option will grant this API key special access to
                the Cloudify API, bypassing any established API limitations,
                such as rate limits, domain blacklists, and IP blacklists. This
                can be useful if you do not want your personal API keys to be
                restricted.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiKeyPage;
