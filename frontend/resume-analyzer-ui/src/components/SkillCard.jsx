import React from "react";

const SkillCard = ({ skill, missing }) => {
  return (
    <div className={`skill-card ${missing ? "missing" : "found"}`}>
      {skill}
    </div>
  );
};

export default SkillCard;
