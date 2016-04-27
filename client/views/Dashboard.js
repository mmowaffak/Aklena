import React from "react";
import ReactDOM from "react-dom";
class Dashboard extends React.Component{
  render(){
    console.log("Wslna dashboard");
    return(
      <h1>Dashboard</h1>
    )
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Dashboard/>,app);
