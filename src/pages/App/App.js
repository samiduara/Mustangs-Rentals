/* eslint-disable */ 

import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from '../../components/Header';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import userService from '../../utils/userService'
import Footer from '../../components/footer'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import Dashboard from '../../components/Dashboard'
import MyCars from '../mycars/mycars'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
    }
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
    // use history API to force page change to my saved cars
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    console.log(this.state)
    return (
      <div className="App"> 
        <Header user={this.state.user} handleLogout={this.handleLogout} />  
        <Switch>
          <Route exact path='/' render={() => 
              <Dashboard
                user={this.state.user}
                handleLogout={this.handleLogout}
                formProgress={this.state.formProgress}
              />  
          }/>         
          <Route exact path='/mycars' render={() => 
              <MyCars
                user={this.state.user}
                handleLogout={this.handleLogout}
              />  
          }/>         
         <Route path='/signup' render={({history}) => 
            <SignupPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route path='/login' render={({history}) => 
            <LoginPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } /> 
       </Switch>
        <Footer
         user={this.state.user}
         handleLogout={this.handleLogout}
       />     
      </div>
    );
  }
}

export default App;