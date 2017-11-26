import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { PagesNav} from '../components/Nav'
import API from '../utils/API'
import {Modal} from '../components/Modal'
import Form from '../components/Form'


const H1 = styled.h1`
@media (max-width: 414px){
width: 100%;
height: 100%;
color: #333;
}
`
const Title = styled.div`
@media (max-width: 414px){
margin:1em 0em;
font-family: 'Montserrat', sans-serif;
font-size:1.4em;
color: #333;
}
`
const TotalSum = styled.div`
@media (max-width: 414px){
margin-bottom:1em;
font-size:1em;
color:#7e9dbb;
font-family: 'Montserrat', sans-serif;
}
`
const Div1 = styled.div`
@media (max-width: 414px){
margin:auto;
font-family: 'Montserrat', sans-serif;
}
`
const Div2 = styled.div`
@media (max-width: 414px){
margin:auto;
text-align: center;
font-family: 'Montserrat', sans-serif;
}
`
const Mbtn = styled.button`
margin:auto;
`

const Delete = styled.button`
@media (max-width: 414px){
float:right;
color:white;
}
`
const ExpenseDiv = styled.div`
@media (max-width: 414px){
margin-bottom:0.5em;
background-color:silver;
color:white;
font-family: 'Montserrat', sans-serif;
clear:both;
}
`
const IncomeDiv = styled.div`
@media (max-width: 414px){
margin-bottom:0.5em;
background-color:silver;
color:white;
font-family: 'Montserrat', sans-serif;
clear:both;
}
`
const PList = styled.p`
@media (max-width: 414px){
line-height:1.7;
color:#3c639f;
}
`
const P = styled.p`
@media (max-width: 414px){
border-bottom: 1px solid silver;
}
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

  if(id === "Income"){
    id ={
      fId : this.state.fId,
      incomeName: this.upperCaseFirst(document.getElementById(`Income1`).value),
      incomeAmount: parseFloat(document.getElementById(`Income2`).value),
      month: this.state.currentMonth,
      day: this.state.currentDay,
      year: this.state.currentYear,
      incomeBool: true
      }
    }else{
      id ={
        fId : this.state.fId,
        expenseName: this.upperCaseFirst(document.getElementById(`Expense1`).value),
        expenseAmount: parseFloat(document.getElementById(`Expense2`).value),
        month: this.state.currentMonth,
        day: this.state.currentDay,
        year: this.state.currentYear,
        incomeBool: false
        }
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
        <Title className="col-12 text-center">{this.state.currentMonth} {this.state.currentYear}</Title>
         <TotalSum className="col-12 text-center">CURRENT REMAINDER <br/>{this.state.incomeSum - this.state.expenseSum}</TotalSum>
          <Div1 className="row InputForms">
            <Mbtn data-toggle="modal" data-target={`.modalincome`}  className='col-5 btn btn-md'>Enter New Expense</Mbtn>
            <Modal text="Enter Income" mClass="income">
              <Form id="Income" text1='Job Name' text2='Amount' submit={this.formSubmit}/>
            </Modal>
           <Mbtn data-toggle="modal" data-target={`.modalExpense`}   className='col-5 btn btn-md'>Enter New Expense</Mbtn>
            <Modal text="Enter Expense" mClass="Expense">
              <Form id="Expense" text1='Expense Name' text2='Amount' submit={this.formSubmit}/>
            </Modal>
          </Div1>
          <br/>
          <Div2 className="row Income/ExpenseColumns">
            <div className="col-6">
              <P>Income</P>
               <p>Total: {this.state.incomeSum}</p>
                {this.state.finance.map(income => {if(!income.incomeAmount == 0){return(<IncomeDiv className='rounded'><PList>{income.incomeName} ${income.incomeAmount }<Delete> &times;</Delete></PList></IncomeDiv>)}})}
            </div>
            <div className="col-6">
              <P >Expense</P>
               <p>Total: {this.state.expenseSum}</p>
                {this.state.finance.map(expense =>  {if(!expense.expenseAmount == 0){return( <ExpenseDiv className='rounded'><PList className="">{expense.expenseName} ${expense.expenseAmount}<Delete>&times;</Delete></PList></ExpenseDiv>)}})}
            </div>
          </Div2>
    </Wrapper>
    )
 }
}