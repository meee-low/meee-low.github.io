import React from "react";
import ProjectData from "../interfaces/ProjectProps";

import CodeLink from "./micro_components/CodeLink";
import ToolBadgesWithText from "./micro_components/ToolBadgesWithText";

const ProjectCarouselSlide: React.FC<{
  project: ProjectData;
  isActive: boolean;
}> = ({ project, isActive }) => {
  const {
    title,
    description,
    skills,
    languagesAndFrameworks,
    additionalInfo,
    imagePath,
    projectUrl,
    highlighted,
    hidden,
  } = project;

  if (highlighted && !hidden) {
    return (
      <div className={`project-slide ${isActive ? "active" : ""}`}>
        <div className="card-image">
          <img src={imagePath} alt={title} className="carousel-image"/>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <ToolBadgesWithText languagesAndFrameworks={languagesAndFrameworks} />
          <p>{description}</p>
          <div className="skills-area">
            <h4>Skills:</h4>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="link-area">
            <CodeLink url={projectUrl} />
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default ProjectCarouselSlide;
