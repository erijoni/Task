import React from "react";

const Display = (props) => {
  return (
    <>
      {props.shows
        ? props.Notes.length > 0 && (
            <div className="note-container">
              <p>
                {props.Notes.filter((dt) => {
                  if (props.search == "") {
                    return dt;
                  } else if (
                    dt.input
                      .toLowerCase()
                      .includes(props.search.toLocaleLowerCase())
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

export default Display;
