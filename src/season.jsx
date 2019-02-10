import React, { Component } from "react";
import SeasonDisplay from './season/display'

class Season extends Component {
  render() {
    return (
        <div className="season">
            <SeasonDisplay />
        </div>
         );
  }
}
export default Season;
