import React from 'react';
import ReactDOM from 'react-dom';
import "./app.css";
function HelloComponent(props) {
  return <div>Hello {props.name}</div>
}
ReactDOM.render(<HelloComponent name="world" />, document.getElementById("container"))