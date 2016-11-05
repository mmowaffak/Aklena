import React from "react";
import ReactDOM from "react-dom";
import {Panel} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Utilities from '../Util/Utilities';
import {Table} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

class SubscriptionsWidget extends React.Component{
  constructor(){
    super();
    var self = this;
    this.state ={"showModal":false};
    this.fetchSuccess = this.fetchSuccess.bind(this);
    this.fetchSubscriptions();

  }
   componentDidMount(){

   }
  fetchSubscriptions(){
    Utilities.get(1, "fetchSubscriptions", this.fetchSuccess, "");
  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  fetchSuccess(result,status,xhr){
    console.log("setting state with : ", result);
    this.setState({"subscriptions":result});
  }
  render(){
    var shownData = "";
    if(!this.state.subscriptions){
      shownData ="No Subscriptions";
    }
    else{
      var subscribees = JSON.parse(this.state.subscriptions)["data"];
      shownData = subscribees.map(function(subscribees,index){
        return (
          <tr key={index}>
          <td>{subscribees["fname"] +" "+ subscribees["lname"]}</td>
          </tr>
        );
      });
    }
    return(
    <div>
      <Panel header={"My Subscriptions"} bsStyle="danger">
        <Table responsive>
          <thead>
            <tr>
              <th> Name </th>
            </tr>
          </thead>

        </Table>
        <Button onClick ={this.open.bind(this)} ref ={this} style={{marginTop:12}} bsStyle ="danger" className ="btn pull-right">Add Subscription</Button>
      </Panel>
      <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
        <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        </Modal.Body>
      </Modal>
    </div>
    )
  }
}

export default SubscriptionsWidget;
