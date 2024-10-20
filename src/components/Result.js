import React from "react";

function Result({ score, totalQuestions }) {
  return (
    <div className="result-section">
      <h1>Quiz Completed!</h1>
      <h2>
        Your Score: {score} out of {totalQuestions}
      </h2>
    </div>
  );
}

export default Result;
