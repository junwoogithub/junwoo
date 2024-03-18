// Skills2.js

import React, { useEffect } from "react";
import '../CSS/Skills.css';

const Progress = ({ done, text }) => {
  const [style, setStyle] = React.useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      };
      setStyle(newStyle);
    }, 1000);

    return () => clearTimeout(timer);
  }, [done]);

  return (
    <div className="progress-container">
      <span className="progress-text">{text}</span>
      <div className="progress2">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    </div>
  );
};

const Skills2 = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <Progress done={75} text="CSS" />
    </div>
  );
};

export default Skills2;
