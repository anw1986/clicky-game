import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div>
      <h1 className="title">{props.children}</h1>
      <h4>{props.score}</h4>
      <h4>{props.highScore}</h4>

    </div>
  );
}

export default Title;
