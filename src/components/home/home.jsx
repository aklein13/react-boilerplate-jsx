import React from 'react';
import {connect} from 'react-redux';

// Image usage example

class Home extends React.Component {
  renderHome() {
    return (
      <div>
        <p>
          Insert your components here...
        </p>
        <img src="imgs/favicon.png" alt=""/>
      </div>
    );
  };

  render() {
    return this.renderHome();
  }
}

export default Home;
