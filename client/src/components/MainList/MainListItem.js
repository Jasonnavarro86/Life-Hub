import React from 'react'
import styled from 'styled-components'


const ListItem = styled.ul`
@media (max-width: 414px){
    font-size: 20px;
    text-align: center;
    color: #333 ;
    font-family: 'Montserrat', sans-serif;
    margin: auto;
    padding: 0.5em;
    font-weight: bold;
    width:92%;
}
`
const Li = styled.li`
@media (max-width: 414px){
    background-color: silver;
    width: 100%;
    height: 100%;
    color: #ffffff;
    text-shadow: 2px 2px #333;
    padding: 0.8em;
    border: 0.5px solid grey;
    box-shadow: 10px 10px 5px #888888;
}
`
const I = styled.i`
@media (max-width: 414px){
  
    color: #;
  
}
`

export const MainListItem = (props) =>

<ListItem className="rounded">
<Li className="rounded" onClick={() => props.selectUsage(props.text)}><i className={`fa fa-${props.icon}`} aria-hidden="true"></i>{props.text}</Li>
</ListItem>


