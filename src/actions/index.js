import { createAction } from 'redux-actions';
import uniqId from 'uniqid';

export const changeMapCenter = createAction('MAP_CENTER_CHANGE');
export const addNewSpot = createAction('SPOT_NEW_ADD', spotObj => ({ ...spotObj, id: uniqId(), infoWindowOpen: false }));
export const changeMarkerPosition = createAction('POSITION_MARKER_CHANGE');
export const toggleInfoWindow = createAction('INFO_WINDOW_TOGGLE');
export const changeOrder = createAction('ORDER_CHANGE');
export const deleteItem = createAction('ITEM_DELETE');
