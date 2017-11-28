import React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { PagesNav} from '../components/Nav'
import API from '../utils/API'
import {Modal} from '../components/Modal'
import Form from '../components/Form'


const H1 = styled.h3`
@media (max-width: 414px){
width: 100%;
height: 100%;
color:#333;
margin-top:1.5em;
font-family: 'Montserrat', sans-serif;
clear:both;
}
`
const Title = styled.p`
@media (max-width: 414px){
font-family: 'Montserrat', sans-serif;
color: #333;
color:#7e9dbb;
margin-bottom:1em;
font-size:1.4;
}
`

const Div1 = styled.div`
@media (max-width: 414px){
margin:auto;
font-family: 'Montserrat', sans-serif;
background-color:#7e9dbb;
padding:1em;
}
`
const Div2 = styled.div`
@media (max-width: 414px){
margin:auto;
text-align: center;
font-family: 'Montserrat', sans-serif;
background-color:white;
color:#333;
padding:1em;
background-color:#7e9dbb;

}
`
const Div3 = styled.div`
@media (max-width: 414px){

position:relative;
margin-top:-1em;
border-left: 1px solid #333;
border-top: 1px solid #333;
border-right: 1px solid #333;
border-bottom: 1px solid #333;
background-color:white;
}
`
const P = styled.p`
@media (max-width: 414px){
font-size: 1.6em;
color:#333;
font-family: 'Montserrat', sans-serif;
border-bottom: 1px solid silver;
padding:0.2em;

}
`
const ItemList = styled.p`
@media (max-width: 414px){
font-family: 'Montserrat', sans-serif;
color:#333;
font-size:1.1em;
width:83%;
line-height:1.8;
margin:auto;
}
`
const ColTotal = styled.p`
@media (max-width: 414px){
color:white;
font-size: 1.4em;
color:#7e9dbb;
font-weight:900;
color:black;

}
`
const Div4 = styled.div`
@media (max-width: 414px){
margin:auto;
text-align: center;
font-family: 'Montserrat', sans-serif;
background-color:white;
color:#333;
padding:0.5em;

}
`
const Mbtn = styled.button`
color:#7e9dbb;
background-color:#333;
font-family: 'Montserrat', sans-serif;
font-size: 0.8em;
padding:1em;
margin:auto;
border: 1px solid #7e9dbb;

`

const ExpenseDiv = styled.div`
@media (max-width: 414px){
  margin:auto;
  margin-bottom:1em; 
  clear:both;
  position:relative;
}
`
const IncomeDiv = styled.div`
@media (max-width: 414px){
  padding:0em;
  margin:auto;
  margin-bottom:1em; 
  clear:both;
  position:relative;
}
`
const Delete = styled.button`
@media (max-width: 414px){
position:absolute;
font-family: 'Montserrat', sans-serif;
right:0px;
top:0px;
color:white;
background-color:#333;
}
`
const TotalSum = styled.div`
@media (max-width: 414px){
font-size:1.4em;
color:#333;
padding-top:1em;
padding-bottom:1em;
font-family: 'Montserrat', sans-serif;
width:100%;
margin:auto;
background-color:white;

color:  #7e9dbb;

border-left: 16px solid #7e9dbb;;
border-top: 16px solid  #7e9dbb;;
border-right: 16px solid  #7e9dbb;;
border-bottom: 16px solid  #7e9dbb;;


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
        <Div1 className="row InputForms">
            <Mbtn data-toggle="modal" data-target={`.modalincome`} className='col-12 btn btn-sm'>Enter New Income</Mbtn>
            <Modal text="Enter Income" mClass="income">
              <Form id="Income" text1='Job Name' text2='Amount' submit={this.formSubmit}/>
            </Modal>
          </Div1>
          <Div2 className="row Income/ExpenseColumns">
            <Div3 className="col-12">
              <P>Income</P>
              {this.state.finance.map(income => {if(!income.incomeAmount == 0){return(<IncomeDiv className='rounded'><ItemList>{income.incomeName} ${income.incomeAmount }</ItemList> <Delete className="btn btn-sm">&times;</Delete></IncomeDiv>)}})}
               <ColTotal>Total: ${this.state.incomeSum}</ColTotal>
              </Div3>
          </Div2>
          <Div1 className="row">
            <Mbtn className='col-12 btn btn-sm'>Enter Bills</Mbtn>
            </Div1>
            <Div2 className="row BillColumns">
             <Div3 className="col-12">
             <P>BILLS</P>
             </Div3>
           </Div2>
          <Div1 className="row InputForms">
              <Mbtn data-toggle="modal" data-target={`.modalExpense`} className='col-12 btn btn-sm'>Enter New Expense</Mbtn>
            <Modal text="Enter Expense" mClass="Expense">
              <Form id="Expense" text1='Expense Name' text2='Amount' submit={this.formSubmit}/>
            </Modal>
            </Div1>
            <Div2 className="row Income/ExpenseColumns">
            <Div3 className="col-12">
              <P>Expenses</P>
                 {this.state.finance.map(expense =>  {if(!expense.expenseAmount == 0){return( <ExpenseDiv className='rounded'><ItemList>{expense.expenseName} ${expense.expenseAmount}</ItemList> <Delete className="btn btn-sm">&times;</Delete></ExpenseDiv>)}})}
                <ColTotal>Total: ${this.state.expenseSum}</ColTotal>
            </Div3>
            </Div2>
            
          
           
            <TotalSum className="col-12 text-center"> DIFFERENCE <br/>${this.state.incomeSum - this.state.expenseSum}</TotalSum> 
    </Wrapper>
    )
 }
}