import React from "react";

const SideBar = ({ emails, setSidebarSection }) => {
  var unreadCount = 0;
  var deletedCount = 0;

  return (
    <div id="sidebar">
      <div className="sidebar__compose">
        <a href="#" className="btn compose">
          Compose <i className="edit icon"></i>
        </a>
      </div>
      <ul className="sidebar__inboxes">
        <li
          onClick={() => {
            setSidebarSection("inbox");
          }}
        >
          <a>
            <i className="inbox icon"></i>Inbox
            <span className="item-count">{unreadCount}</span>
          </a>
        </li>
        <li
          onClick={() => {
            setSidebarSection("sent");
          }}
        >
          <a>
            <i className="edit layout icon"></i>
            Sent
            <span className="item-count">0</span>
          </a>
        </li>
        <li
          onClick={() => {
            setSidebarSection("drafts");
          }}
        >
          <a>
            <i className="warning icon"></i>
            Drafts
            <span className="item-count">0</span>
          </a>
        </li>
        <li
          onClick={() => {
            setSidebarSection("deleted");
          }}
        >
          <a>
            <i className="trash icon"></i>
            Trash
            <span className="item-count">{deletedCount}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
