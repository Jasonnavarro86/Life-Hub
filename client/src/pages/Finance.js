import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { PagesNav} from '../components/Nav'
import API from '../utils/API'
import {Modal, ModalBtn} from '../components/Modal'
import Form from '../components/Form'


const Div1 = styled.div`
margin:auto;
margin-left:2em;
`
const Div2 = styled.div`
margin:auto;
text-align: center;
`
const Div3 = styled.div`
`
const Div4 = styled.div`
margin-bottom:0.5em;
`

const P = styled.p`
border-bottom: 1px solid silver;
`
const H1 = styled.h1`
width: 100%;
height: 100%;
color: silver;
text-shadow: 2px 2px #333;
`

export class Finance extends React.Component{

    constructor(props){
        const date = new Date();
        super(props)
        this.state = {
            fId : this.props.match.params.id,
            finance: [],
            financeArray:[],
            incomeSum: 0,
            expenseSum:0,
            difference:0,
            currentMonth: this.transformMonth(date.getMonth()),
            currentDay: date.getDate(),
            currentYear:date.getFullYear()
        }
    }

 componentDidMount(){ 
         API.getOne('finance', this.state.fId)
          .then(res => {this.setState({finance: res.data.finance})})
          .then(res1 => { 
              let iSum = 0; 
              let eSum = 0;
              for (let i = 0; i < this.state.finance.length; i++) {
                    iSum += this.state.finance[i].incomeAmount;
                    eSum += this.state.finance[i].expenseAmount;
                      this.setState({incomeSum : iSum, expenseSum: eSum})
                    }
                 })
          .catch(err => console.log(err)) 

      }


 upperCaseFirst = (string) => {
     if(!string == ""){
        const first = string.split('')
        const firstSplice = first.splice(0, 1, first[0].toUpperCase())
        const firstIsUpper = first.join('')
        return firstIsUpper;
     }
 }

 transformMonth = (index) =>{
    const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    return months[index]
 }


 formSubmit = (id) =>{

         id ={
           fId : this.state.fId,
           incomeName: this.upperCaseFirst(document.getElementById(`Income1`).value),
           incomeAmount: parseFloat(document.getElementById(`Income2`).value),
           expenseName: this.upperCaseFirst(document.getElementById(`Expense1`).value),
           expenseAmount: parseFloat(document.getElementById(`Expense2`).value),
           month: this.state.currentMonth,
           day: this.state.currentDay,
           year: this.state.currentYear
           }

        API.saveOne("finance", id)
        .then(res => API.getOne('finance', id.fId)
          .then(res2 => { this.setState({finance: res2.data.finance})}
         ))
             .then(res3 => { 
                let iSum = 0; 
                let eSum = 0;
                  for (let i = 0; i < this.state.finance.length; i++) {
                   iSum += this.state.finance[i].incomeAmount;
                   eSum += this.state.finance[i].expenseAmount;
                    this.setState({incomeSum : iSum, expenseSum: eSum})
              } 
            })
        }


render(){
    console.log(this.state);
    return(
    <Wrapper>
     <PagesNav fId={this.state.fId}/>
       <H1 className="text-center">F I N A N C E</H1>
        <Div1 className="row InputForms">
          <ModalBtn mClass="income" icon={false} text="Enter New Income" float={'col-10'}/>
          <Modal text="Enter Income" mClass="income">
            <Form id="Income" text1='Job Name' text2='Amount' submit={this.formSubmit}/>
          </Modal>
          <ModalBtn mClass="Expense" icon={false} text="Enter New Expense" float={'col-10'}/>
          <Modal text="Enter Expense" mClass="Expense">
            <Form id="Expense" text1='Expense Name' text2='Amount' submit={this.formSubmit}/>
          </Modal>
        </Div1>

        
        <div className="col-12 text-center">{this.state.currentMonth} {this.state.currentYear} <br/> Income - Expenses = {this.state.incomeSum - this.state.expenseSum}</div>
          <Div2 className="row Income/ExpenseColumns">
            <Div3 className="col-6">
              <P>Income</P>
              <p>Total: {this.state.incomeSum}</p>
              {this.state.finance.map(income => ( <Div4 className='btn-success rounded'>{income.incomeName} {income.incomeAmount} </Div4>))}
            </Div3>
            <Div3 className="col-6">
              <P >Expense</P>
              <p>Total: {this.state.expenseSum}</p>
              {this.state.finance.map(expense => ( <Div4 className='btn-danger rounded'>{expense.expenseName}  {expense.expenseAmount} </Div4>))}
            </Div3>
          </Div2>
    </Wrapper>
    )
 }
}