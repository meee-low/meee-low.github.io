// FrontPage.tsx
import React from 'react';
import ProjectCarousel from '../components/ProjectCarousel';
import ProjectList from '../components/ProjectList';

const FrontPage: React.FC = () => {
  return (
    <div className="front-page">
      <ProjectCarousel />
      <ProjectList />
    </div>
  );
}

export default FrontPage;
