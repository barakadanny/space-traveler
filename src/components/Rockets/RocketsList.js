import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadRockets } from "../../store/rockets/rockets";
import Rocket from "./Rocket";

function RockectsList() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket);

  useEffect(() => {
    dispatch(loadRockets());
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
