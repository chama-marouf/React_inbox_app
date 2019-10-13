import React from "react";


const SideBar = ({ emails, setSidebarSection }) => {
  var unreadCount = 0;

  var deletedCount = 0;

  return (
    <div id="sidebar">
      <div className="ui visible left vertical sidebar menu">
        <a className="item">
          <button className="massive ui black button">
            Compose <i className="pensil icon"></i>
          </button>
        </a>

        <a
          onClick={() => {
            setSidebarSection("inbox");
          }}
          className="item"
        >
          <i className="inbox icon"></i>
          Inbox
          <div className="ui label">51</div>
        </a>
        <a
          onClick={() => {
            setSidebarSection("drafts");
          }}
          className="item"
        >
          <i className="edit layout icon"></i>
          Drafts
          <div className="ui label">0</div>
        </a>
        <a
          onClick={() => {
            setSidebarSection("sent");
          }}
          className="item"
        >
          <i className="paper plane icon"></i>
          Sent
          <div className="ui label">0</div>
        </a>
        <a
          onClick={() => {
            setSidebarSection("trash");
          }}
          className="item"
        >
          <i className="trash icon"></i>
          Trash
          <div className="ui label">0</div>
        </a>
        <a
          onClick={() => {
            setSidebarSection("spam");
          }}
          className="item"
        >
          <i className="warning icon"></i>
          Spam
          <div className="ui label">1</div>
        </a>
      </div>
      
    </div>
  );
};
export default SideBar;
