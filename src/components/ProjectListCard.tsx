import React from "react";
import ProjectData from "../interfaces/ProjectProps";

// import ToolBadge from "./micro_components/ToolBadge";
import ToolBadgesWithText from "./micro_components/ToolBadgesWithText";
import CodeLink from "./micro_components/CodeLink";

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

  if (hidden) {
    return <div></div>;
  }
  return (
    <div className="project">
      <div className="image-area">
        <img src={imagePath} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ToolBadgesWithText languagesAndFrameworks={languagesAndFrameworks}/>
      <div className="skills-area">
        <h4>Skills:</h4>
        <ul>
          {skills.map((skill, _) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <CodeLink url={projectUrl}></CodeLink>
      </div>
    </div>
  );
};

export default ProjectListCard;
