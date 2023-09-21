import React from "react";
import iphone from "../../assets/images/iphone-14.jpg";
import holdinghand from "../../assets/images/iphone-hand.png";

const Jumbotron = () => {
  const handellearnmore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={iphone} alt="" />
      <p className="text"> Big and Bigger</p>
      <span className="description">
        Store. The best way to buy the products you love.
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={() => handellearnmore()}>
            Learn More
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={holdinghand} alt="" />
    </div>
  );
};

export default Jumbotron;
