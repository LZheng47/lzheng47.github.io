import projectData from "../../json/projects.json";
import "../styles/components/latest.scss";

type currDirectoryType = ["websites" | "games" | "programs", "projects", String]; 

function Latest() {
  let featuredProjects = [];
  let projectDirectories = projectData.latest.projects;

  // populate featured_projects with the dictionary for ith project in project_directories
  for(let i = 0; i < projectDirectories.length; i++){
    let currDirectory : currDirectoryType = projectDirectories[i].split("/");
    let projectDict = projectData[currDirectory[0]]["projects"][parseInt(currDirectory[2])];
  
    // include projectType into dictionary
    projectDict["projectType"] = currDirectory[0];
    featuredProjects.push(projectDict);
  }

  function setClassName(e){
    // get parentElement of e.target HTML element until obtained .latest-project-div
    let parElement = e.target;
    while(!parElement.className.split(" ").includes("latest-project-div")){
      parElement = parElement.parentElement;
    }

    // set all project divs to inactive
    let projectDivs = parElement.parentElement.children;
    for(let i = 0; i < projectDivs.length; i++){
      projectDivs[i].className = "latest-project-div latest-project-div-inactive";
    }

    // set selected project div to active
    parElement.className = "latest-project-div latest-project-div-active";

  }

  return (
    <>
      {featuredProjects.map((currProject, index) => (
        <div key={index} className={index == 0 ? "latest-project-div latest-project-div-active" : "latest-project-div latest-project-div-inactive"} onClick={(e) => setClassName(e)}> 
          <img src={`./images/${currProject.projectType}/${currProject.header.toLowerCase().replaceAll(" ", "_")}/${currProject.image[Math.floor(Math.random() * (currProject.image.length))]}`}></img>
          <div className="latest-project-content">
            <h3> {`${currProject.date.year} ${currProject.date.month.substring(0,3)}`} </h3>
            <div>
              <div className="project-header">
                <h1> {currProject.header} </h1>
                <div className="project-links">
                  {Object.entries(currProject.link).map(([linkType, link]) => /* use Object.entries() to map a dictionary */
                    <a key={linkType} href={link} target="_blank">
                      <img src={`./images/icons/${linkType}.png`}></img>
                    </a>
                  )  }
                </div>
              </div>
              <h2> {currProject.tags.join(" | ")} </h2>
              <div className="latest-hr"></div>
              <p> {currProject.description} </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Latest;
