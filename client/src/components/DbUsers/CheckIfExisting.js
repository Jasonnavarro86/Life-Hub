import React from 'react'
import API from '../../utils/API'

export class FindCreateUser extends React.Component{

    constructor(props){
        super(props)
        this.state={
            fId : props.fId
        }
    }

        componentDidMount(){
          const user ={
             fId: this.state.fId
             }

           API.getOne(this.props.path, this.state.fId)
            .then(res => {if (res.data == null){
              API.saveOne(this.props.path, user)
               .then(res2 => console.log("created", res2.data))
              }else {
                  console.log("exist", res.data);
              }
           })
           .catch(err => console.log(err))
          
        }

    render(){
        return(
            <div></div>
        )
    }
}



