import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'



const Wrapper = styled.div`
width: 100%;
height: 100%;
`



class Home extends React.Component{



render(){

    return(

        <Wrapper>
          <Nav/>
        </Wrapper>
        
          )

 }
}
export default Home