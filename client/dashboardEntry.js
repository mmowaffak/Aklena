import ReactDOM from 'react-dom';
import Dashboard from './views/Dashboard.js'
import React from "react";
function getCookie(name) {
	console.log("PPARSING ... " + document.cookie);
  /*var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2){
  	console.log(parts.pop().split(";").shift());
  	return parts.pop().split(";").shift();
  } */
}
const app = document.getElementById('app');
ReactDOM.render(<Dashboard userName={getCookie("data")} />,app);
