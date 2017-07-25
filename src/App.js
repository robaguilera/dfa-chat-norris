import React, { Component } from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import ChatPanel from "./component/ChatPanel";
import axios from "axios";
import "./App.css";

class App extends Component {
  componentDidMount() {
    let archivedMsg = axios
      .get("http://localhost:8887/messagesArchived")
      .then(res => {
        console.log(res);
      });
    let newMsg = axios.get("http://localhost:8887/newMessages").then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-content">
          <SideBar />
          <ChatPanel />
        </div>
      </div>
    );
  }
}

export default App;
