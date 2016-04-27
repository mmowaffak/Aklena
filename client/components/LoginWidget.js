import React from "react"
import TextField from '../../node_modules/material-ui/lib/TextField';
import Card from '../../node_modules/material-ui/lib/card/card';
import CardActions from '../../node_modules/material-ui/lib/card/card-actions';
import CardHeader from '../../node_modules/material-ui/lib/card/card-header';
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import CardText from '../../node_modules/material-ui/lib/card/card-text';
import {redA700} from '../../node_modules/material-ui/lib/styles/colors';


class LoginWidget extends React.Component{
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
        data:self.state
      }
    );
  }
  render(){
    return(
      <div>
        <Card style = {{marginTop: 40}} className="col-md-4 col-md-offset-4 vertical-center">
          <CardHeader
                title="Login"
                titleStyle = {{fontSize:24}}
                avatar="https://media.glassdoor.com/sqll/628807/eventum-it-solutions-squarelogo-1451303890946.png"
            />
          <TextField id="Username"
                hintText="Username"
                onChange = {this.updateUsername.bind(this)}
            /><br/>
          <TextField id="Password"
                hintText="Password"
                onChange = {this.updatePassword.bind(this)}
            /><br/>
          <RaisedButton onClick = {this.clickEvent.bind(this)} label="Sign In" style={{marginBottom:3}} className ="btn pull-right" backgroundColor={redA700} labelStyle={{color:"#ffffff"}} />
        </Card>
      </div>
    )
  }
}


export default LoginWidget;
