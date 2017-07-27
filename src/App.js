import React, { Component } from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import ChatPanel from "./component/ChatPanel";
import axios from "axios";
import { getCurrentTime } from "./helpers/helpers";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedMsg: [],
      newMsg: [],
      user: "",
      chatPop: []
    };
    this.counter = 1;
    this.captureUserInput = this.captureUserInput.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8887/messagesArchived").then(res => {
      let chatPop = [];
      const archivedMsg = res.data.map(data => {
        chatPop.push(data.personName);
        data.id = this.counter;
        this.counter += 1;
        return data;
      });
      this.setState({ archivedMsg, chatPop });
    });

    const pollServer = () => {
      return axios.get("http://localhost:8887/newMessages").then(res => {
        let incomingUsers = [];
        const incomingMsg = res.data.map(data => {
          incomingUsers.push(data.personName);
          data.id = this.counter;
          this.counter += 1;
          return data;
        });

        const newMsg = this.state.newMsg.concat(incomingMsg);
        const chatPop = this.state.chatPop.concat(incomingUsers);
        this.setState({ newMsg, chatPop });
      });
    };

    setInterval(pollServer, 5000);

    const user = prompt(
      "Welcome to Chat Norris, your gateway to celebrities.  What should we call you?"
    );
    this.setState({ user });
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
    let elChat = document.getElementById("chat");

    if (evt.keyCode === 13 && evt.target.value) {
      this.setState({ newMsg });
      elChat.scrollTop = elChat.scrollHeight;
      evt.target.value = "";
    }
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-content">
          <SideBar chatPop={this.state.chatPop} />
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
