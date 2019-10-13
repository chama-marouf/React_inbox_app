import React from "react";
import "./styles.css";
import SideBar from "./SideBar";
import EmailListItem from "./EmailListItem";
import EmailList from "./EmailList";
import EmailDetails from "./EmailDetails";
import data from "../data/emails.json";
import axios from "axios";
import {API_URL} from "../apis/Mock";

class App extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      selectedEmailId: 0,
      currentSection: "inbox",
      emails: []
    };
  }

  componentDidMount() {
    axios.get(API_URL).then(res => {
      const emails = res.data;
      this.setState({ emails });
    });
  }

  setSidebarSection(section) {
    let selectedEmailId = this.state.selectedEmailId;
    if (section !== this.state.currentSection) {
      selectedEmailId = "";
    }

    this.setState({
      currentSection: section,
      selectedEmailId
    });
  }

  render() {
    const {emails, selectedEmailId} = this.state;
    const currentEmail = emails.length>0 ? emails[selectedEmailId]:{};
    return (
      <div>
        <SideBar
          emails={emails}
          setSidebarSection={section => {
            this.setSidebarSection(section);
          }}
        />

        <div className="pusher ui grid">
          <EmailList
            emails={emails}
            onEmailSelected={id => {
              this.openEmail(id);
            }}
            selectedEmailId={this.state.selectedEmailId}
            currentSection={this.state.currentSection}
          />

          <EmailDetails
            email={currentEmail}
            onDelete={id => {
              this.deleteMessage(id);
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
