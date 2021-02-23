import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();
  useEffect(() => {
    db.collection("rooms").onSnapshot(snapshot => {
      setChannels(
        snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name
          };
        })
      );
    });
  }, []);
  return (
    <div className="sidebar">
      {/* sidebar header */}
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Pawankumar</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption title="Threads chats" />
      <SidebarOption Icon={InboxIcon} title="Messages & Extras" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Bookmarked" />
      <SidebarOption Icon={PeopleAltIcon} title="Peoples & users" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption title="Random Chats" />
      <SidebarOption Icon={FileCopyIcon} title="Files browsers" />
      <SidebarOption title="React Community" />
      <SidebarOption Icon={ExpandLessIcon} title="More Messages" />
      <hr></hr>
      <SidebarOption addChanelOption Icon={AddIcon} title="Add Channel" />
      {/* connect the db and render the channels */}
      {channels.map(channel => {
        return (
          <SidebarOption
            title={channel.name}
            key={channel.id}
            id={channel.id}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
