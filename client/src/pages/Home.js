import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import Nav from '../components/Nav'
import FBLogin from '../components/FBAuthBtn'
import { MainList } from '../components/MainList'
import { Modal, ModalBtn } from '../components/Modal'



const Img = styled.img`
@media (max-width: 414px){
margin-bottom: 0.5em;
margin-left: 39%;
}
`
export class Home extends React.Component{

  constructor(props){
    super(props)

      this.state = {
      name : "",
      fId: "",
      email:""

      }

  }

  responseFacebook = (res) => {
    console.log('hi', res)
    this.setState({name: res.name, fId: res.id, email: res.email})
    console.log("state", this.state)
  }

 
render(){

    return(

        <Wrapper>
          <Nav>
            <ModalBtn/>
          </Nav>
            <Modal text="Login">
              <FBLogin size='sm' onClick={this.responseFacebook}/>
            </Modal>  
             <Img  className="rounded-circle" src="https://orig00.deviantart.net/a331/f/2017/269/b/6/toonheads__64_rosie_the_robot_by_cart00nman95-dbooao3.png" width="21%" alt="rosie"/>
          <MainList name={this.state.name} fId={this.state.fId}/>
        </Wrapper>
        
          )

 }
}
