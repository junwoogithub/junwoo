import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skills1 from "./Skills/Skills1";
import Skills2 from "./Skills/Skills2";
import Skills3 from "./Skills/Skills3";
import Skills4 from "./Skills/Skills4";

function Skills() {
  const imageSize = {
    width: "600px",
    height: "800px",
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
    if (page === "skills1") {
      setSelectedPage(<Skills1 />);
    } else if (page === "skills2") {
      setSelectedPage(<Skills2 />);
    } else if (page === "skills3") {
        setSelectedPage(<Skills3 />);
      } else if (page === "skills4") {
        setSelectedPage(<Skills4 />);
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
                onClick={() => handleImageClick("skills1")}
              >
                <Link to="/skills/skills1"> {/* 수정된 부분 */}
                  <img src="/image/contest1.png" alt="" style={imageSize} />
                  <div style={textOverlayStyle}>텍스트 추가 1</div>
                </Link>
              </td>
              <td style={{ width: "20px" }}></td>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("skills2")}
              >
                <Link to="/skills/skills2"> {/* 수정된 부분 */}
                  <img src="/image/contest1.png" alt="" style={imageSize} />
                  <div style={textOverlayStyle}>텍스트 추가 2</div>
                </Link>
              </td>
              <td style={{ width: "20px" }}></td>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("skills3")}
              >
                <Link to="/skills/skill3"> {/* 수정된 부분 */}
                  <img src="/image/contest1.png" alt="" style={imageSize} />
                  <div style={textOverlayStyle}>텍스트 추가 3</div>
                </Link>
              </td>
              <td style={{ width: "20px" }}></td>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("skills4")}
              >
                <Link to="/skills/skill4"> {/* 수정된 부분 */}
                  <img src="/image/contest1.png" alt="" style={imageSize} />
                  <div style={textOverlayStyle}>텍스트 추가 3</div>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Skills;
