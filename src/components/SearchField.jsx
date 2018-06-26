import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

class SearchInput extends React.Component {
  addSpot = (values) => {
    if (!values.text) {
      return;
    }
    const { lat, lng } = this.props.center;
    this.props.reset();
    this.props.addNewSpot({
      name: values.text,
      lat,
      lng,
    });
  }

  render() {
    return (
      <div className="input-field mt-4 mb-4">
        <form action="" onSubmit={this.props.handleSubmit(this.addSpot)}>
          <div className="input-group">
            <Field
              className="form-control"
              name="text"
              required
              component="input"
              type="text"
              placeholder="Enter new place"
            />
          </div>
        </form>
      </div>
    );
  }
}

SearchInput.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  reset: PropTypes.func,
  addNewSpot: PropTypes.func,
  center: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'newSpot',
})(SearchInput);
