import { useEffect, useRef, useState } from "react";
import "./../../styles/Todo/Todo.css";
import TodoItems from "./TodoItems";

let count = 0;

const Todo = () => {
  // State for managing the list of todos
  const [todos, setTodos] = useState([]);

  // Reference to the input element
  const inputRef = useRef(null);

  // Function to add a new todo
  const add = () => {
    // Update the todos state with a new todo
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);

    // Clear the input field
    inputRef.current.value = "";

    // Save the updated count in localStorage
    localStorage.setItem("todos_count", count);
  };

  // Effect to initialize todos and count from localStorage
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);

  // Effect to update localStorage whenever todos change
  useEffect(() => {
    // Delayed update to localStorage to ensure state is updated
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  // JSX for rendering the Todo component
  return (
    <div className="todo container">
      <h2 className="todo-title">To-Do List</h2>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          className="todo-input"
        />
        <div
          onClick={() => {
            add();
          }}
          className="todo-add-btn"
        >
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return (
            <TodoItems
              key={index}
              setTodos={setTodos}
              no={item.no}
              display={item.display}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
