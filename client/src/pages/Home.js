import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import Nav from '../components/Nav'
import FBLogin from '../components/FBAuthBtn'
import { MainList } from '../components/MainList'
import { Modal, ModalBtn } from '../components/Modal'
import API from '../utils/API'


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

  componentDidMount(){

  }


  responseFacebook = (res) => {

    const user ={
      name: res.name, 
      fId: res.id, 
      email: res.email
     }

    API.saveOne('main', user)
    .then(res1 =>  this.setState({name: res1.data.name, fId: res1.data.fId, email: res1.data.email}))
     .then(res2 => console.log("state", this.state))
     .catch(err => console.log(err))
    
  }

 
render(){

    return(

        <Wrapper>
          <Nav>
            <ModalBtn/>
          </Nav>
            <Modal text="Please Login">
              <FBLogin size='sm' onClick={this.responseFacebook}/>
            </Modal>  
             <Img  className="rounded-circle" src="https://orig00.deviantart.net/a331/f/2017/269/b/6/toonheads__64_rosie_the_robot_by_cart00nman95-dbooao3.png" width="21%" alt="rosie"/>
          <MainList name={this.state.name} fId={this.state.fId}/>
        </Wrapper>
        
          )

 }
}
