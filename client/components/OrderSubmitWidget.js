import React from "react";
import ReactDOM from "react-dom";
import {Panel} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Well} from 'react-bootstrap';

class OrderSubmitWidget extends React.Component{
  render(){
    return(
      <div>
      <Panel header={"Submit an Order"} bsStyle="danger">
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Your Orders submitted for today:</ControlLabel>
            <Well>No Orders Yet</Well>
            <ControlLabel>What do you feel like eating today?</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Submit your order 'Restaurant : Order'" />
      </FormGroup>
      </Panel>
      </div>
    )
  }
}


export default OrderSubmitWidget;
