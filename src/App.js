import React, { Component } from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import ChatPanel from "./component/ChatPanel";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedMsg: [],
      newMsg: []
    };
  }
  componentDidMount() {
    let counter = 1;
    let self = this;
    axios.get("http://localhost:8887/messagesArchived").then(res => {
      const archivedMsg = res.data.map(data => {
        data.id = counter;
        counter += 1;
        return data;
      });
      this.setState({ archivedMsg });
    });
    let randomCall = function randomCall() {
      return axios.get("http://localhost:8887/newMessages").then(function(res) {
        const newMsg = res.data;
        console.log("hi");
        self.setState({ newMsg });
      });
    };
    setInterval(randomCall, 2000);
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
          />
        </div>
      </div>
    );
  }
}

export default App;
