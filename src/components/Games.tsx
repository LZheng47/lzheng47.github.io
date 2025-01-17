import React, { useState } from "react";
import "../styles/components/games.scss";
import project from "./../helper.tsx";

/* Types & Interfaces */
interface Props {
  projects: project[];
}

const Games = ({ projects }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(projects.length / 4); // 4 items per slide

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Function to slice the array for the current slide
  const currentProjects = projects.slice(
    currentIndex * 4,
    (currentIndex + 1) * 4
  );

  return (
    <>
      {/* Slides */}
      <div className="slider">
        {/* Slides Project Cards */}
        {currentProjects.map((project, index) => (
          <div key={index} className="slider-project-card">
            <img className="centered-img" src={`./images/websites/${project.header.toLowerCase().replaceAll(" ", "_")}/${project.image[0]}`}/>
            <div className="slider-project-card-content overlay-1">
              <h3 className="project-date">{`${project.date.year} ${project.date.month.substring(0,3)}`}</h3>
              <h1 className="project-title">{project.header}</h1>
              <h2 className="project-tags">{project.tags.join(" | ")}</h2>

              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slides Controls */}
      <div className="slider-controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </>

    /*
    <div className="slider-container">
      <div className="slider">
        
          {currentProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.header}</h3>
              <p>{project.tags.join(" | ")}</p>
            </div>
          ))}
      </div>
      <div className="controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
    */
  );
};

export default Games;
