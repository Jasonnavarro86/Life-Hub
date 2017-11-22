import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import Nav from '../components/Nav'
import {Modal, ModalBtn} from '../components/Modal'

export class Finance extends React.Component{



render(){
    return(
        <Wrapper>
         <Nav>
         <ModalBtn/>
         </Nav>
        <Modal/>
        <h1>Finance</h1>
        </Wrapper>
    )
 }
}




