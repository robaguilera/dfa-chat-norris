import React, { Component } from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import ChatPanel from "./component/ChatPanel";
import axios from "axios";
import {getCurrentTime} from "./helpers/helpers";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedMsg: [],
      newMsg: [],
      user: ""
    };
    this.counter = 1;
    this.captureUserInput = this.captureUserInput.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8887/messagesArchived").then(res => {
      const archivedMsg = res.data.map(data => {
        data.id = this.counter;
        this.counter += 1;
        return data;
      });
      this.setState({ archivedMsg });
    });

    const pollServer = () => {
      return axios.get("http://localhost:8887/newMessages").then(res => {
        const incomingMsg = res.data.map(data => {
          data.id = this.counter;
          this.counter += 1;
          return data;
        });

        const newMsg = this.state.newMsg.concat(incomingMsg);
        this.setState({ newMsg });
      });
    };
    setInterval(pollServer, 4500);
    const user = prompt(
      "Welcome to Chat Norris, your gateway to celebrities.  What should we call you?"
    );
    this.setState({ user });
    alert(`${user}, thanks for joining!`);
  }

  captureUserInput(evt) {
    const user = {
      chatMessage: evt.target.value,
      dateCreated: getCurrentTime(),
      id: this.counter,
      personName: this.state.user
    };
    this.counter += 1;
    let newMsg = this.state.newMsg.concat(user);

    if (evt.keyCode === 13) {
      this.setState({ newMsg });
      evt.target.value = '';
    }
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-content">
          <SideBar />
          <ChatPanel
            archivedMsgs={this.state.archivedMsg}
            newMsgs={this.state.newMsg}
            captureUserInput={this.captureUserInput}
          />
        </div>
      </div>
    );
  }
}

export default App;
