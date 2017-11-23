import React from 'react'
// import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import {PagesNav} from '../components/Nav'
import { FindCreateUser } from '../components/DbUsers'
// import API from '../utils/API'


export class Finance extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fId : this.props.match.params.id

        }
    }

   

render(){
    return(
    <Wrapper>
     <PagesNav fId={this.state.fId}/>
      <FindCreateUser fId={this.state.fId} path="finance"/>
    </Wrapper>
    )
 }
}




