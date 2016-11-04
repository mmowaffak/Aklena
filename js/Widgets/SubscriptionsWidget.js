import React from "react";
import ReactDOM from "react-dom";
import {Panel} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Utilities from '../Util/Utilities';

class SubscriptionsWidget extends React.Component{
  constructor(){
    super();
    var self = this;
    this.fetchSuccess = this.fetchSuccess.bind(this);
    this.fetchSubscriptions();
  }
  // componentDidMount(){
  //   this.fetchSubscriptions;
  // }
  fetchSubscriptions(){
    //@FIXME ajax to get subscriptions
    Utilities.get(1, "fetchSubscriptions", this.fetchSuccess, "");
  }
  fetchSuccess(result,status,xhr){
    console.log("THIS ", this);

    this.setState({"subscriptions":result});
  }
  render(){
    var shownData = "";
    if(!this.state){
      shownData ="No Subscriptions";
    }
    else{
      shownData = this.state.subscriptions;
    }
    return(
      <Panel header={"My Subscriptions"} bsStyle="danger">
        <Table responsive>
          <thead>
            Name
          </thead>
          <tbody>
            <td>shownData["data"][0]{"fname"}</td>
          </tbody>
        </Table>


        <Button ref ={this} style={{marginTop:12}} bsStyle ="danger" className ="btn pull-right">Add Subscription</Button>
      </Panel>
    )
  }
}

export default SubscriptionsWidget;
