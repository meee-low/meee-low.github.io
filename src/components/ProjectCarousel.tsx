import React, { useState, useEffect } from "react";
import ProjectCarouselSlide from "./ProjectCarouselSlide";
import ProjectData from "../interfaces/ProjectProps";

import projectsData from "../data/projects.json";

const ProjectCarousel: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const highlightedProjects: ProjectData[] = projectsData.filter(
    (project) => project.highlighted
  );

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(
      (highlightedProjects.length + index) % highlightedProjects.length
    );
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(
      () => goToSlide(currentSlideIndex + 1),
      10000
    );
    return () => clearInterval(autoSlideInterval);
  }, [currentSlideIndex]);

  return (
    <section className="project-carousel">
      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
        >
          {highlightedProjects.map((project, index) => (
            <ProjectCarouselSlide
              key={index}
              project={project}
              isActive={index === currentSlideIndex}
            />
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={() => goToSlide(currentSlideIndex - 1)}>
          Previous
        </button>
        <div className="indicators">
          {highlightedProjects.map((_, index) => (
            <button
              className="carousel-radio-button"
              onClick={() => goToSlide(index)}
            >
              {index === currentSlideIndex ? "☉" : "O"}
            </button>
          ))}
        </div>
        <button onClick={() => goToSlide(currentSlideIndex + 1)}>Next</button>
      </div>
    </section>
  );
};

export default ProjectCarousel;
