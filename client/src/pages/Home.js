import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import FBLogin from '../components/FBAuthBtn'
import MainListItem from '../components/MainList'
import {Modal, ModalBtn} from '../components/Modal'


const Wrapper = styled.div`
min-height: 100vh;
min-width: 100vw;
overflow: hidden; 
clear: both;
`
const Img = styled.img`
@media (max-width: 375px){
margin-bottom: 0.5em;
margin-left: 39%;
}
`
class Home extends React.Component{

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
            <Modal>
              <FBLogin size='sm' onClick={this.responseFacebook}/>
            </Modal>
            
               <Img  className="rounded-circle" src="https://orig00.deviantart.net/a331/f/2017/269/b/6/toonheads__64_rosie_the_robot_by_cart00nman95-dbooao3.png" width="21%" alt="rosie"/>
               <MainListItem text=" F i n a n c e" icon='credit-card'/>
               <MainListItem text=" G r o c e r y L i s t" icon='shopping-basket'/>
               <MainListItem text=" K i d s" icon='child'/>
               <MainListItem text=" C h o r e s" icon='briefcase'/>
               <MainListItem text=" A p p o i n t m e n t s" icon='calendar-check-o'/>
        </Wrapper>
        
          )

 }
}
export default Home