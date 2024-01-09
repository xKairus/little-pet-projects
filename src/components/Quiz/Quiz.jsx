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

  const next = () => {
    if (lock === true) {
      if (index === quizData.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(quizData[index]);
      setLock(false);
      document.querySelectorAll(".quiz-option").forEach((option) => {
        option.classList.remove("correct", "wrong");
      });
    }
  };

  return (
    <div className="quiz container">
      <h2 className="quiz-title">Quiz App</h2>
      <hr />
      {result ? (
        <>
          <h3 className="quiz-question">You Scored {score} out of {quizData.length}</h3>
          <button className="quiz-btn">RESET</button>
        </>
      ) : (
        <>
          {" "}
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
          <button className="quiz-btn" onClick={next}>
            NEXT
          </button>
          <div className="quiz-index">
            {index + 1} of {quizData.length} questions
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
