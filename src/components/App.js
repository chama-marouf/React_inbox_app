import React from "react";
import "./styles.css";
import SideBar from "./SideBar";
import EmailListItem from "./EmailListItem";
import EmailList from "./EmailList";
import EmailDetails from "./EmailDetails";
import axios from "axios";
import { API_URL } from "../apis/Mock";

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

  deleteMessage(id) {
    // Mark the message as 'deleted'
    const emails = this.state.emails;
    const index = emails.findIndex(x => x.id === id);
    emails[index].tag = "deleted";

    // Select the next message in the list
    let selectedEmailId = "";
    for (const email of emails) {
      if (email.tag === this.state.currentSection) {
        selectedEmailId = email.id;
        break;
      }
    }

    this.setState({
      emails,
      selectedEmailId
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

  openEmail(id) {
    const { emails } = this.state;
    const index = emails.findIndex(x => x.id === id);
    emails[index].read = true;
    this.setState({
      selectedEmailId: index,
      emails
    });
  }

  render() {
    const { emails, selectedEmailId } = this.state;
    const currentEmail = emails.length > 0 ? emails[selectedEmailId] : {};
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
            //selectedEmailId={currentEmail.id}
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
