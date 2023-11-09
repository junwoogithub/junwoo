// Introduction.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contest1 from "./Contest/Contest1";
import Contest2 from "./Contest/Contest2";

function Contest() {
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
    if (page === "contest1") {
      setSelectedPage(<Contest1 />);
    } else if (page === "contest2") {
      setSelectedPage(<Contest2 />);
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
                onClick={() => handleImageClick("contest1")}
              >
                <Link to="/contest/contest1">
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
                onClick={() => handleImageClick("contest2")}
              >
                <Link to="/contest/contest2">
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

export default Contest;
