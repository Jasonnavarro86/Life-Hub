import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'

const WrapperDiv = styled.div`
min-height: 100vh;
min-width: 100vw;
overflow: auto; 
clear: both;
`


const Wrapper = ({children}) =>

<WrapperDiv>
{children}
<Footer/>
</WrapperDiv>

export default Wrapper