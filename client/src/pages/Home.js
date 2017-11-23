import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { Nav } from '../components/Nav'
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
      fId: this.props.match.params.id,
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

     API.getOne('main', user.fId)
      .then(res => 
        {if (res.data == null){
          API.saveOne('main', user)
           .then(res1 =>  this.setState({name: res1.data.name, fId: res1.data.fId, email: res1.data.email}))
            .then(res2 => console.log("state", this.state))
        }else {
           console.log("exist", res.data);
        }
      })
    .catch(err => console.log(err))  
  }

 
render(){

    return(

        <Wrapper>
          <Nav fId={this.props.match.params.id}>
            <ModalBtn mClass="login" icon={true} />
              <Modal text="Please Login" mClass="login">
                <FBLogin size='sm' onClick={this.responseFacebook}/>
              </Modal>  
          </Nav>
            
             <Img  className="rounded-circle" src="https://orig00.deviantart.net/a331/f/2017/269/b/6/toonheads__64_rosie_the_robot_by_cart00nman95-dbooao3.png" width="21%" alt="rosie"/>
           <MainList name={this.state.name} fId={this.state.fId}/>
        </Wrapper>
        
          )

 }
}
