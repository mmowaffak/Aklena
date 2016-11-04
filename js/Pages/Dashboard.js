import React from "react";
import ReactDOM from "react-dom";
import ReactGridLayout from "react-grid-layout";
import MyNavBar from "../Widgets/NavBar.js";
import OrderHistoryWidget from "../Widgets/OrderHistoryWidget.js";
import CurrentOrderWidget from "../Widgets/CurrentOrderWidget.js";
import OrderSubmitWidget from "../Widgets/OrderSubmitWidget.js";
import SubscriptionsWidget from "../Widgets/SubscriptionsWidget.js";



class Dashboard extends React.Component{
  render() {
  // layout is an array of objects, see the demo for more complete usage
  var layout = [
    {i: 'b', x: 0, y: 0, w: 4, h: 5},
    {i: 'c', x: 4, y: 0, w: 4, h: 5},
    {i: 'd', x: 8, y: 0, w: 4, h: 5},
    {i: 'e', x: 4, y: 6, w: 4, h: 5},

  ];
  return (
    <div>
    <MyNavBar userName ={this.props.data.name}>
    </MyNavBar>
    <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      <div key={'b'}>
        <OrderSubmitWidget />
      </div>
      <div key={'c'}>
        <CurrentOrderWidget />
      </div>
      <div key={'d'}>
        <SubscriptionsWidget />
      </div>
      <div key={'e'}>
        <OrderHistoryWidget />
      </div>
    </ReactGridLayout>
    </div>
  )
}
}

export default Dashboard;
