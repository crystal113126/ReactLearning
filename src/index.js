//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.

import React from "react";
import ReactDOM from "react-dom";

const name = "Jane";
var d = new Date();
var year = d.getFullYear();

ReactDOM.render(
  <div>
    <h1>The past year</h1>
    <p>Such a challenge year and hope for the great next year!</p>
    <p>Creat by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
