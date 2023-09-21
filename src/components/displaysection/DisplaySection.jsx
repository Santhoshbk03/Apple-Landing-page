import React from "react";

const DisplaySection = () => {
  const handellearnmore = () => {
    const element = document.querySelector(".jumbotron-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        A Display that's up to 20% brighter in the sun
      </span>
      <button className="button">Try me!</button>
      <button className="back-button" onClick={() => handellearnmore}>
        Top
      </button>
    </div>
  );
};

export default DisplaySection;
