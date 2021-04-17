import React from "react";

export default class App extends React.Component {
  render() {
    return <Home msg="Hello John!!" />;
  }
}

function Home(props) {
  return <Message msg={props.msg} />;
}

class Message extends React.Component {
  render() {
    return <Header msg={this.props.msg} />;
  }
}

class Header extends React.Component {
  render() {
    return <h1>{this.props.msg} </h1>;
  }
}
