import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import Nav from '../components/Nav'
import { Modal, ModalBtn } from '../components/Modal'

const A2= styled.button`

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
            fId : '', 
            name : '',

        }
    }


render(){
    return(
    <Wrapper>
      <Nav fId={this.props.match.params.id}>
       <ModalBtn/>
      </Nav>
      <Modal text="Where to?">
       <A2>Go</A2>
      </Modal>
    </Wrapper>
    )
 }
}




