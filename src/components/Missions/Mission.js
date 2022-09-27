import React from "react";
import ActionButton from "./ActionButtons";
import { useDispatch } from "react-redux";

function Mission(props) {
  const { title, description, index } = props;

  const dispatch = useDispatch();

  //   console.log(title);
  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
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
