import React, { useState, useEffect } from "react";
import Display from "./Display";
import Form from "./Form";
import SearchByTag from "./SearchByTag";
import SearchNote from "./SearchNote";
import TagSearch from "./TagSearch";

const getDataNotes = () => {
  const data = localStorage.getItem("Notes");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Notes = () => {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [searchTab, setSearchTab] = useState("");
  const [shows, setShow] = useState(false);
  const [shows1, setShows1] = useState(false);

  const [Notes, setNotes] = useState(getDataNotes());

  const handleAdd = (e) => {
    e.preventDefault();

    let noteArray = {
      input,
      category,
    };

    setNotes([...Notes, noteArray]);
    setInput("");
    setCategory("");
  };

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(Notes));
  }, [Notes]);

  return (
    <div className="Wrapper">
      <div className="left-wrapper">
        <div className="input-wrapper">
          <Form
            handleAdd={handleAdd}
            category={category}
            setCategory={setCategory}
            input={input}
            setInput={setInput}
          />
        </div>
        <SearchNote search={search} setSearch={setSearch} />
        <div className="right-wrapper">
          <h1>Display Notes</h1>

          <button onClick={() => setShow(!shows)}>Show Notes </button>
          <Display shows={shows} search={search} input={input} Notes={Notes} />
          {Notes.length < 1 && null}
        </div>
      </div>

      <div className="note-category">
        <SearchByTag searchTab={searchTab} setSearchTab={setSearchTab} />
        <TagSearch
          shows1={shows1}
          searchTab={searchTab}
          category={category}
          Notes={Notes}
        />
        <button onClick={() => setShows1(true)}>Search by Tag</button>
      </div>
    </div>
  );
};

export default Notes;
