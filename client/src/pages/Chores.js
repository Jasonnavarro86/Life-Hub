import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import {PagesNav} from '../components/Nav'



const H1 = styled.h1`
width: 100%;
height: 100%;
color: silver;
text-shadow: 2px 2px #333;
`

export class Chores extends React.Component{
  
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
       <H1 className="text-center">Chores</H1> 
      </Wrapper>
      )
   }
  }
  


