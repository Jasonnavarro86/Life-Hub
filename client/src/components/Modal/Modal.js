import React from 'react'
import styled from 'styled-components'


const ModalDiv = styled.div`

@media (max-width: 375px){
 min-height: 10%;
 min-width: 10%;
}
`

const H2= styled.h2`

@media (max-width: 375px){
font-size:1em;
text-align: center;
font-family: 'Montserrat', sans-serif;
}
`
const ModalContainer= styled.div`

@media (max-width: 375px){
padding: 2em;
margin: 1em;
}
`

export const Modal = ({children}) =>

<ModalDiv className="modal fade loginModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <ModalContainer className="modal-content">
    <H2>Login</H2>
      {children}
    </ModalContainer>
  </div>
</ModalDiv>

