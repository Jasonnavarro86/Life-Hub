import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { PagesNav} from '../components/Nav'
import API from '../utils/API'
import {Modal, ModalBtn} from '../components/Modal'
import Form from '../components/Form'


const Div1 = styled.div`
margin: auto;
margin-top:1em;

`

const H1 = styled.h1`
width: 100%;
height: 100%;
color: silver;
text-shadow: 2px 2px #333;
`

export class Finance extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fId : this.props.match.params.id,
            finance: []
        }
    }
    componentDidMount(){ 
         API.getOne('finance', this.state.fId)
          .then(res => this.setState({finance: res.data.finance}))
         .catch(err => console.log(err))  
      }

 incomeSubmit = (id) =>{
     
    const income ={
        incomeName: document.getElementById(`${id}1`).value,
        incomeAmount: parseFloat(document.getElementById(`${id}2`).value),
        month: document.getElementById(`${id}Month`).value,
        day: document.getElementById(`${id}Day`).value,
        year: document.getElementById(`${id}Year`).value

    }
 }

 expenseSubmit = (id) =>{
    const expense ={
        incomeName: document.getElementById(`${id}1`).value,
        incomeAmount: parseFloat(document.getElementById(`${id}2`).value),
        month: document.getElementById(`${id}Month`).value,
        day: document.getElementById(`${id}Day`).value,
        year: document.getElementById(`${id}Year`).value

    }
}
   

render(){
    console.log(this.state);
    return(
    <Wrapper>
     <PagesNav fId={this.state.fId}/>
     <H1 className="text-center">F I N A N C E</H1>
     <Div1 className="row">
      <ModalBtn mClass="income" icon={false} text="Enter New Income" float={'col'}/>
      <Modal text="Enter Income" mClass="income">
       <Form id="Income" text1='Job Name' text2='Amount' submit={this.incomeSubmit}/>
      </Modal>
     <ModalBtn mClass="Expense" icon={false} text="Enter New Expense" float={'col'}/>
      <Modal text="Enter Expense" mClass="Expense">
       <Form id="Expense" text1='Expense Name' text2='Amount' submit={this.expenseSubmit}/>
      </Modal>
      </Div1>
    </Wrapper>
    )
 }
}




