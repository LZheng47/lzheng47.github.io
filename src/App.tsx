import projectData from "../json/projects.json";
import "./styles/hero.scss";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import Section from "./components/Section";
import Connect from "./components/Connect.tsx";
import Latest from "./components/Latest.tsx";

const navitems = [
  "Connect",
  "Latest",
  "Websites",
  "logo",
  "Games",
  "Programs",
  "EXP/EDU",
];

function App() {
  return (
    <>
      <div id="hero-background"></div>
      <div id="grid">
        <div id="hero">
          <Navbar links={navitems} />
          <div id="hero-ui">
            <div id="hero-content">
              <div id="hero-content-left">
                <h3> Hey! My name is </h3>
                <h1> Lily Zheng </h1>
                <p>
                  A passionate computer programmer with experience in
                  <strong> Python</strong>, <strong>Java</strong>, &
                  <strong> Web Development</strong>.
                </p>
              </div>
              <div id="hero-content-right">
                <img src="/images/logo.png" />
              </div>
            </div>
            <MusicPlayer start_time="20:05" end_time="20:24" />
          </div>
        </div>
        <Section
          heading={projectData.connect.heading}
          description={projectData.connect.description}
        >
          <Connect platforms={projectData.connect.platforms}/>
        </Section>
        <Section
          heading={projectData.latest.heading}
          description={projectData.latest.description}
        >
          <Latest projects={projectData.latest.projects}/>
        </Section>
      </div>
    </>
  );
}

export default App;

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
