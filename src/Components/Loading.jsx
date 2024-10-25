import React from "react";

function Loading() {
  return (
    <center>
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </center>
  );
}

export default Loading;
