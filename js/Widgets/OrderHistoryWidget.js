import React from "react";
import ReactDOM from "react-dom";
import {Panel} from 'react-bootstrap';


class OrderHistoryWidget extends React.Component{
  render(){
    return(
      <Panel header={"Order History"} bsStyle="danger">
          Pending
      </Panel>
    )
  }
}

export default OrderHistoryWidget;
