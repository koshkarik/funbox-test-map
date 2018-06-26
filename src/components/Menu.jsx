import React from 'react';
import PropTypes from 'prop-types';
import { arrayMove } from 'react-sortable-hoc';
import SortableList from './List.jsx';

export default class Menu extends React.Component {
  onSortEnd = ({ oldIndex, newIndex }) => {
    const newArray = arrayMove(this.props.placesOrder, oldIndex, newIndex);
    this.props.changeOrder(newArray);
  };

  render() {
    const { placesOrder, places } = this.props;
    return (
      <div className="border-top border-light pt-4" style={ { maxHeight: '90%', overflowY: 'scroll' } }>
         <SortableList items={placesOrder} places={places} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}

Menu.propTypes = {
  changeOrder: PropTypes.func,
  places: PropTypes.object,
  placesOrder: PropTypes.array,
};
