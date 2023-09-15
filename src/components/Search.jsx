const Search = ({ handleSearch }) => {
  return (
    <div>
      <input
        onChange={handleSearch}
        type="text"
        className="form-control"
        placeholder="Name"
      />
    </div>
  );
};
export default Search;
