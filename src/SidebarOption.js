import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "./firebase";
const SidebarOption = ({ Icon, title, id, addChanelOption }) => {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      //if there is any add channel props then allow user to add the channel else select
      //that particular and channel and redirect them to that chat
      onClick={addChanelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {/* if no icons then render the component as a channel having (#) */}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
