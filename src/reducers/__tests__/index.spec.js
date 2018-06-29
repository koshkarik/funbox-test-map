import { map, placesOrder, places } from '../index';

describe('map reducer', () => {
  const initialState = { center: { lat: 55.753134, lng: 37.615755 } };
  it('should have initial state', () => {
    expect(map(undefined, {})).toEqual(initialState);
  });
  it('should handle CHANGE_MAP_CENTER action', () => {
    const stateAfterUpdate = { center: { lat: 55, lng: 55 } };
    expect(map({}, {
      type: 'MAP_CENTER_CHANGE',
      payload: {
        lat: 55,
        lng: 55,
      },
    })).toEqual(stateAfterUpdate);
  });
});

describe('placesOrder reducer', () => {
  const initialState = ['sldkfjq34llk'];
  it('should have initial state', () => {
    expect(placesOrder(undefined, {})).toEqual(initialState);
  });
  it('should handle ITEM_DELETE action', () => {
    expect(placesOrder(undefined, {
      type: 'ITEM_DELETE',
      payload: 'sldkfjq34llk',
    })).toEqual([]);
  });
  it('should handle SPOT_NEW_ADD action', () => {
    const newSpotId = 'someId';
    const expected = [...initialState, newSpotId];
    expect(placesOrder(undefined, {
      type: 'SPOT_NEW_ADD',
      payload: {
        id: newSpotId,
      },
    })).toEqual(expected);
  });
  it('should handle ORDER_CHANGE action', () => {
    const newInitial = [1, 2, 3];
    const newOrder = [2, 1, 3];
    expect(placesOrder(newInitial, {
      type: 'ORDER_CHANGE',
      payload: newOrder,
    })).toEqual(newOrder);
  });
});

describe('places reducer', () => {
  const testId = 'sldkfjq34llk';
  const initialState = {
    sldkfjq34llk: {
      name: 'Moscow',
      lat: 55.753134,
      lng: 37.615755,
      id: testId,
      infoWindowOpen: false,
    },
  };
  it('should render initial state', () => {
    expect(places(undefined, {})).toEqual(initialState);
  });
  it('should handle POSITION_MARKER_CHANGE action', () => {
    const expected = {
      sldkfjq34llk: {
        name: 'Moscow',
        lat: 50,
        lng: 50,
        id: testId,
        infoWindowOpen: false,
      },
    };
    expect(places(undefined, {
      type: 'POSITION_MARKER_CHANGE',
      payload: {
        id: testId,
        lat: 50,
        lng: 50,
      },
    })).toEqual(expected);
  });
  it('should handle INFO_WINDOW_TOGGLE action', () => {
    const expected = {
      sldkfjq34llk: {
        name: 'Moscow',
        lat: 55.753134,
        lng: 37.615755,
        id: testId,
        infoWindowOpen: true,
      },
    };
    expect(places(undefined, {
      type: 'INFO_WINDOW_TOGGLE',
      payload: testId,
    })).toEqual(expected);
  });
  it('should handle ITEM_DELETE action', () => {
    expect(places(undefined, {
      type: 'ITEM_DELETE',
      payload: testId,
    })).toEqual({});
  });
});
