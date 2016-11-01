import ReactDOM from 'react-dom';
import Dashboard from './Pages/Dashboard.js'
import React from "react";
function getCookie(name) {
  var value = "; " + decodeURIComponent(document.cookie);
  var parts = value.split("; " + name + "=");
  if (parts.length == 2){
  	var thedata =parts.pop().split(";").shift();
  	return (JSON.parse(thedata));
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Dashboard data={getCookie("data")} />,app);
