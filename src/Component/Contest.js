// Introduction.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contest1 from "./Contest/Contest1";
import Contest2 from "./Contest/Contest2";

function Contest() {
  const imageSize = {
    width: "800px",
    height: "500px",
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
           <br /><br /><br /><br />
        <div style={{ fontSize: "50px", fontFamily: "Arial, sans-serif", color: "gray", marginLeft: "50px"}}>
        <caption>Contest</caption>
        </div>

          <br /><br /><br />
          <tbody>
            <tr>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("contest1")}
              >
                <Link to="/contest/contest1">
                  <img src="/image/common13.png" alt="" style={imageSize} />
                </Link>
              </td>
              <td style={{ width: "20px" }}></td>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("contest2")}
              >
                <Link to="/contest/contest2">
                  <img src="/image/common14.png" alt="" style={imageSize} />
                  
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
