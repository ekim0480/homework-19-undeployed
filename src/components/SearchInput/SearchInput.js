import React from "react";
import "./SearchInput.css";

function SearchInput({ handleSearchChange }) {
  return (
    <div>
      <form className="form-inline">
        <input
          id="searchInput"
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Employee"
          aria-label="Search"
          onChange={(e) => handleSearchChange(e)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchInput;
