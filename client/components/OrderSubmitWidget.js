import React from "react";
import ReactDOM from "react-dom";
import {Panel} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Well} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Utilities from '../modules/Utilities.js';
import Time from '../modules/Time.js';


class OrderSubmitWidget extends React.Component{
  submitOrder(){
    var order ={
      "time": Time.getTimeStampObject(),
      'orderText':this.state.orderText};

  this.setState({'order':order});

     Utilities.sendData(this.state.order,"submitOrder",function(){
       console.log("tamam");
     });
  }

  retrieveOrders(){

  }
  textOrderChanged(e){
    var orderText = {'orderText': e.target.value}
    this.setState(orderText);
  }
  render(){
    return(
      <div>
      <Panel header={"Submit an Order"} bsStyle="danger">
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Your Orders submitted for today:</ControlLabel>
            <Well>No Orders Yet</Well>
            <ControlLabel>What do you feel like eating today?</ControlLabel>
          <FormControl ref ={this} onChange ={this.textOrderChanged.bind(this)} componentClass="textarea" placeholder="Submit your order 'Restaurant : Order'" />
          <Button ref ={this} onClick ={this.submitOrder.bind(this)} style={{marginTop:12}} bsStyle ="danger" className ="btn pull-right">Submit Order</Button>
      </FormGroup>
      </Panel>
      </div>
    )
  }
}


export default OrderSubmitWidget;
