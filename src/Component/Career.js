import React, { useState } from "react";
import { Link } from "react-router-dom";
import Career1 from "./Career/Career1";
import Career2 from "./Career/Career2";

function Career() {
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
           <br /><br /><br /><br />
        <div style={{ fontSize: "50px", fontFamily: "Arial, sans-serif", color: "gray", marginLeft: "50px"}}>
        <caption>Career</caption>
        </div>

          <br /><br /><br />
          <tbody>
            <tr>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("career1")}
              >
                <Link to="/career/career1">
                  <img src="/image/common15.png" alt="" style={imageSize} /> //프리랜서
                </Link>
              </td>
              <td style={{ width: "20px" }}></td>
              <td
                style={{ position: "relative" }}
                onClick={() => handleImageClick("career2")}
              >
                <Link to="/career/career2">
                  <img src="/image/common16.jpeg" alt="" style={imageSize} /> //인턴
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
