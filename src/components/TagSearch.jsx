import React from "react";

const TagSearch = (props) => {
  return (
    <>
      {props.shows1
        ? props.Notes.length > 0 && (
            <div className="note-container">
              <p>
                {props.Notes.filter((dt) => {
                  if (props.searchTab == "") {
                    return null;
                  } else if (
                    dt.category
                      .toLowerCase()
                      .includes(props.searchTab.toLocaleLowerCase())
                  ) {
                    return dt;
                  }
                }).map((dt, index) => {
                  return (
                    <div className="note-item" key={index}>
                      <p>{dt.category} :</p>
                      <p>{dt.input}</p>
                    </div>
                  );
                })}
              </p>
            </div>
          )
        : null}
    </>
  );
};

export default TagSearch;
