import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

export default SortableElement((props) => {
  const { value, places } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mb-2" style={ { backgroundColor: '#dedfe0' } }>
      {places[value].name}
      <button className="close" onClick={() => props.deleteItem(places[value].id)}>&times;</button>
    </li>
  );
});
