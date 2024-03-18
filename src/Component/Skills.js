import React, { useState } from "react";
import Skills1 from "./Skills/Skills1";
import Skills2 from "./Skills/Skills2";
import Skills3 from "./Skills/Skills3";
import Skills4 from "./Skills/Skills4";

function Introduction() {
  const imageSize = {
    width: "400px",
    height: "500px",
  };

  const textOverlayStyle = {
    fontSize: "24px",
    color: "white",
    cursor: "pointer",
  };

  const [selectedPage, setSelectedPage] = useState(null);

  const handleImageClick = (page) => {
    if (page === "skills1") {
      setSelectedPage(<Skills1 />);
    } else if (page === "skills2") {
      setSelectedPage(<Skills2 />);
    }
    else if (page === "skills3") {
      setSelectedPage(<Skills3 />);
    }
    else if (page === "skills4") {
      setSelectedPage(<Skills4 />);
    }
  };

  return (
    <div>
      <table style={{ margin: "0 auto" }}>
      <br /><br /><br /><br />
      <div style={{ fontSize: "50px", fontFamily: "Arial, sans-serif", color: "gray", marginLeft: "100px"}}>
        <caption>Skills
        <br /><br /><br />
        </caption>
        </div>
        <tbody>
          <tr>
          <td style={{ position: "relative" }} onClick={() => handleImageClick("skills1")}>
              <img src="/image/common7.png" alt="" style={imageSize} />
            </td>
            <td style={{ width: "20px" }}></td>
            <td style={{ position: "relative" }} onClick={() => handleImageClick("skills2")}>
              <img src="/image/common6.png" alt="" style={imageSize} />
            </td>
            <td style={{ width: "20px" }}></td>
            <td style={{ position: "relative" }} onClick={() => handleImageClick("skills3")}>
              <img src="/image/common8.png" alt="" style={imageSize} />
             </td>
            <td style={{ width: "20px" }}></td>
            <td style={{ position: "relative" }} onClick={() => handleImageClick("skills4")}>
              <img src="/image/common9.png" alt="" style={imageSize} />
            </td>
          </tr>
        </tbody>
      </table>
      {selectedPage}
    </div>
  );
}

export default Introduction;