import React from "react";
import ProjectData from "../interfaces/ProjectProps";

import CodeLink from "./micro_components/CodeLink";

const ProjectCarouselSlide: React.FC<{ project: ProjectData }> = ({
  project,
}) => {
  const {
    id,
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
      <div className="project">
        <div className="card-image">
          <img src={imagePath} alt={title} />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div>
            <h4>Skills:</h4>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <CodeLink url={projectUrl} />
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default ProjectCarouselSlide;
