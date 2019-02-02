import React, { Component } from "react";

class Season extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMsg: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //to update state object we use setState
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errMsg: err.message });
      }
    );
  }

  //React says we have to define render!!
  render() {
    if (this.state.lat && !this.state.errMsg) {
      return <div>Latitude: {this.state.lat}</div>;
    } else if (!this.state.lat && this.state.errMsg) {
      return <div>Error: {this.state.errMsg}</div>;
    }
    return <div>loading...</div>;
  }
}

export default Season;
