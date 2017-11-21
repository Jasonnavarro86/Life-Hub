import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
width 100%; 
hight: 100%;
background-color:red;
`
const Container = styled.div`

max-width 100%; 
hight: 100%;
margin: auto;
background-color: yellow;
@media (max-width: 375px){
    padding: 1em;
}

`

const A = styled.a`
cursor: pointer;
@media (max-width: 375px){
width:100%;
margin: auto;
color:white;
display: block;
text-align: center;
font-size: 35px;
text-decoration: none;

}
`

const Nav = () =>

<Header>
<Container>
<A href="#" id="logo"> Life Hub</A>
</Container>

</Header>


export default Nav
