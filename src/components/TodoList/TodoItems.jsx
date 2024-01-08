import "./../../styles/Todo/TodoItems.css";
import cross from "./../../assets/cross.png";
import tick from "./../../assets/tick.png";
import not_tick from "./../../assets/not_tick.png";

const TodoItems = ({ setTodos, no, display, text }) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

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
