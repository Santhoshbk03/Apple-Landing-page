import React from "react";

const Scoundsection = () => {
  const handellearnmore = () => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title"> New Sound System</h2>
          <p className="text"> feel the bsae</p>
          <span className="description">
            Unleash the Power of Sound <br></br>Where Clarity Meets Convenience
          </span>
          <ul className="links">
            <li>
              <button className="button">Buy</button>
            </li>
            <li>
              <a className="link" onClick={() => handellearnmore()}>
                {" "}
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Scoundsection;
