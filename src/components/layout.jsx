import React from 'react';
import './layout.scss';
import NavBar from './navBar';
import {history} from '../prepare';

class Layout extends React.Component {
  render() {
    let children = this.props.children;
    if (!this.props.isLogged) {
      if (children.props.location.pathname !== '/') {
        history.replace('/');
        children = null;
      }
    }
    return (
      <div className="container">
        <NavBar/>
        <section className="content" style={{width: '85%'}}>
          {children}
        </section>
        <footer>
        </footer>
      </div>
    );
  };
}

export default Layout;
