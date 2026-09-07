import React from "react";

const ScoreCard = ({ title, score }) => {
  return (
    <div className="score-card">
      <h3>{title}</h3>
      <p>{score}%</p>
    </div>
  );
};

export default ScoreCard;
