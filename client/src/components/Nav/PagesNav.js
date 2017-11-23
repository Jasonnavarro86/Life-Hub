import React from 'react'
import styled from 'styled-components'
import {Nav} from '../Nav'
import { Modal, ModalBtn } from '../Modal'

const A= styled.a`

@media (max-width: 414px){
width:90%;
margin:auto;
font-family: 'Montserrat', sans-serif;

color:#7e9dbb;
}
`

export const PagesNav = (props) =>

<Nav fId={props.fId} pages={true}>
  <ModalBtn mClass="direct" icon={true}/>
    <Modal text="" mClass="direct">
      <A className="btn btn-secondary btn-sm" href={`/Home/${props.fId}`}>Dashboard</A>
      
      <ModalBtn mClass="logout" icon={false} text="Sign Out"/>
    </Modal>
    <Modal text="Sure You Want to Sign Out?" mClass="logout">
      <A className="btn btn-secondary btn-sm" href={`/`}>Yes</A>
      <ModalBtn mClass="logout" icon={false} text="No"/>
    </Modal> 
</Nav>