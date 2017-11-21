import React from 'react'
import { FacebookLogin } from 'react-facebook-login-component';




class FBLogin extends React.Component{
    
      constructor (props, context) {
        super(props, context);
      }
    
      responseFacebook (response) {
        console.log(response);
        //anything else you want to do(save to localStorage)...
      }
    
      render () {
        return (

            <FacebookLogin socialId="1983294818608131"
                           language="en_US"
                           scope="public_profile,email"
                           responseHandler={this.responseFacebook}
                           xfbml={true}
                           fields="id,email,name"
                           version="v2.5"
                           className={`facebook-login dropdown-item btn btn-${this.props.size}`}
                           buttonText="Facebook"/>
         
        );
      }
    
    }
    
    export default FBLogin;