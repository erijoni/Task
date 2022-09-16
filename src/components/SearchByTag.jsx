import React from "react";

const SearchByTag = (props) => {
  return (
    <div className="search">
      <label htmlFor="" style={{ fontSize: "18px" }}>
        Search Notesby Tag
      </label>
      <input
        type="text"
        placeholder="search Tag only ex:monday"
        onChange={(e) => props.setSearchTab(e.target.value)}
        value={props.searchTab}
        className="input"
      />
    </div>
  );
};

export default SearchByTag;
