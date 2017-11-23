import React from 'react'
import styled from 'styled-components'


const Foot = styled.div`
@media (max-width: 414px){
    margin:1em;
    color:red;
    text-shadow: 2px 2px silver;
    display: inline;
    text-align: center;
    font-size: 18px;
    font-family: 'Indie Flower', cursive;
`


const Footer = () =>

<Foot>
<p> &copy; Rosie 2017</p>
</Foot>

export default Footer