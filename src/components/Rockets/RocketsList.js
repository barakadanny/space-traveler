import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchRockets } from "../../store/rockets/rockets";
import Rocket from "./Rocket";

function RockectsList() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket);

  console.log("here");

  useEffect(() => {
    dispatch(fetchRockets());
  }, [rockets, dispatch]);

  return (
    <div className="rockets-list">
      {rockets.map((rocket) => (
        <Rocket />
      ))}
    </div>
  );
}

export default RockectsList;
