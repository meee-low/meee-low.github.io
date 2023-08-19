import React from "react";
import ProjectCarouselSlide from "./ProjectCarouselSlide";
import ProjectData from "../interfaces/ProjectProps";

import projectsData from "../data/projects.json";

const ProjectCarousel: React.FC = () => {
  // Define your highlighted projects here
  const highlightedProjects: ProjectData[] = projectsData.filter(
    (project) => project.highlighted
  );

  return (
    <section className="project-carousel">
      <h2>Highlighted Projects</h2>
      <div className="carousel">
        {highlightedProjects.map((project, index) => (
          <ProjectCarouselSlide key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel;
