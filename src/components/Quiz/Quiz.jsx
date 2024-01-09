import { useState } from "react";
import { quizData } from "../../assets/quizData";
import "./../../styles/Quiz/Quiz.css";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(quizData[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  const checkAns = (e, answer, isCorrect) => {
    if (!lock) {
      if (isCorrect) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
      }
    }
    setLock(true);
  };



  return (
    <div className="quiz container">
      <h2 className="quiz-title">Quiz App</h2>
      <hr />
          <h3 className="quiz-question">
            {index + 1}. {question.question}
          </h3>
          <ul className="quiz-list">
            {question.options.map((option, index) => (
              <li
                key={index}
                className="quiz-option"
                onClick={(e) => {
                  checkAns(e, option, option === question.answer);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
          <button className="quiz-btn" >
            NEXT
          </button>
          <div className="quiz-index">
            {index + 1} of {quizData.length} questions
          </div>


    </div>
  );
};

export default Quiz;
