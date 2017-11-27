import React from 'react'
import styled from 'styled-components'


const FormStyle = styled.form`
width: 80%;
margin:auto;
`

const Form = (props) => 

<FormStyle>
  <div className="form-group">
    <label for={`${props.id}1`}>{props.text1}</label>
    <input type="email" className="form-control text1" id={`${props.id}1`} aria-describedby="emailHelp" placeholder=""/>
  </div>
  <div className="form-group">
    <label for={`${props.id}2`}>{props.text2}</label>
    <input type="email" className="form-control text2" id={`${props.id}2`} aria-describedby="emailHelp" placeholder="0.00"/>
  </div>
  <button type="submit" className="btn btn-light btn-sm" onClick={(e) => {e.preventDefault(); props.submit(props.id)}}>Submit</button>
</FormStyle>

export default Form