import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
max-width 100%; 
hight: 100%;
z-index: 99;
padding: 5px;
margin: auto;
clear:both;
overflow: visible;
background-color: #333;
@media (max-width: 375px){
padding: 1em;
}
`

const A = styled.a`
cursor: pointer;
@media (max-width: 375px){
width:100%;
margin: auto;
color:red;
display: inline;
line-height: 2.2;
text-align: center;
font-size: 25px;
text-decoration: none;
font-family: 'Montserrat', sans-serif;

}
`
const Img = styled.img`
@media (max-width: 375px){
margin-left:19.6%;
margin-bottom: 0.5em;
}
`
const Nav = ({children}) =>

 <Container>
 
  <A href="#"> <strong>Rosie</strong> </A>
  <Img  className="rounded-circle" src="https://orig00.deviantart.net/a331/f/2017/269/b/6/toonheads__64_rosie_the_robot_by_cart00nman95-dbooao3.png" width="17%" alt="rosie"/>
   {children}
 </Container>

export default Nav
