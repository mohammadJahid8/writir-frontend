import { Link, useNavigate } from "react-router-dom";


import { useContext, useEffect, useState } from "react";
import { AppSettings } from "../../config/app-settings";
import { UserContext } from "../../context/context";

import api from "../../api/axios";
import Tabs from "./Tabs";
import Input from "./Input";
import ppt from "../../assets/ppt.png";
import figma from "../../assets/figma.png";
import { Card } from "../../components/card/card";
import SocialMediaButton from "../../components/buttons/SocialMediaButton";
import AllFilesLinkCard from "../../components/Folder/AllFilesLinkCard";

function Dashboard() {
  const context = useContext(AppSettings);
  // eslint-disable-next-line
  const { user, handleGetFolders, loadingFolders, folders } =
    useContext(UserContext);
  const [query, setQuery] = useState('');



  const navigate = useNavigate();
  const token = localStorage.getItem("rantirToken");
  const [submitting, setSubmitting] = useState(false);
  // using states for getting project data
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    context.setAppFooter(false);
  }, [context]);




  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, color, user: user?._id };
    setSubmitting(true);
    try {
      const res = await api.post("/folder", formData);
      if (res.status === 200) {
        handleGetFolders();
        document
          .getElementById("modalstartproject")
          .setAttribute("data-dismiss", "modal");
        document
          .getElementById("modalstartproject")
          .classList.remove("show", "d-block");
        document
          .querySelectorAll(".modal-backdrop")
          .forEach((el) => el.classList.remove("modal-backdrop"));

        setName("");
        setColor("#ffffff");
        alert("Folder created successfully");


      }
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setColor("#ffffff");

      setSubmitting(false);
    }
    console.log("Form Data Submitted:", formData);
  };

  useEffect(() => {
    handleGetFolders();
  }, []);

  if (!user && !token) {
    alert("Please Login");
    navigate("/pages/login");
    return;
  }

  const cardData = [
    {
      title: "Drive",
      description:
        "Explore the Computir Drive &  Knowledge graph to manage all of your enterprise data",
      button: "Add a Folder",
      variant: "primary",
      icon: "/explore.svg",
    },
    {
      title: "Dashboards",
      description:
        "Build AI-first portals, applications and smart web backend experiences with Rantir",
      button: "Linked",
      variant: "badge",
      icon: "/rantir.svg",
    },
    {
      title: "Documents",
      description:
        "Use Writir with as your AI writing copilot for wireframing, publishing, proposals and the new age SEO.",
      button: "Add a Folder",
      variant: "badge",
      icon: "/card_docs.svg",
    },
  ];
  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="dashboard">
      <h1 className="page-header mb-4 text-center">
        Hi, {user?.name}.{" "}
        <small>Explore your Computir Drive or The Internet or both</small>
      </h1>
      <div className="d-flex flex-column gap-3 mx-auto">
        <Tabs />


        <Input
          onSubmit={handleSearch}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="row mt-1">
          {cardData?.map((data, index) => (
            <div className="col-12 col-md-4 mb-3">
              <Card key={index} className="p-3 h-100">
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <img
                      src={data?.icon}
                      alt="explore"
                      style={{
                        width: "23px",
                        height: "23px",
                      }}
                    />
                    {data.variant === "primary" ? (
                      <span className="badge bg-primary text-white px-4 py-2" href="#modalstartproject" data-bs-toggle="modal">
                        {data.button}
                      </span>
                    ) : (
                      <span
                        className="badge bg-white text-muted border-1 px-3 py-1"
                        style={{
                          border: "1px solid #DBDBDB",
                        }}
                      >
                        {data.button}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-muted fw-bold mb-0 fw-bolder">
                      {data.title}
                    </p>
                    <div className="mt-2">{data.description}</div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="d-flex justify-content-between w-full">
          <h5 className="fw-light mb-4 mt-4">Your Drive</h5>
          <div className="d-flex align-items-center gap-2">
            <SocialMediaButton
              imageSrc="/connect.svg"
              label="Connect to an Link"
              classname="bg-light py-1"
              border="1px solid #D1D9E7"
            />
            <SocialMediaButton
              imageSrc="/upload.svg"
              label="Upload a Document"
              classname="bg-light py-1"
              border="1px solid #D1D9E7"
            />
          </div>
        </div>
        <div className="gap-1 d-flex flex-column">
          <AllFilesLinkCard
            iconSrc={ppt}
            title="powerpoint.ppt"
            subtitle="Cloud"
            date="2024-06-14T18:14:35.797Z"
            modalName={"pptModal"}
          />
          <AllFilesLinkCard
            iconSrc={figma}
            className={"bg-light"}
            title="Social Media Icons (Community)"
            subtitle="Cloud"
            date="2024-06-14T18:14:35.797Z"
          />
        </div>


      </div>

      <div
        className={`modal fade`}
        id="modalstartproject"
        tabIndex="-1"
        aria-labelledby="modalstartprojectLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalstartprojectLabel">
                Add a new folder
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Folder name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g Feature enhancement"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="colorPicker">Pick a color</label>
                  <input
                    type="color"
                    className="form-control"
                    id="colorPicker"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <a
                  href="#/"
                  className="btn btn-default"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <button
                  type="submit"
                  className="btn btn-theme"
                  data-bs-dismiss="modal"
                  disabled={submitting}
                >
                  {submitting ? "Creating..." : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Dashboard;
