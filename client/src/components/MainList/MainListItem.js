import React from 'react'
import styled from 'styled-components'


const ListItem = styled.ul`
@media (max-width: 414px){
    font-size: 20px;
    text-align: center;
    color: #333 ;
    font-family: 'Montserrat', sans-serif;
    margin: 1em;
    padding: 0.5em;
    font-weight: bold;
}
`
const Li = styled.li`
@media (max-width: 414px){
    background-color: silver;
    width: 100%;
    height: 100%;
    color: #ffffff;
    padding: 1em;
    border: 1px solid silver;
    box-shadow: 10px 10px 5px #888888;
}
`

export const MainListItem = (props) =>

<ListItem className="rounded">
<Li className="rounded" onClick={() => props.selectUsage(props.text)}><i className={`fa fa-${props.icon}`} aria-hidden="true"></i>{props.text}</Li>
</ListItem>


