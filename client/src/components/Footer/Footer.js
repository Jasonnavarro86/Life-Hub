import React from 'react'
import styled from 'styled-components'


const Foot = styled.div`
@media (max-width: 414px){
    margin-top:1em;
    color:#7e9dbb;
    text-align: center;
    font-size: 18px;
    font-family: 'Indie Flower', cursive;
`


const Footer = () =>

<Foot>
<p> &copy; Family Hub 2017</p>
</Foot>

export default Footer