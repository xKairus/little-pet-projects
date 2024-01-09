import { useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import Todo from "./components/TodoList/Todo";

const App = () => {
  // Array of components to switch between
  const components = [<Quiz key="quiz" />, <Todo key="todo" />];

  // State to track the active component index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to switch to the next or previous component
  const switchToComponent = (direction) => {
    const lastIndex = components.length - 1;
    let newIndex;

    // Determine the new index based on the direction
    if (direction === "next") {
      newIndex = activeIndex < lastIndex ? activeIndex + 1 : 0;
    } else {
      newIndex = activeIndex > 0 ? activeIndex - 1 : lastIndex;
    }

    // Set the new active index
    setActiveIndex(newIndex);
  };

  // Function to render the active component
  const renderComponent = () => {
    return components[activeIndex];
  };

  return (
    <div className="page">
      <h1 className="header">Little Pet Projects</h1>
      <div className="main">
        <button
          onClick={() => switchToComponent("prev")}
          className="component-btn left-btn"
        >
          &lt;
        </button>
        <div>{renderComponent()}</div>
        <button
          onClick={() => switchToComponent("next")}
          className="component-btn right-btn"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default App;
