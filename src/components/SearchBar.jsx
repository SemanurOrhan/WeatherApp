import { useState } from "react";
import PropTypes from "prop-types";
import search_icon from "../icons/search-icon.svg";
import "../styles/SearchBar.css";

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchClick = () => {
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img src={search_icon} alt="Search Icon" onClick={handleSearchClick} />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
