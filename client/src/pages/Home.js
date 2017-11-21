import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import FBLogin from '../components/FBAuthBtn'
import DropDown from '../components/DropDownItem'
import MainListItem from '../components/MainList'

const Wrapper = styled.div`
min-height: 100vh;
min-width: 100vw;
overflow: hidden; 
clear: both;
`

class Home extends React.Component{

render(){

    return(

        <Wrapper>
          <Nav>
           <DropDown size='sm'>
            <FBLogin size='sm'/>
           </DropDown>
          </Nav>
          <MainListItem text="F i n a n c e"/>
          <MainListItem text="G r o c e r y L i s t"/>
          <MainListItem text="K i d s"/>
        </Wrapper>
        
          )

 }
}
export default Home