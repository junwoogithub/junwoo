import React from "react";

const Index = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
  };
  


  const imageStyle = {
    width: "1800px", // 이미지 너비 조정
    height: "1200px", // 높이 자동 조정
  };

  return (
    <div style={containerStyle}>
  <div>
    <img src="/image/common3.jpeg" alt="나의 사진!!!" style={imageStyle} />
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-80%, -70%)" }}>
      

  <h1 style={{ fontSize: "100px", fontWeight: 500,fontFamily: "Arial, sans-serif", color: "#ffffff" }}>LeeJunWoo's Portfolio</h1>
  <h2 style={{ fontSize: "50px", fontWeight: 200,fontFamily: "Arial, sans-serif", color: "#ffffff"}}>Front-end Developer</h2>

    </div>
  </div>
</div>

  );
};

export default Index;
