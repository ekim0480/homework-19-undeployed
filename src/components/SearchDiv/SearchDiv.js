import React from "react";
import SearchInput from "../SearchInput/SearchInput.js";
import "./SearchDiv.css";

function SearchDiv({ handleSearchChange }) {
  return (
    <div className="container-fluid" id="searchContainer">
      <div className="search-area col-4">
        <SearchInput handleSearchChange={handleSearchChange} />
      </div>
    </div>
  );
}
export default SearchDiv;
