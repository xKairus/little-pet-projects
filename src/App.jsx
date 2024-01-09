import Quiz from "./components/Quiz/Quiz";
import Todo from "./components/TodoList/Todo";

const App = () => {
  return (
    <div>
      <div>
        <Quiz />
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
};

export default App;
