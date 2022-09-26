import React from "react";
import "./Rocket.css";

function Rocket() {
  return (
    <div>
      <div className="single-rocket">
        <div className="img-container">
          <img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="" />
        </div>

        <div className="rocket-info">
          <h3>Falcon 1</h3>
          <p>
            First successful orbital launch vehicle in history, capable of
            delivering 13,450 kg to low Earth orbit. First successful orbital
            launch vehicle in history, capable of delivering 13,450 kg to low
            Earth orbit.
          </p>
          <button className="btn">Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
}

export default Rocket;
