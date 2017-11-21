import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import FBLogin from '../components/FBAuthBtn'
import DropDown from '../components/DropDownItem'


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


        </Wrapper>
        
          )

 }
}
export default Home