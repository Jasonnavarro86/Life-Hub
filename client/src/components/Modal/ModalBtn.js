import React from 'react'
import styled from 'styled-components'

const Mbtn = styled.button`

@media (max-width: 414px){
    margin:1em;
}
`
export const ModalBtn = (props) => 

<Mbtn className={`btn ${props.btn} btn-sm ${props.float}`} data-toggle="modal" data-target={`.modal${props.mClass}`}>
{props.icon ?(
    <i className="fa fa-sign-in" aria-hidden="true"></i>
    ): (`${props.text}`)}

</Mbtn>



