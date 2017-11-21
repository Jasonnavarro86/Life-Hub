import React from 'react'
import styled from 'styled-components'



const DropDiv = styled.div`

@media (max-width: 375px){
float:right;
margin: 0.8em;
}
`
const MenuDiv = styled.div`

@media (max-width: 375px){
background-color:#7e9dbb;
min-width: 2em;
width: 3;
min-height: 1em;
height:2.3em;
line-height:0.9;
 .dropdown-header{
  line-height:0.9;  
  font-family: 'Montserrat', sans-serif;
  color:white;
 }
}
`

const DropDown = ({children, size}) => 

<DropDiv className="dropdown">
<button className={`btn btn-secondary btn-${size} dropdown-toggle`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
=
</button>
<MenuDiv className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
<h3 className="dropdown-header">Login </h3>
{children}
</MenuDiv>
</DropDiv>

export default DropDown