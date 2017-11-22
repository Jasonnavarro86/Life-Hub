import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Appointments, Chores, Finance, GroceryList, Home, Kids} from './pages'



const App = () => 
 
<Router>
  
      <div>
       <Route exact path ="/" component={Home}/>
       <Route exact path ="/Finance/:id" component={Finance}/>
       <Route exact path ="/GroceryList/:id" component={GroceryList}/>
       <Route exact path ="/Kids/:id" component={Kids}/>
       <Route exact path ="/Chores/:id" component={Chores}/>
       <Route exact path ="/Appointments/:id" component={Appointments}/>
      </div>

</Router>
    
  


export default App
