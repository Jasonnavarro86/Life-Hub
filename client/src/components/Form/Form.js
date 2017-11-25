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

<div className="form-group">
  <label for={`${props.id}Month`}>Month</label>
  <select className="form-control" id={`${props.id}Month`}>
    <option></option>
    <option>Jan</option>
    <option>Feb</option>
    <option>Mar</option>
    <option>Apr</option>
    <option>May</option>
    <option>Jun</option>
    <option>Jul</option>
    <option>Aug</option>
    <option>Sep</option>
    <option>Oct</option>
    <option>Nov</option>
    <option>Dec</option>
  </select>
</div>
<div className="form-group">
<label for={`${props.id}Day`}>Day</label>
<select className="form-control" id={`${props.id}Day`}>
  <option></option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
  <option>11</option>
  <option>12</option>
  <option>13</option>
  <option>14</option>
  <option>15</option>
  <option>16</option>
  <option>17</option>
  <option>18</option>
  <option>19</option>
  <option>20</option>
  <option>21</option>
  <option>22</option>
  <option>23</option>
  <option>24</option>
  <option>25</option>
  <option>26</option>
  <option>27</option>
  <option>28</option>
  <option>29</option>
  <option>30</option>
  <option>31</option>
</select>
</div>
<div className="form-group">
<label for="Year">Year</label>
<select className="form-control" id={`${props.id}Year`}>
  <option></option>
  <option>2017</option>
  <option>2018</option>
  <option>2019</option>
</select>
</div>
<button type="submit" className="btn btn-danger btn-sm" onClick={(e ) => {e .preventDefault(); props.submit(props.id)}}>Submit</button>
</FormStyle>

export default Form