import React, { Component } from 'react'
import {BrowserRouter ,Route, Switch, NavLink, Redirect} from 'react-router-dom'
import Home from './Home'
import User from './User'

export default class App extends React.Component{

  render(){
    return(
      
        <BrowserRouter>
            <NavLink activeStyle={{fontSize:'20px', color:"red"}} to="/">Home </NavLink>
            <NavLink activeStyle={{fontSize:'20px', color:"red"}} to="/about"> About</NavLink>
            <NavLink activeStyle={{fontSize:'2100px', color:"red"}} to="/search?query=Hello"> Search </NavLink>
            <Route export path= "/" component = {Home}/>
            {/* <Route export path= "/user" render={()=> (
              this.state.login? (<Redirect to="/user/john"></Redirect> :
              (()=>About />
              )}/> */}
            <Switch>
              <Route path ="/about" render={()=> <div> About me!! </div>} /> 
              <Route path ="/search" render={({location})=><div>About me!!!{location.search}</div>} /> 
              <Route path ="/user:userName"  component = {User} />
              <Route children ={()=> <div>Footer</div>} />
            </Switch>

        </BrowserRouter>
    )
  }
}