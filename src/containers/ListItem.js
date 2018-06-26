
import { connect } from 'react-redux';
import Component from '../components/ListItem.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = () => ({});

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
