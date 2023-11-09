import React from "react";

const Index = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
  };
  


  const imageStyle = {
    width: "1600px", // 이미지 너비 조정
    height: "700px", // 높이 자동 조정
  };

  return (
    <div style={containerStyle}>
  <div style={{ position: "relative" }}>
    <img src="/image/contest1.png" alt="나의 사진!!!" style={imageStyle} />
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
    </div>
  </div>
</div>

  );
};

export default Index;
