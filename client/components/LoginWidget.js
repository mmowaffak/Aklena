import React from "react"
import FormControl from '../../node_modules/react-bootstrap/lib/FormControl';
import Modal from '../../node_modules/react-bootstrap/lib/Modal';
import Button from '../../node_modules/react-bootstrap/lib/Button';



class LoginWidget extends React.Component{
   constructor(){
    super();
    this.ENUMS = {"DB_ERROR":0,"FOUND":1,"NOT FOUND":2};
  }
  clickEvent(){
    this.sendAuthData(this.state);
  }
  updateUsername(e){
    var userData = {"username":e.target.value};
    this.setState(userData);
  }
  updatePassword(e){
    var passData = {"password":e.target.value};
    this.setState(passData);
  }

  sendAuthData(){
    self = this;
    $.post(
      {
        url:"login",
        dataType : "text",
        data:self.state,
        success: self.__sendAuthDataSuccess
      }
    );
  }

  __sendAuthDataSuccess(data){
      console.log("redirecting ... new assign way ... ");
    window.location.replace("http://localhost:3000/dashboard");
  }
  render(){
    return(
      <div>
      <Modal.Dialog>
        <Modal.Header>
          <img src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/1/005/062/2db/101e5ca.png" />
          <Modal.Title>Aklena Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl id="Username"
                placeholder="Username"
                onChange = {this.updateUsername.bind(this)}
            /><br/>
          <FormControl id="Password"
              placeholder="Password"
                onChange = {this.updatePassword.bind(this)}
            /><br/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick = {this.clickEvent.bind(this)} style={{marginBottom:3}} bsStyle ="danger" className ="btn pull-right">Sign In </Button>
        </Modal.Footer>
    </Modal.Dialog>

      </div>
    )
  }
}


export default LoginWidget;
