import React from 'react'
import styled from 'styled-components'

const Mbtn = styled.button`

@media (max-width: 414px){
float:right;
margin: 1em;
}
`
export const ModalBtn = (props) => 

<Mbtn className="btn btn-secondary btn-sm" data-toggle="modal" data-target={`.modal${props.mClass}`}>
{props.icon ?(
    <i className="fa fa-sign-in" aria-hidden="true"></i>
    ): (`${props.text}`)}

</Mbtn>



