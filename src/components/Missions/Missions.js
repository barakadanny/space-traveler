import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMissions } from "../../store/missions/missions";
import "./Mission.css";
import Mission from "./Mission";

function Missions() {
  const missions = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMissions());
  }, [missions, dispatch]);

  return (
    <table className="missions-container">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            index={mission.mission_id}
            title={mission.mission_name}
            description={mission.description}
          />
        ))}
      </tbody>

      {/* <tr>
        <td>Telstar</td>
        <td>
          The Missions section displays a list of current missions along with
          their brief description and participation status. There is also a
          button next to each mission that allows users to join the selected
          mission or leave the mission the user joined earlier.
        </td>
        <td>
          <ActionButton action="ACTIVE MEMBER" />
        </td>
        <td>
          <ActionButton action="Leave Mission" />
        </td>
      </tr> */}
    </table>
  );
}

export default Missions;
