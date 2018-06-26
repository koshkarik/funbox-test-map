
import { connect } from 'react-redux';
import Component from '../components/Map.jsx';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { lat, lng } = state.map.center;
  const props = {
    places: state.places,
    placesOrder: state.placesOrder,
    lng,
    lat,
  };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators,
)(Component);

export default Container;
