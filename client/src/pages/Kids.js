import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import {PagesNav} from '../components/Nav'
import { FindCreateUser } from '../components/DbUsers'


const H1 = styled.h1`
width: 100%;
height: 100%;
color: silver;
text-shadow: 2px 2px #333;
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
       <H1 className="text-center">Kids </H1> 
      </Wrapper>
      )
   }
  }

