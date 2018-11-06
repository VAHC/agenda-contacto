import React from 'react';
import Header from '../layout/Header';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header title={ 'Home Page '} />
        <h2>Home Page</h2>
      </div>
    )
  }
}

export default HomePage;
