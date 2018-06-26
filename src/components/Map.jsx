import React from 'react';
import { compose, withProps, withHandlers } from 'recompose';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow,
} from 'react-google-maps';

const Map = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCc2aIF1ZebZEnlI9gezYugWf5sYbg_TeY',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withHandlers(() => {
    const refs = {
      map: null,
    };
    return {
      onMapMounted: () => (ref) => {
        refs.map = ref;
      },
      onMarkerMounted: () => (ref) => {
        if (ref) {
          const { id } = ref.props;
          refs[id] = ref;
        }
      },
      onCenterChange: props => () => {
        const latLng = refs.map.getCenter();
        const [lat, lng] = [latLng.lat(), latLng.lng()];
        props.changeMapCenter({ lat, lng });
      },
      onMarkerPlaceChange: props => (id) => {
        const latLng = refs[id].getPosition();
        const [lat, lng] = [latLng.lat(), latLng.lng()];
        props.changeMarkerPosition({ lat, lng, id });
      },
      onMarkerClick: props => (id) => {
        props.toggleInfoWindow(id);
      },
    };
  }),
  withScriptjs,
  withGoogleMap,
)((props) => {
  console.log(props);
  const { placesOrder, places } = props;
  console.log(placesOrder);
  const lines = placesOrder.map(item => ({ lat: places[item].lat, lng: places[item].lng }));
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
      onDragEnd={(e) => { props.onCenterChange(e); } }
      ref={props.onMapMounted}
    >
      {placesOrder.length > 0 && placesOrder.map((spot) => {
        const {
          lat, lng, name, id, infoWindowOpen,
        } = places[spot];
        return (
          <Marker
            position={{ lat, lng }}
            key={id}
            id={id}
            draggable={true}
            onClick={() => props.onMarkerClick(id)}
            ref={props.onMarkerMounted}
            onDrag={() => props.onMarkerPlaceChange(id)}>
            {infoWindowOpen
              && <InfoWindow onCloseClick={() => props.onMarkerClick(id)}>
                   <div>{name}</div>
                 </InfoWindow>}
          </Marker>);
      })}
      {lines.length > 1 && <Polyline path={lines} /> }
    </GoogleMap>
  );
});

export default Map;
