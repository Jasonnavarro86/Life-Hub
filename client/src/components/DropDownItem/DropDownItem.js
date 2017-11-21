import React from 'react'
import styled from 'styled-components'

const DropDiv = styled.div`
@media (max-width: 375px){
float:right;
margin: 0.8em;
}
`

const DropDown = ({children, size}) => 

<DropDiv className="dropdown">
<button className={`btn btn-secondary btn-${size} dropdown-toggle`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  =
</button>
<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  {children}
</div>
</DropDiv>

export default DropDown