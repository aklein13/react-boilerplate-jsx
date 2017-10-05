import React from 'react';
import Home from './home';

class HomeLayout extends React.Component {
  renderHome() {
    return (
      <div>
        <h1>Welcome to Boilerplate website.</h1>
        <Home/>
      </div>
    );
  };

  render() {
    return this.renderHome();
  }
}

export default HomeLayout;
