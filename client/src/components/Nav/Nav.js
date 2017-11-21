import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
max-width 100%; 
hight: 100%;
z-index: 99;
padding: 5px;
margin: auto;
clear:both;
overflow: auto;
background-color: #333;
@media (max-width: 375px){
padding: 1em;
}
`

const A = styled.a`
cursor: pointer;
overflow: auto;
clear:both;
@media (max-width: 375px){
width:100%;
margin: auto;
color:white;
display: inline;
margin-left:35%;
line-height: 2.2;
text-align: center;
font-size: 25px;
text-decoration: none;
font-family: 'Montserrat', sans-serif;
}
`

const Nav = ({children}) =>

 <Container>
  <A href="#"> Life Hub </A>
   {children}
 </Container>

export default Nav
