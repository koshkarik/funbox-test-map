
import { connect } from 'react-redux';
import Component from '../components/Menu.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { places, placesOrder } = state;
  return { places, placesOrder };
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
