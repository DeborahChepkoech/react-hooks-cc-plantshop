import React from "react";

function Header({ searchQuery, handleSearch }) {
  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img" aria-label="plant">
          🌱
        </span>
      </h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for plants"
          value={searchQuery}
          onChange={handleSearch}
          aria-label="Search for plants"
        />
      </div>
    </header>
  );
}

export default Header;
