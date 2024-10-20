import React from "react";

function Question({
  question,
  options,
  handleAnswerOptionClick,
  questionIndex,
  totalQuestions,
  isAnswered, 
}) {
  return (
    <div className="question-section">
      <div className="question-count">
        <span>Question {questionIndex}</span>/{totalQuestions}
      </div>
      <div className="question-text">{question}</div>
      <div className="answer-section">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option)}
            disabled={isAnswered} 
            className={isAnswered ? "disabled" : ""}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
