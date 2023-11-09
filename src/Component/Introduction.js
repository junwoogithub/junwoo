// Introduction.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Resume from "./Intro/Resume";
import SelfIntro from "./Intro/SelfIntro";

function Introduction() {
  const imageSize = {
    width: "600px",
    height: "800px",
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
          <caption>asdasd</caption>
          <tbody>
            <tr>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("resume")}
              >
                <Link to="/introduction/resume">
                  <img src="/image/contest1.png" alt="" style={imageSize} />
                  <div
                    style={{
                      ...textOverlayStyle,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    텍스트 추가 1
                  </div>
                </Link>
              </td>
              <td style={{ width: "20px" }}></td>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("self-intro")}
              >
                <Link to="/introduction/self-intro">
                  <img src="/image/contest1.png" alt="" style={imageSize} />
                  <div
                    style={{
                      ...textOverlayStyle,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    텍스트 추가 2
                  </div>
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
