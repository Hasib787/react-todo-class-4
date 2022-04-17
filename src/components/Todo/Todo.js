import React, { useState, useEffect } from "react";

const Todo = () => {
//   const [todos, setTodos] = useState("");
//   const [todoItem, setTodoItem] = useState([]);
  const [count, setCount] = useState(0);



  useEffect(() => {
    console.log("call useEffect");
  },[count]);

  return (
    <div>
        {console.log("Rerander")}
      <h4>Count:{count}</h4>
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  );
};

export default Todo;


// const handleChange = (e) => {
//     setTodos(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     setTodoItem([...todoItem, todos]);
//     setTodos("");
//   };