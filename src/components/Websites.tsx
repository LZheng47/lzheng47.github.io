import { useState } from "react";
import "../styles/components/websites.scss";
import MusicPlayer from "./../components/MusicPlayer";

/* Types & Interfaces */
type project = {
  header: string;
  description: string;
  tags: string[];
  date: { [key: string]: string };
  image: string[];
  link: { [key: string]: string };
};

interface Props {
  projects: project[];
}

function Websites({ projects }: Props) {
    /* Use States */
    const [selectedWebsiteIndex, setSelectedWebsiteIndex] = useState(0); // index of selected website, default 0

    /* Event Handlers */
    function handleScrollbarClick(index:number){
        setSelectedWebsiteIndex(index);
    }


  return (
    <>
      {/* Image of selected project - Behind */}
      <div id="websites-selected-img-div">
        {/* !TEMP - Replace Image Index */}
        <img
          className="centered-img"
          src={`./images/websites/${projects[selectedWebsiteIndex].header
            .toLowerCase()
            .replaceAll(" ", "_")}/${projects[selectedWebsiteIndex].image[2]}`}
        ></img>
      </div>

      {/* Scrollbar & selected project - In Front */}
      <div id="websites-content">
        {/* Left Scrollbar */}
        <div id="websites-scrollbar">
          {projects.map((currProject, index) => (
            <div
              key={"websites-project-" + index}
              className={`websites-scrollbar-project${index==selectedWebsiteIndex ? " websites-scrollbar-project-active" : ""}`}
              onClick={() => (handleScrollbarClick(index))}
            >
              {/* !TEMP - Replace image */}
              <div className="centered-img-div">
                <img
                  className="centered-img"
                  src={`./images/websites/${currProject.header
                    .toLowerCase()
                    .replaceAll(" ", "_")}/${currProject.image[0]}`}
                ></img>
              </div>
              <div>
                {/* Scrollbar Project Date */}
                <h3 className="project-date">
                  {currProject.date.year +
                    " " +
                    currProject.date.month.substring(0, 3)}
                </h3>
                {/* Scrollbar Project Title */}
                <h1 className="project-title">{currProject.header}</h1>
                {/* Scrollbar Project Tags */}
                <h2 className="project-tags">{currProject.tags.join(" | ")}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Content of selected project */}
        <div id="websites-selected-content">
          <h1 className="project-title">
            {projects[selectedWebsiteIndex].header}
          </h1>
          <h2 className="project-tags">
            {projects[selectedWebsiteIndex].tags.join(" | ")}
          </h2>
          <p className="project-description">
            {projects[selectedWebsiteIndex].description}
          </p>
          <MusicPlayer
            start_time={projects[selectedWebsiteIndex].date.month.toUpperCase()}
            end_time={
              projects[selectedWebsiteIndex].date.year.substring(0, 2) +
              ":" +
              projects[selectedWebsiteIndex].date.year.substring(2)
            }
            live_demo_link={projects[selectedWebsiteIndex].link.live_demo}
          />
        </div>
      </div>
      {/* <MusicPlayer start_time="20:05" end_time="20:25" /> */}
    </>
  );
}

export default Websites;
