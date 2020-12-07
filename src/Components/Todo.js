import React, { useState } from "react";
import "./todolist.css";

function Todo() {
  const [item, additem] = useState("");
  const [listItem, addlist] = useState([]);

  const onsubmit = (e) => {
    e.preventDefault();
    if (item === "") return;
    addtodo();
    additem("");
    console.log(listItem);
  };

  const addtodo = () => {
    addlist([
      ...listItem,
      {
        value: item,
        key: new Date(),
      },
    ]);
  };
  const removeitem = (key) => {
    const updatedlist = listItem.filter((item) => item.key !== key);
    addlist(updatedlist);
  };

  return (
    <div className="app">
      <h1> MY TODO LIST</h1>
      <form onSubmit={onsubmit} className="input">
        <input
          type="text"
          value={item}
          onChange={(e) => additem(e.target.value)}
        ></input>
        <button type="submit">
          <i class="fas fa-plus-circle"></i>
        </button>
      </form>
      <ol className="list">
        {listItem.map((item) => (
          <li key={item.key}>
            {item.value}
            <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => removeitem(item.key)}
            ></i>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Todo;
