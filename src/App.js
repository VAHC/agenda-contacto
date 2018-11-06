import React from 'react';
import './App.css';
import AppBody from './comp/layout/AppBody';
import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from './comp/layout/SideBar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideBar />
          <AppBody />
        </div>
      </Router>
    );
  }
}

export default App;
