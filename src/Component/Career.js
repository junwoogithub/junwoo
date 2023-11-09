// Introduction.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Career1 from "./Career/Career1";
import Career2 from "./Career/Career2";

function Career() {
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
    if (page === "career1") {
      setSelectedPage(<Career1 />);
    } else if (page === "career2") {
      setSelectedPage(<Career2 />);
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
                onClick={() => handleImageClick("career1")}
              >
                <Link to="/career/career1">
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
                onClick={() => handleImageClick("career2")}
              >
                <Link to="/career/career2">
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

export default Career;
