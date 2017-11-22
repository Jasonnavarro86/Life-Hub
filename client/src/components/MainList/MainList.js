import React from 'react'
import styled from 'styled-components'


const ListItem = styled.div`
@media (max-width: 375px){
    font-size: 20px;
    text-align: center;
    color: #333 ;
    font-family: 'Montserrat', sans-serif;
    margin: 1em;
    border: 1px solid silver;
    padding: 0.5em;
    font-weight: bold;
}
`

const MainListItem = (props) =>

<ListItem><i className={`fa fa-${props.icon}`} aria-hidden="true"></i>
{props.text}
</ListItem>


export default MainListItem