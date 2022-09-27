import React from "react";
import ActionButton from "./ActionButtons";

function Mission() {
  return (
    <tr>
      <td>Thaicom</td>
      <td>
        The Missions section displays a list of current missions along with
        their brief description and participation status. There is also a button
        next to each mission that allows users to join the selected mission or
        leave the mission the user joined earlier.
      </td>
      <td className="reg-status">
        <ActionButton action="NOT A MEMBER" />
      </td>
      <td>
        <ActionButton action="Join Mission" />
      </td>
    </tr>
  );
}

export default Mission;
