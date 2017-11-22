import React from 'react'
import { FacebookLogin } from 'react-facebook-login-component'
import styled from 'styled-components'


const LoginDiv = styled.div`
@media (max-width: 414px){
 background-color:#7e9dbb;
 min-width: 3em;
 width: 3;
 min-height: 1em;
 height:2.3em;
  .facebook-login{
    color:white;
    line-height: 2.2;
    font-family: 'Montserrat', sans-serif;
 }
}
`
class FBLogin extends React.Component{
    
      constructor (props, context) {
        super(props, context);
        this.state = {}
      }
    
      render () {
        return (
     <LoginDiv className="rounded">
            <FacebookLogin socialId="1983294818608131"
                           language="en_US"
                           scope="public_profile,email"
                           responseHandler={this.props.onClick}
                           xfbml={true}
                           fields="id,email,name"
                           version="v2.5"
                           className={`facebook-login btn btn-${this.props.size} dropdown-item`}
                           buttonText=" FaceBook"
                           > 
                           <i className="fa fa-facebook-square" aria-hidden="true"> </i>
                           </FacebookLogin>            
     </LoginDiv>   
        );
      }
    
    }
    
    export default FBLogin;