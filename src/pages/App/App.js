import React, { Component } from 'react';
import Header from '../../components/Header';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginPage />
        <SignupPage />
      </div>
    );
  }
 }
 


 export default App;