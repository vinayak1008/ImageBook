import React, { Component } from "react";
import SeasonView from './season/display'

class Season extends Component {
  render() {
    return (
        <div className="season">
            <SeasonView />
        </div>
         );
  }
}
export default Season;
