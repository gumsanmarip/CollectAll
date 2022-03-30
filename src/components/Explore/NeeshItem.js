import React from "react";

export default function PostDetails(props) {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <img src={props.url} alt={props.title} />
      <p>Description: {props.description}</p>
    </div>
  );
}