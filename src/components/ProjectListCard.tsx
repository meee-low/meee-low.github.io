import React from "react";
import ProjectData from "../interfaces/ProjectProps";

const ProjectListCard: React.FC<{ project: ProjectData }> = ({ project }) => {
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

  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imagePath} alt={title} />
      <div>
        <a href={projectUrl}>Code</a>
      </div>
    </div>
  );
};

export default ProjectListCard;
