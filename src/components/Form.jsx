import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleAdd}>
      <label htmlFor="" style={{ fontSize: "18px" }}>
        Add Notes
      </label>
      <input
        type="text"
        placeholder="Add notes"
        onChange={(e) => props.setInput(e.target.value)}
        value={props.input}
        className="input"
        required
      />
      <select
        value={props.category}
        onChange={(e) => props.setCategory(e.target.value)}
      >
        <option>Select Tag</option>
        <option>Monday Task</option>
        <option>Tuesday Task</option>
        <option>Wednesday Task</option>
        <option>Thursday Task</option>
        <option>Friday Task</option>
      </select>
      <button type="submit">Add Notes</button>
    </form>
  );
};

export default Form;
