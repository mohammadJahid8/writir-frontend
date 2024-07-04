import { Link } from "react-router-dom";
import star from "../../assets/star.png";
import StarIcon from "../../components/icon/StarIcon";

const Popup = ({
  showPopup,
  toggleAdditionalCard,
  handleClosePopup,
  showAdditionalCard,
  iconColor,
}) => {
  return (
    <>
      {showPopup && (
        <div className={`mt-4 popup-position ${showPopup ? "show" : ""}`}>
          <div
            className="card text-white popup-transition"
            style={{
              width: "386px",
              height: "321px",
              backgroundColor: "#1e1e1e",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              className="bg-light"
              style={{ height: "150px", position: "relative" }}
            >
              <object
                style={{ height: "150px", width: "100%" }}
                data="https://www.youtube.com/v/ZJHsVpobW1U"
                type="application/x-shockwave-flash"
                allowFullScreen={true}
              >
                <embed
                  style={{ height: "140px", width: "100%" }}
                  src="https://www.youtube.com/v/ZJHsVpobW1U"
                  type="application/x-shockwave-flash"
                  allowFullScreen={true}
                />
              </object>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-start mb-3">
                <img
                  alt="star"
                  src={star}
                  style={{ marginRight: "8px", marginTop: "2px" }}
                />
                <div>
                  <h5 className="card-title font-inter text-white text-bold mb-0 popup-text">
                    Welcome to Rantir
                  </h5>
                  <p className="card-text font-inter text-white mt-2 popup-text">
                    Rantir lets you think bigger, create dashboards and visual
                    views faster and save time for every project without
                    integrations.{" "}
                    <span
                      onClick={toggleAdditionalCard}
                      className="text-white popup-text"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      How to get Started
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAdditionalCard && (
        <div
          className={`mt-4 popup-position ${showAdditionalCard ? "show" : ""}`}
        >
          <div
            className="card text-white popup-transition"
            style={{
              width: "386px",
              height: "321px",
              backgroundColor: "#1e1e1e",
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Close button */}
            <button
              className="btn-close text-reset pe-2"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: "1",
              }}
              onClick={handleClosePopup}
            ></button>

            <div
              className="bg-white d-flex justify-content-center align-items-center"
              style={{ height: "140px" }}
            >
              <StarIcon height={30} width={40} color={iconColor} />
            </div>

            <div className="card-body">
              <div>
                <StarIcon height={30} width={40} color={iconColor} />
                <div className="mt-1 ps-2">
                  <p className="card-text font-inter popup-text mt-2">
                    Lets you think bigger create faster, work smarter save time
                    for every Project.
                  </p>
                  <div className="d-flex justify-content-end">
                    <p
                      className="text-light font-inter popup-text"
                      style={{ fontWeight: "bold", fontSize: "12px" }}
                    >
                      Learn More
                    </p>
                    <Link
                      to="https://www.rantir.com/documentation/support-articles/get-started"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-inter ps-2 text-decoration-none popup-text"
                      style={{ fontWeight: "bold", fontSize: "12px" }}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
