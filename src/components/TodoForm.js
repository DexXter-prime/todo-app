import React, { useState, useRef, useEffect } from "react";

const TodoForm = (props) => {
  const [text, setText] = useState(props.edit ? props.edit.text : "");
  const element = useRef(null);

  useEffect(() => {
    element.current.focus();
  }, []);

  const createDate = (props) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = String(today.getFullYear());

    let fullDate = `${dd}.${mm}.${yyyy}`;

    return fullDate;
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitTodo({
      id: Math.floor(Math.random() * 10000),
      text: text,
      complete: false,
      date: createDate(),
    });

    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={text}
          onChange={handleChange}
          ref={element}
        />
        <button type="submit" onClick={handleSubmit}>
          {props.edit ? "Update" : "Add todo"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
