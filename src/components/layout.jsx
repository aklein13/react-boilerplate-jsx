import React from 'react';
import './layout.scss';
import NavBar from './navBar';
import {checkMobile} from './common/helpers';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
    };
  }

  manageMobile = () => {
    const isMobile = checkMobile();
    this.setState({mobile: isMobile});
  };

  componentWillMount() {
    this.manageMobile();
    window.onresize = this.manageMobile;
  }

  render() {
    return (
      <div className="container">
        <NavBar/>
        <section className="content" style={{width: '85%'}}>
          {this.props.children}
        </section>
        <footer>
        </footer>
      </div>
    );
  };
}

export default Layout;
