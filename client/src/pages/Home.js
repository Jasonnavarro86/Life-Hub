import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import Nav from '../components/Nav'
import FBLogin from '../components/FBAuthBtn'
import MainListItem from '../components/MainList'
import {Modal, ModalBtn} from '../components/Modal'



const Img = styled.img`
@media (max-width: 375px){
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

  selectUsage = (selected) => {
    if(this.state.name === ""){
      alert("Please Login in order for Rosie to know who she is assisting today.")
    }else{
      const selectedJoined = selected.split(" ").join("").split(",").join("")
      console.log(selectedJoined)
      window.location.href ='/'+selectedJoined+ '/' + this.state.fId
    }
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
               <MainListItem text=" F i n a n c e" icon='credit-card' selectUsage={this.selectUsage}/>
               <MainListItem text=" G r o c e r y L i s t" icon='shopping-basket' selectUsage={this.selectUsage}/>
               <MainListItem text=" K i d s" icon='child' selectUsage={this.selectUsage}/>
               <MainListItem text=" C h o r e s" icon='briefcase' selectUsage={this.selectUsage}/>
               <MainListItem text=" A p p o i n t m e n t s" icon='calendar-check-o' selectUsage={this.selectUsage}/>
        </Wrapper>
        
          )

 }
}
