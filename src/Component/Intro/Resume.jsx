// Resume.js 파일
import React from 'react';
import '../CSS/Resume.css';

const Section = ({ title, content }) => (
  <div className="div1">
    {title && (
      <>
        <h2>{title}</h2>
        <hr className="hrStyle" />
      </>
    )}
    {content}
  </div>
);

const Resume = () => {
  return (
    <div className="containerStyle">
      <div className="textContainerStyle">
        <img src="/image/common17.jpeg" alt="나의 사진!!!" className="imageStyle" />
        <h1 style={{ textShadow: "3px 3px 5px gray", fontFamily: "Arial", marginBottom: "10px", marginRight: "60px" }}>이준우</h1>
        <h3 style={{ color: "gray", marginBottom: "10px", marginRight: "60px" }}>프론트엔드 개발자</h3>
      </div>

      <div>
        <Section
          title="asdasd1"
          content={
            <>
              asdasd33<br />
              asdasddsasdasd<br />
              asdasddsasdasd<br />
              asdasddsasdasd<br />
              asdasddsasdasd<br />
              asdasdds
            </>
          }
        />
        <br /><br /><br /><br /><br /><br /><br />
        <Section
          title="asdasd2"
          content={
            <>
              asdasd44<br />
              asdasddsasdasd<br />
              asdasddsasdasd<br />
              asdasddsasdasd<br />
              asdasddsasdasd<br />
              asdasdds
            </>
          }
        />
      </div>

      <div>
        <Section
          title="asdasd3"
          content={
            <>
              asdasd<br />
              asdasddsasdasd55<br />
              asdasddsasdasd<br />
              asdasddsasdasd<br />
              asdasddsasdasd<br />
              asdasdds
            </>
          }
        />
        <br /><br /><br /><br /><br /><br /><br />
        <Section
          title="asdasd4"
          content={
            <>
              asdasd<br />
              asdasddsasdasd66<br />
              asdasddsasdasd<br />
              asdasddsasdasd<br />
              asdasddsasdasd<br />
              asdasdds
            </>
          }
        />
      </div>
    </div>
  );
};

export default Resume;
