import React, { Component } from "react";
import faker from "faker";

const Comment = props => {
  return (
    <div>
      <br />
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date"> {props.time} </span>
          </div>
          <div className="text"> {props.cmnt} </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
