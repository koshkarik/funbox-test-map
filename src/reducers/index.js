import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { omit } from 'lodash';
import * as actions from '../actions';

const testId = 'sldkfjq34llk';

export const placesOrder = handleActions({
  [actions.addNewSpot](state, { payload: { id } }) {
    return [...state, id];
  },
  [actions.changeOrder](state, { payload: newOrder }) {
    return newOrder;
  },
  [actions.deleteItem](state, { payload: id }) {
    const newState = state.filter(item => item !== id);
    return newState;
  },
}, [testId]);

export const places = handleActions({
  [actions.addNewSpot](state, {
    payload: {
      name, lat, lng, id, infoWindowOpen,
    },
  }) {
    return {
      ...state,
      [id]: {
        name, lat, lng, id, infoWindowOpen,
      },
    };
  },
  [actions.changeMarkerPosition](state, { payload: { lat, lng, id } }) {
    return { ...state, [id]: { ...state[id], lat, lng } };
  },
  [actions.toggleInfoWindow](state, { payload: id }) {
    return { ...state, [id]: { ...state[id], infoWindowOpen: !state[id].infoWindowOpen } };
  },
  [actions.deleteItem](state, { payload: id }) {
    const modified = omit(state, id);
    return modified;
  },
}, {
  [testId]: {
    name: 'Moscow',
    lat: 55.753134,
    lng: 37.615755,
    id: testId,
    infoWindowOpen: false,
  },
});

export const map = handleActions({
  [actions.changeMapCenter](state, { payload: { lat, lng } }) {
    return { ...state, center: { lat, lng } };
  },
}, { center: { lat: 55.753134, lng: 37.615755 } });

export default combineReducers({
  places,
  placesOrder,
  map,
  form: formReducer,
});
