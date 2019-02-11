import React, { Component } from "react";
import faker from "faker";
import Comment from "./comment";
import "./page.scss";
import Approval from "./approvalcard";

class CardView extends Component {
  render() {
    return (
      <div className="ui container comments">
        <Approval>
          <h4>Warning!!!</h4>Are you sure u want to do this ?
        </Approval>
        <Approval>
          <Comment author="Sam" time="today at 6:00 pm" cmnt="nice blog!!!" />
        </Approval>
        <Approval>
          <Comment author="Jane" time="today at 5:00 pm" cmnt="gr8 blog!!!" />
        </Approval>
        <Approval>
          <Comment author="Alex" time="today at 4:00 pm" cmnt="nice!!!" />
        </Approval>
      </div>
    );
  }
}

export default CardView;
