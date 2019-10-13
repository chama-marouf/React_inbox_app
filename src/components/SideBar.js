import React from "react";
import "./SideBar.css";

const SideBar = ({ emails, setSidebarSection }) => {
  var unreadCount = 0;

  var deletedCount = 0;

  return (
    <div id="sidebar">
      <div className="ui visible left vertical sidebar menu">
        <a className="item">
          <button className="massive ui black button">
            Compose <i class="pensil icon"></i>
          </button>
        </a>

        <a
          onClick={() => {
            setSidebarSection("inbox");
          }}
          class="item"
        >
          <i class="inbox icon"></i>
          Inbox
          <div class="ui label">51</div>
        </a>
        <a
          onClick={() => {
            setSidebarSection("drafts");
          }}
          class="item"
        >
          <i class="edit layout icon"></i>
          Drafts
          <div class="ui label">0</div>
        </a>
        <a
          onClick={() => {
            setSidebarSection("sent");
          }}
          class="item"
        >
          <i class="paper plane icon"></i>
          Sent
          <div class="ui label">0</div>
        </a>
        <a
          onClick={() => {
            setSidebarSection("trash");
          }}
          class="item"
        >
          <i class="trash icon"></i>
          Trash
          <div class="ui label">0</div>
        </a>
        <a
          onClick={() => {
            setSidebarSection("spam");
          }}
          class="item"
        >
          <i class="warning icon"></i>
          Spam
          <div class="ui label">1</div>
        </a>
      </div>
      
    </div>
  );
};
export default SideBar;
