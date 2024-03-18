// Introduction.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Resume from "./Intro/Resume";
import SelfIntro from "./Intro/SelfIntro";

function Introduction() {
  const imageSize = {
    width: "500px",
    height: "600px",
  };

  const textOverlayStyle = {
    fontSize: "24px",
    color: "white",
    cursor: "pointer",
  };

  const [selectedPage, setSelectedPage] = useState(null);

  const handleImageClick = (page) => {
    if (page === "resume") {
      setSelectedPage(<Resume />);
    } else if (page === "self-intro") {
      setSelectedPage(<SelfIntro />);
    }
  };

  return (
    <div>
      {selectedPage ? (
        selectedPage
      ) : (
        <table style={{ margin: "0 auto" }}>
        <br /><br /><br /><br />
        <div style={{ fontSize: "50px", fontFamily: "Arial, sans-serif", color: "gray", marginLeft: "50px"}}>
        <caption>introduction</caption>
        </div>

          <br /><br /><br />
          <tbody>
            <tr>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("resume")}
              >
                <Link to="/introduction/resume">
                  <img src="/image/common5.webp" alt="" style={imageSize} />
                </Link>
              </td>
              <td style={{ width: "80px" }}></td>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("self-intro")}
              >
                <Link to="/introduction/self-intro">
                  <img src="/image/common4.jpeg" alt="" style={imageSize} />
      
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Introduction;
