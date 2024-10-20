import React from "react";

function ProgressBar({ currentQuestion, totalQuestions }) {
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
