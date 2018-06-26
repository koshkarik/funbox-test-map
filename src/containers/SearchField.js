
import { connect } from 'react-redux';
import Component from '../components/SearchField.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const props = {
    center: state.map.center,
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
