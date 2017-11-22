import React from 'react'
import styled from 'styled-components'


const WrapperDiv = styled.div`
min-height: 100vh;
min-width: 100vw;
overflow: hidden; 
clear: both;
`


const Wrapper = ({children}) =>

<WrapperDiv>
{children}
</WrapperDiv>

export default Wrapper