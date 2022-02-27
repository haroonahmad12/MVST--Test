import React from "react";
import "./Loader.scss";

// Loader has not yet been implemented because I needed more times to make sure it works
// seamlessly and doesnt give any errors

const Loader = () => {
  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
