import React, { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState('');
    const [todoItem, setTodoItem] = useState([]);

    const handleChange = (e) => {
        setTodos(e.target.value);
    }

    const handleSubmit = (e) => {
        setTodoItem([...todoItem,todos]);
        setTodos('');
    }

    return (
        <div>
            <h4>Todo List: {todoItem + " "} </h4>
            <input type="text"
                placeholder="Enter Todo"
                value={todos}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default Todo;