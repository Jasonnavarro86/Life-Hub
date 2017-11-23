import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import {PagesNav} from '../components/Nav'
import { FindCreateUser } from '../components/DbUsers'

const A2= styled.button`

@media (max-width: 414px){
color:red;
font-size:1em;
font-family: 'Montserrat', sans-serif;
}
`

export class Kids extends React.Component{
  
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
       <PagesNav fId={this.state.fId}/>
       <FindCreateUser fId={this.state.fId} path="kids"/>
       <A2>Kids </A2> 
      </Wrapper>
      )
   }
  }

