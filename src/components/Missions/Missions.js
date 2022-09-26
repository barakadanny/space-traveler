import React from "react";
import './Mission.css'
import ActionButton from "./ActionButtons";
function Missions() {
  return <table className="missions-container">
  <tr>
    <th>Mission</th>
    <th>Description</th>
    <th>Status</th>
    <th></th>
  </tr>
  <tr>
    <td>Thaicom</td>
    <td>The Missions section displays a list of current missions along with their
       brief description and participation status. There is also a button next to each 
       mission that allows users to join the selected mission or leave the mission the user joined earlier.</td>
    <td className="reg-status"><ActionButton action="NOT A MEMBER"/></td>
    <td> <ActionButton action="Join Mission"/></td>
  </tr>
  <tr>
    <td>Telstar</td>
    <td>The Missions section displays a list of current missions along with their
       brief description and participation status. There is also a button next to each 
       mission that allows users to join the selected mission or leave the mission the user joined earlier.</td>
    <td><ActionButton action="ACTIVE MEMBER"/></td>
    <td> <ActionButton action="Leave Mission"/></td>
  </tr>
  
</table>

}

export default Missions;
