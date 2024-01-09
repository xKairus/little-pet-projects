import "./../../styles/Todo/TodoItems.css";
import cross from "./../../assets/cross.png";
import tick from "./../../assets/tick.png";
import not_tick from "./../../assets/not_tick.png";

const TodoItems = ({ setTodos, no, display, text }) => {
  // Function to delete a todo
  const deleteTodo = (no) => {
    // Retrieve todos from localStorage
    let data = JSON.parse(localStorage.getItem("todos"));

    // Filter out the todo with the specified 'no'
    data = data.filter((todo) => todo.no !== no);

    // Update the todos state with the modified data
    setTodos(data);
  };

  // Function to toggle the display style of a todo
  const toggle = (no) => {
    // Retrieve todos from localStorage
    let data = JSON.parse(localStorage.getItem("todos"));

    // Iterate through todos to find the one with the specified 'no'
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        // Toggle the 'display' style property (line-through or empty)
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }

    // Update the todos state with the modified data
    setTodos(data);
  };

  // JSX for rendering the TodoItems component
  return (
    <div className="todoitems">
      <div
        onClick={() => {
          toggle(no);
        }}
        className={`todoitems-container ${display}`}
      >
        {display === "" ? (
          <img src={not_tick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}
        <div className="todoitems-text">{text}</div>
      </div>
      <img
        onClick={() => {
          deleteTodo(no);
        }}
        src={cross}
        alt=""
        className="todoitems-cross-icon"
      />
    </div>
  );
};

export default TodoItems;
