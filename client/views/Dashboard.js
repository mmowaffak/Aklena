import React from "react";
import ReactDOM from "react-dom";
import ReactGridLayout from "react-grid-layout";
import {Panel} from 'react-bootstrap';
import MyNavBar from "../components/NavBar.js";

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
    <MyNavBar>
    </MyNavBar>
    <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      <div key={'b'}>
        <Panel header={"Order History"} bsStyle="danger">
            Order History
        </Panel>
      </div>
      <div key={'c'}>
        <Panel header={"Submit an Order"} bsStyle="danger">
            Submit an Order
        </Panel>
      </div>
      <div key={'d'}>
        <Panel header={"Pending"} bsStyle="danger">
            Pending
        </Panel>
      </div>
    </ReactGridLayout>
    </div>
  )
}
}

export default Dashboard;
