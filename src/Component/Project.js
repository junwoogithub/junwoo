import React, { useState } from "react";
import { Link } from "react-router-dom";
import Project1 from "./Project/Project1";
import Project2 from "./Project/Project2";
import Project3 from "./Project/Project3";

function Project() {
  const imageSize = {
    width: "500px",
    height: "500px",
  };

  const textOverlayStyle = {
    fontSize: "24px",
    color: "white",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const [selectedPage, setSelectedPage] = useState(null);

  const handleImageClick = (page) => {
    if (page === "project1") {
      setSelectedPage(<Project1 />);
    } else if (page === "project2") {
      setSelectedPage(<Project2 />);
    } else if (page === "project3") {
      setSelectedPage(<Project3 />);
    }
  };

  return (
    <div>
      {selectedPage ? (
        selectedPage
      ) : (
        <table style={{ margin: "0 auto" }}>
            <br /><br /><br /><br />
        <div style={{ fontSize: "50px", fontFamily: "Arial, sans-serif", color: "gray", marginLeft: "90px"}}>
        <caption>Project</caption>
        <br /><br />
        </div>
          <tbody>
            <tr>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("project1")}
              >
                <Link to="/project/project1"> {/* 수정된 부분 */}
                  <img src="/image/common10.jpg.avif" alt="" style={imageSize} />
                </Link>
              </td>
              <td style={{ width: "50px" }}></td>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("project2")}
              >
                <Link to="/project/project2"> {/* 수정된 부분 */}
                  <img src="/image/common12.png" alt="" style={imageSize} />
                </Link>
              </td>
              <td style={{ width: "50px" }}></td>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("project3")}
              >
                <Link to="/project/project3"> {/* 수정된 부분 */}
                  <img src="/image/common11.jpg.webp" alt="" style={imageSize} />
                
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Project;
