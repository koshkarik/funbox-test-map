import React from 'react';
import Menu from '../containers/Menu';
import Map from '../containers/Map';
import SearchInput from '../containers/SearchField';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-6 col-sm-5 col-xl-3 col-md-4 bg-dark" style={ { height: '100vh' } }>
        <SearchInput />
        <Menu />
      </div>
      <div className="col-6 col-sm-7 col-xl-9 col-md-8 pt-3 pb-3 bg-light" style={ { height: '100vh' } }>
        <Map />
      </div>
    </div>
  </div>
);

export default App;
