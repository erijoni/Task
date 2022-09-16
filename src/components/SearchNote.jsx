import React from "react";

const SearchNote = (props) => {
  return (
    <div className="search">
      <label htmlFor="" style={{ fontSize: "18px" }}>
        Search Notes
      </label>
      <input
        type="text"
        placeholder="search by notes"
        onChange={(e) => props.setSearch(e.target.value)}
        value={props.search}
        className="input"
      />
    </div>
  );
};

export default SearchNote;
