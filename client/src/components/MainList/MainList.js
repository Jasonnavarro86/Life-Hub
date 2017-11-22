import React from 'react'
import styled from 'styled-components'


const ListItem = styled.ul`
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
const Li = styled.li`
@media (max-width: 375px){
    background-color:red;
    width:100%;
    height:100%;
    color:white;
}
`

const MainListItem = (props) =>

<ListItem ><i className={`fa fa-${props.icon}`} aria-hidden="true"></i>
<Li onClick={() => props.selectUsage(props.text)}>{props.text}</Li>
</ListItem>


export default MainListItem