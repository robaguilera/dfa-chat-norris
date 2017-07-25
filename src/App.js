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
    axios.get("http://localhost:8887/messagesArchived").then(res => {
      const archivedMsg = res.data;
      this.setState({ archivedMsg });
    });
    axios.get("http://localhost:8887/newMessages").then(res => {
      const newMsg = res.data;
      this.setState({ newMsg });
    });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-content">
          <SideBar />
          <ChatPanel archivedMsgs={this.state.archivedMsg} />
        </div>
      </div>
    );
  }
}

export default App;
