import React from "react";

export default function Button(props) {
  return (
    <div>
      <button onClick= {props.func} className={props.class}>{props.title}</button>
    </div>
  );
}
