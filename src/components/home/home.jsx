import * as React from 'react';
import {connect} from 'react-redux';
import {simpleAction} from '../../redux/modules/auth/actions';

// Sample Home component with basic redux action call

class Home extends React.PureComponent {
  componentDidMount() {
    setTimeout(this.props.simpleAction, 3000);
  }

  render() {
    return (
      <div>
        <p>Insert your components here...</p>
        <p>{this.props.isFetching ? 'Fetching...' : 'Done'}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
  };
};

const mapDispatchToProps = {
  simpleAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
