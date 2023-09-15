const FilteredContainer = ({ filters, setFilters }) => {
  return (
    <div className="py-4 d-flex justify-content-between align-items-center">
      <div>
        <button
          className="btn btn-outline-primary me-4"
          onClick={() =>
            setFilters((prev) => {
              return { ...prev, country: "All" };
            })
          }
          style={{ backgroundColor: "#46139f", color: "#fff" }}
        >
          All Contacts
        </button>
        <button
          onClick={() =>
            setFilters((prev) => {
              return { ...prev, country: "United States" };
            })
          }
          className="btn btn-outline-warning"
          style={{ backgroundColor: "#ff7f50", color: "#fff" }}
        >
          US Contacts
        </button>
      </div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={filters?.isEven}
            onChange={() =>
              setFilters((prev) => {
                return { ...prev, isEven: !filters?.isEven };
              })
            }
          />
          <label className="form-check-label" for="flexCheckDefault">
            Only Even
          </label>
        </div>
      </div>
    </div>
  );
};
export default FilteredContainer;
