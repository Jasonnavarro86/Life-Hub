import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import Nav from '../components/Nav'
import { Modal, ModalBtn } from '../components/Modal'

const A= styled.a`

@media (max-width: 414px){
color:red;
font-size:1em;
font-family: 'Montserrat', sans-serif;

}
`
export class Finance extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fId : this.props.match.params.id, 
            name : '',

        }
    }


render(){
    return(
    <Wrapper>
        <Nav fId={this.props.match.params.id}>
          <ModalBtn mClass="login" icon={true}/>
        </Nav>
         <Modal text="Where to?" mClass="login">
           <ModalBtn mClass="logout" icon={false} text="Sign Out"/>
         </Modal>
         <Modal text="Sure You Want to Sign Out?" mClass="logout">
          <A href={`/`}>Yes</A>
          <ModalBtn mClass="logout" icon={false} text="No"/>
        </Modal>
    </Wrapper>
    )
 }
}




