import React from 'react'
import styled from 'styled-components'


const ListItem = styled.div`
@media (max-width: 375px){
    font-size: 25px;
    text-align: center;
    color: #3c639f;
    font-family: 'Montserrat', sans-serif;
    margin: 1em;
    border: 1px solid;
    padding: 0.5em;
    font-weight: bold;
}
`

const MainListItem = (props) =>

<ListItem>
{props.text}
</ListItem>


export default MainListItem