import React from "react";

function Copyright(props) {
  return (
    <div className="copyright">
      <h5>{props.owner} © {(new Date()).getFullYear()}</h5>
    </div>
  )
}

export default Copyright;