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


class App extends Component {
  state = {
    user: userService.getUser()
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path='/' render={() => 
              <Header
                user={this.state.user}
                handleLogout={this.handleLogout}
              />  
            } />
    <Route exact path='/' render={() => 
              <Dashboard
                user={this.state.user}
                handleLogout={this.handleLogout}
              />  
            } /> 
    <Route exact path='/' render={() => 
              <Footer
                user={this.state.user}
                handleLogout={this.handleLogout}
              />  
            } />            
    <Route path='/signup' render={({history}) => 
              <SignupPage 
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
  <Route path='/login' render={({history}) => 
              <LoginPage 
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
          </Switch>
         
          
</div>
      
    );
  }
}

export default App;