import React from 'react'
import { MainListItem } from "./MainListItem"



export class MainList extends React.Component{

  constructor(props){
    super(props)
    this.state= {}
  }


  selectUsage = (selected) => {
    if(this.props.name === ""){
      alert("Please Login in order for Rosie to know who she is assisting today.")
    }else{
      const selectedJoined = selected.split(" ").join("").split(",").join("")
      window.location.href ='/'+selectedJoined+ '/' + this.props.fId
    }
  }


render(){
  return(
<div>
<MainListItem text=" F i n a n c e" icon='credit-card' selectUsage={this.selectUsage}/>
<MainListItem text=" G r o c e r y L i s t" icon='shopping-basket' selectUsage={this.selectUsage}/>
<MainListItem text=" K i d s" icon='child' selectUsage={this.selectUsage}/>
<MainListItem text=" C h o r e s" icon='briefcase' selectUsage={this.selectUsage}/>
<MainListItem text=" A p p o i n t m e n t s" icon='calendar-check-o' selectUsage={this.selectUsage}/>
</div>
  )
 }
}