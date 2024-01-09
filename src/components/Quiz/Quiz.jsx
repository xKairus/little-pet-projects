import "./../../styles/Quiz/Quiz.css";

const Quiz = () => {
  return (
    <div className="quiz container">
      <h2 className="quiz-title">Quiz App</h2>
      <hr />
      <h3 className="quiz-question">Which?</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <button className="quiz-btn">Next</button>
      <div className="quiz-index">1 of 5 questions</div>
    </div>
  );
};

export default Quiz;
