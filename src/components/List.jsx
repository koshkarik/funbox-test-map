import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import ListItem from '../containers/ListItem';

export default SortableContainer(({ items, places }) => (
  <ul className="list-group bg-dark ml-2 mr-2">
    {items.map((value, index) => (
      <ListItem key={`item-${index}`} index={index} value={value} places={places} />
    ))}
  </ul>
));
