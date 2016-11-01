import React from "react";
import ReactDOM from "react-dom";
import {Panel} from 'react-bootstrap';

class CurrentOrderWidget extends React.Component{
  render(){
    return(
      <Panel header={"Current Order"} bsStyle="danger">
          Submit an Order
      </Panel>
    )
  }
}

export default CurrentOrderWidget;
