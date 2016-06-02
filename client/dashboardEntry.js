import React from 'react';
import ReactDOM from 'react-dom';
import LoginWidget from './components/LoginWidget.js';
import Dashboard from './views/Dashboard.js'

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

console.log("El cookie gebnaha? .."+ getCookie("name"));
const app = document.getElementById('app');
ReactDOM.render(<Dashboard userName={getCookie("data")} />,app);
