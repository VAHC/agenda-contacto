import React, { Component } from 'react';
import './App.css';
import ContactListPage from './comp/contactListPage/ContactListPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactListPage />
      </div>
    );
  }
}

export default App;
