import React from 'react'
import styled from 'styled-components'

const Mbtn = styled.button`

@media (max-width: 375px){
float:right;
margin: 1em;
}
`
export const ModalBtn = () => 

<Mbtn className="btn btn-secondary btn-sm" data-toggle="modal" data-target=".loginModal"><i className="fa fa-sign-in" aria-hidden="true"></i></Mbtn>



