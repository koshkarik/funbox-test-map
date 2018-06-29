import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App.jsx';
import reducers from '../../reducers';
import Menu from '../Menu.jsx';
import SearchField from '../SearchField.jsx';
import Map from '../Map.jsx';
import List from '../List.jsx';
import ListItem from '../ListItem.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('App test', () => {
  const store = createStore(reducers);
  const wrapper = mount(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mapApp'),
  );
  expect(wrapper.render()).toMatchSnapshot();
  expect(wrapper.find(Menu)).toHaveLength(1);
  expect(wrapper.find(SearchField)).toHaveLength(1);
  expect(wrapper.find(List)).toHaveLength(1);
  expect(wrapper.find(Map)).toHaveLength(1);

  const newSpotInput = wrapper.find('input[type="text"]');
  const newSpotForm = wrapper.find('form');
  newSpotInput.simulate('change', { target: { value: 'newSpot' } });
  expect(wrapper.render()).toMatchSnapshot();
  expect(wrapper.find(ListItem)).toHaveLength(1);
  newSpotForm.simulate('submit');
  expect(wrapper.find(ListItem)).toHaveLength(2);
  expect(wrapper.render()).toMatchSnapshot();
});
