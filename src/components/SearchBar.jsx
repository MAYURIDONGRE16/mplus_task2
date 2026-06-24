function SearchBar({
  searchText,
  setSearchText,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Search Course"
          value={searchText}
          onChange={(e) =>
            setSearchText(e.target.value)
          }
        />
      </div>

      <div className="col-md-3">
        <select
          className="form-select"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="All">All</option>
          <option value="Completed">
            Completed
          </option>
          <option value="Pending">
            Pending
          </option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;