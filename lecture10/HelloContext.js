import React from "react";
const HelloContext = React.createContext("John");

export default class App extends React.Component {
  render() {
    return (
      <HelloContext.Provider value="Bob">
        <Home />
      </HelloContext.Provider>
    );
  }
}

function Home(props) {
  return <Message />;
}

class Message extends React.Component {
  render() {
    return <Header />;
  }
}

class Header extends React.Component {
  static contextType = HelloContext;
  render() {
    return <h1>{this.context} </h1>;
  }
}
