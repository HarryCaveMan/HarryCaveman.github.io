import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import AppHeader from './components/appHeader';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class App extends Component {
   
  state = {
    curloc:window.location.pathname==='/'?'/home':window.location.pathname
  }

  handleChange = (event,value) =>{
    event.preventDefault();
    this.setState({
      curloc:value
    },() => console.log(this.state.curloc,window.location.pathname));
  }

  render() {

    return (
      <div className="App">
       <AppHeader 
        handleChange={this.handleChange} 
        value={this.state.curloc==="/"?"/home":this.state.curloc} 
       />
        <Paper className="App-content">
        <Router>
          <div id="router">
          <Route exact path="/" render={() => this.state.curloc===("/home")?
           <Home/>:<Redirect to={this.state.curloc} push />} />
          <Route exact path="/home" render={() => this.state.curloc===("/home")?
           <Home/>:<Redirect to={this.state.curloc} push />} />
          <Route exact path="/portfolio" render={() => this.state.curloc===("/portfolio")?
           <Portfolio/>:<Redirect to={this.state.curloc} push />} />
          <Route exact path="/contact" render={() => this.state.curloc===("/contact")?
           <Contact/>:<Redirect to={this.state.curloc} push />} />
          </div>
        </Router>  
        </Paper>      
      </div>
    );
  }
}

export default App;
