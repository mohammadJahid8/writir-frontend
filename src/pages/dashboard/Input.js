const Input = ({ value, onChange, onSubmit }) => {
  return (
    <div className="home-input-container">
      <form className="menu-search" onSubmit={onSubmit}>
        <div className="menu-search-icon">
          <i className="fa fa-search"></i>
        </div>
        <div className="menu-search-input">
          <input
            value={value}
            onChange={onChange}
            type="text"
            className="form-control"
            placeholder="Search menu..."
          />
        </div>
        <div className="menu-search-icon">
          <i className="fa fa-search"></i>
        </div>
      </form>
    </div>
  );
};

export default Input;
