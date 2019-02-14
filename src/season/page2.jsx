import React, { Component } from "react";
import SeasonDisplay from "./display";

class SeasonView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMsg: null };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMsg: err.message })
    );
  }

  //React says we have to define render!!
  render() {
    if (this.state.lat && !this.state.errMsg) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (!this.state.lat && this.state.errMsg) {
      return <div>Error: {this.state.errMsg}</div>;
    }
    return <div>loading...</div>;
  }
}

export default SeasonView;
