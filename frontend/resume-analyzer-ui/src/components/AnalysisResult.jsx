import React from "react";
import ScoreCard from "./ScoreCard";
import SkillCard from "./SkillCard";

const AnalysisResult = ({ result }) => {
  if (!result) return null;

  return (
    <div className="analysis-result">
      <h2>Analysis Dashboard</h2>
      <ScoreCard title="Overall Match Score" score={result.matchScore} />

      <h3>Resume Summary</h3>
      <p>{result.summary}</p>

      <h3>Skills</h3>
      <div className="skills">
        {result.skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} missing={false} />
        ))}
      </div>

      <h3>Missing Skills</h3>
      <div className="skills">
        {result.missingSkills.map((skill, i) => (
          <SkillCard key={i} skill={skill} missing={true} />
        ))}
      </div>

      <h3>ATS Keywords</h3>
      <p>{result.atsKeywords.join(", ")}</p>

      <h3>Improvement Suggestions</h3>
      <ul>
        {result.suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalysisResult;
