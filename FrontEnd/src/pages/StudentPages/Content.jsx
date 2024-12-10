import React from "react";
import "./d.scss";
import Home from "./Home";
import Courses from "./Courses";
import Evaluation from "./Evaluation";

const Content = ({ activeMenu }) => {
  let content;

  switch (activeMenu) {
    case "home":
      content = <Home/>;
      break;
    case "courses":
      content = <Courses />;
      break;
    case "evaluation":
      content = <Evaluation />;
      break;
  }

  return <div className="content">
    {content}
  </div>;
};

export default Content;
