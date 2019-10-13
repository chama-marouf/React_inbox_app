import React from "react";
import "./styles.css";
import SideBar from "./SideBar";
import EmailListItem from "./EmailListItem";
import EmailList from "./EmailList";
import EmailDetails from "./EmailDetails";
import emails from "../data/emails.json";

class App extends React.Component {
	
  constructor(args) {
    super(args);
    // Assign unique IDs to the emails
    let id = 0;
    for (const email of emails) {
      email.id = id++;
    }

    this.state = {
      selectedEmailId: 0,
      currentSection: "inbox",
      emails: emails
    };
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
    const currentEmail = 0;
    return (
      <div>
	 
          <SideBar
            emails={this.props.emails}
            setSidebarSection={section => {
              this.setSidebarSection(section);
            }}
          />
      
		
        <div className="pusher ui grid">
			
            <EmailList
              emails={this.state.emails.filter(
                x => x.tag === this.state.currentSection
              )}
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
