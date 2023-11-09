import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Index from "./Component/index";
import Resume from "./Component/Intro/Resume";
import SelfIntro from "./Component/Intro/SelfIntro";
import Project1 from "./Component/Project/Project1";
import Project2 from "./Component/Project/Project2";
import Project3 from "./Component/Project/Project3";
import Contest1 from "./Component/Contest/Contest1";
import Contest2 from "./Component/Contest/Contest2";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import Contest from "./Component/Contest";
import Career from "./Component/Career";
import Skills1 from "./Component/Skills/Skills1";
import Skills2 from "./Component/Skills/Skills2";
import Skills3 from "./Component/Skills/Skills3";
import Skills4 from "./Component/Skills/Skills4";
import Introduction from "./Component/Introduction";
import "./App.css";
import Career1 from "./Component/Career/Career1";
import Career2 from "./Component/Career/Career2";

function App() {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleImageClick = (page) => {
    if (page === "resume") {
      setSelectedPage(<Resume />);
    } else if (page === "self-intro") {
      setSelectedPage(<SelfIntro />);
    } else if (page === "project1") {
      setSelectedPage(<Project1 />);
    } else if (page === "project2") {
      setSelectedPage(<Project2 />);
    } else if (page === "project3") {
      setSelectedPage(<Project3 />);
    }
    else if (page === "contest1") {
      setSelectedPage(<Contest1 />);
    } else if (page === "contest2") {
      setSelectedPage(<Contest2 />);
    }

    else if (page === "career1") {
      setSelectedPage(<Career1 />);
    } else if (page === "career2") {
      setSelectedPage(<Career2 />);
    }else if (page === "skills1") {
      setSelectedPage(<Skills1 />);
    } else if (page === "skills2") {
      setSelectedPage(<Skills2 />);
    }else if (page === "skills3") {
      setSelectedPage(<Skills3 />);
    } else if (page === "skills4") {
      setSelectedPage(<Skills4 />);
    }
  };
  

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="header">
          <ul className="nav-list">
            <li style={{ fontSize: "25px", color: "gray", textDecoration: "none", marginLeft: "80px", marginRight: "auto" }}>Portfolio</li>
            <li><Link to="/introduction" style={{ fontSize: "25px", color: "gray", textDecoration: "none" }}>나의소개</Link></li>
            <li><Link to="/skills" style={{ fontSize: "25px", color: "gray", textDecoration: "none" }}>스킬</Link></li>
            <li><Link to="/project" style={{ fontSize: "25px", color: "gray", textDecoration: "none" }}>프로젝트</Link></li>
            <li><Link to="/contest" style={{ fontSize: "25px", color: "gray", textDecoration: "none" }}>공모전</Link></li>
            <li><Link to="/career" style={{ fontSize: "25px", color: "gray", textDecoration: "none" }}>나의경력</Link></li>
          </ul>
        </nav>
        <div className="container">
          <section className="section">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route
                path="/introduction"
                element={<Introduction handleImageClick={handleImageClick} />}
              />
              <Route
                path="/project"
                element={<Project handleImageClick={handleImageClick} />}
              />
              <Route
                path="/contest"
                element={<Contest handleImageClick={handleImageClick} />}
              />
              <Route
                path="/career"
                element={<Career handleImageClick={handleImageClick} />}
              />
              <Route
                path="/skills"
                element={<Skills handleImageClick={handleImageClick} />}
              />
              <Route path="/skills" element={<Skills />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contest" element={<Contest />} />
              <Route path="/career" element={<Career />} />
              <Route path="/introduction/resume" element={<Resume />} />
              <Route path="/introduction/self-intro" element={<SelfIntro />} />
              <Route path="/project/project1" element={<Project1 />} />
  <Route path="/project/project2" element={<Project2 />} />
  <Route path="/project/project3" element={<Project3 />} />
  <Route path="/contest/contest1" element={<Contest1 />} />
  <Route path="/contest/contest2" element={<Contest2 />} />
  <Route path="/career/career1" element={<Career1 />} />
  <Route path="/career/career2" element={<Career2 />} />
  <Route path="/skills/skills1" element={<Skills1 />} />
  <Route path="/skills/skills2" element={<Skills2 />} />
  <Route path="/skills/skills3" element={<Skills3 />} />
  <Route path="/skills/skills4" element={<Skills4 />} />
            </Routes>
          </section>
        </div>
        <footer>
          <i>컴퓨터공학과 - 202035209 - 이준우 <br /> 연락처: 010-9520-1951</i>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
