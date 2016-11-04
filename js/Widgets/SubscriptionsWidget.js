import React from "react";
import ReactDOM from "react-dom";
import {Panel} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class SubscriptionsWidget extends React.Component{
  render(){
    return(
      <Panel header={"My Subscriptions"} bsStyle="danger">
          No subscriptions yet

        <Button ref ={this} style={{marginTop:12}} bsStyle ="danger" className ="btn pull-right">Add Subscription</Button>
      </Panel>
    )
  }
}

export default SubscriptionsWidget;
