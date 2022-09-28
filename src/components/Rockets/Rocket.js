import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Rocket.css';

const Rocket = (props) => (
  <div className="d-flex flex-column">
    <div className="d-flex justify-content-center my-5">
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
        <button type="button" className="btn btn-primary">
          Reserve Rocket
        </button>
      </div>
    </div>
  </div>
);

export default Rocket;
