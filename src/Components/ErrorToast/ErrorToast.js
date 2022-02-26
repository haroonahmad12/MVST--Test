import React from "react";
import "./ErrorToast.scss";

export const showToast = () => {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};

const ErrorToast = () => {
  return (
    <>
      <div id="snackbar">We couldn't find anything...</div>
    </>
  );
};

export default ErrorToast;
