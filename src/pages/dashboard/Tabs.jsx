const Tabs = () => {
  return (
    <ul
      className="nav nav-pills bg-white p-1 rounded"
      id="pills-tab"
      style={{
        maxWidth: "348px",
        margin: "0 auto",
      }}
    >
      <li className="nav-item">
        <a
          className="nav-link active"
          id="pills-home-tab"
          data-bs-toggle="pill"
          href="#pills-home"
        >
          Explore your Drive
        </a>
      </li>
      <li className="nav-item bg-white">
        <a
          className="nav-link d-flex align-items-center gap-1 "
          id="pills-profile-tab"
          data-bs-toggle="pill"
          href="#pills-profile"
        >
          Explore the Internet{" "}
          <span className="badge bg-secondary text-dark">Soon</span>
        </a>
      </li>
    </ul>
  );
};

export default Tabs;
