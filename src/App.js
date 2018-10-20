import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard/Dashboard';
// import Wizard from './components/Wizard/Wizard';
import Header from './components/Header/Header';
// import House from './components/House/House';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
        
      </div>
    );
  }
}

export default App;
