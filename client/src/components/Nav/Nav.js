import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
max-width 100%; 
hight: 100%;
padding: 5px;
margin: auto;
clear:both;
overflow: visible;
background-color: #333;
@media (max-width: 414px){
margin-bottom: 1em;
}
`

const A = styled.a`
cursor: pointer;
@media (max-width: 414px){
width:100%;
margin: auto;
margin-left: 0.7em;
color:red;
display: inline;
line-height: 2.2;
text-align: center;
font-size: 25px;
text-decoration: none;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
}
`

const Nav = ({children}) =>

 <Container>
  <A href="/"> <strong>Rosie</strong></A>
      {children}
 </Container>

export default Nav
