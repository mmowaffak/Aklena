import React from "react";
import ReactDOM from "react-dom";
import ReactGridLayout from "react-grid-layout";
import MyNavBar from "../components/NavBar.js";
import OrderHistoryWidget from "../components/OrderHistoryWidget.js";
import CurrentOrderWidget from "../components/CurrentOrderWidget.js";
import OrderSubmitWidget from "../components/OrderSubmitWidget.js";



class Dashboard extends React.Component{
  render() {
  // layout is an array of objects, see the demo for more complete usage
  var layout = [
    {i: 'b', x: 0, y: 0, w: 4, h: 2},
    {i: 'c', x: 4, y: 0, w: 4, h: 2},
    {i: 'd', x: 8, y: 0, w: 4, h: 2},

  ];
  return (
    <div>
    <MyNavBar userName ={this.props.userName}>
    </MyNavBar>
    <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      <div key={'b'}>
        <OrderSubmitWidget />
      </div>
      <div key={'c'}>
        <CurrentOrderWidget />
      </div>
      <div key={'d'}>
        <OrderHistoryWidget />
      </div>
    </ReactGridLayout>
    </div>
  )
}
}

export default Dashboard;
