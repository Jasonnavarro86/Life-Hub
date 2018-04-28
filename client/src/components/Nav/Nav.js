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
box-shadow: 2px 2px 1px #888888;
}
`

const A = styled.a`
cursor: pointer;
@media (max-width: 414px){
width:100%;
color:white;

display: inline;
line-height: 2.2;
text-align: center;
font-size: 25px;
text-decoration: none;
font-family: 'Indie Flower', cursive;
padding: 1.4em;
color:#7e9dbb;

}
`

export const Nav = (props) =>

 <Container>
  <A href={`/Home/${props.fId}`}> <strong>Organized Rebel <i style={{border:"none", color: "white"}} className="fab fa-rebel"></i></strong> </A>
    {props.children}
 </Container>


