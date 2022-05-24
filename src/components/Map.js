import React, { useState } from "react";
import Map, { Marker, Popup, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
/*
 *Map Box Access TOKEN
 */
const TOKEN =
  "pk.eyJ1IjoiYXJrbWluZGRhc2giLCJhIjoiY2wzZ29wdm5yMDdwbjNibzJ0czZicTF3dCJ9.OXcjESMBz-6KGG8sG8QJPA"; // Set your mapbox token here

/*
 *Cordinates for alerts
 */
const CITIES = [
  {
    latitude: 3.07044,
    longitude: 101.476307,
    data: 76,
  },
  {
    latitude: 3.079294,
    longitude: 101.489073,
    data: 5,
  },
  {
    latitude: 3.090313,
    longitude: 101.488317,
    data: 2,
  },
  {
    latitude: 3.075652,
    longitude: 101.502792,
  },
  { latitude: 3.073574, longitude: 101.508041 },
  { latitude: 3.081345, longitude: 101.503797 },
  { latitude: 3.082646, longitude: 101.482488 },
];

/*
 *Cordinates to display Boundary
 */
const boundaryCordinates = [
  [101.484998, 3.102934],
  [101.492284, 3.102617],
  [101.494175, 3.098158],
  [101.513909, 3.095038],
  [101.513909, 3.086086],
  [101.514066, 3.086086],
  [101.511456, 3.085594],
  [101.51245, 3.069113],
  [101.521127, 3.062307],
  [101.518998, 3.0558821],
  [101.52203, 3.055812],
  [101.507094, 3.053375],
  [101.507464, 3.04765],
  [101.486228, 3.048288],
  [101.481035, 3.054721],
  [101.481164, 3.058801],
  [101.485276, 3.060919],
  [101.485602, 3.063689],
  [101.481363, 3.06854],
  [101.467113, 3.068701],
  [101.463929, 3.078002],
  [101.472594, 3.078617],
  [101.474063, 3.090484],
  [101.485611, 3.090297],
  [101.484998, 3.102934],
];

export default function Maps() {
  /*
   *Intial Cordinates of Map
   */
  const [viewState, setViewState] = React.useState({
    longitude: 101.494498,
    latitude: 3.062946,
    zoom: 12,
    center: true,
  });

  /*
   *Handle State of Popup on CLick
   */
  const [popupInfo, setPopupInfo] = useState(null);

  /*
   *Data Object for Boundary
   */
  const data = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: boundaryCordinates,
    },
  };
  return (
    <div className="map">
      <img className="mapLogo" src="./mapLogo.png" alt="map-logo" />
      <Map
        style={{ width: "100%", height: "90%" }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={TOKEN}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        interactiveLayerIds={["sf-neighborhoods-fill"]}
      >
        <Source id="polylineLayer" type="geojson" data={data}>
          {/*
           *Display Boundary
           */}
          <Layer
            id="lineLayer"
            type="line"
            source="my-data"
            layout={{
              "line-join": "round",
              "line-cap": "round",
            }}
            paint={{
              "line-color": "rgb(205,102,233)",
              "line-width": 5,
            }}
          ></Layer>
          {/*
           *Render all the pointers/markers
           */}
          {CITIES.map(({ latitude, longitude, data }, index) => (
            <Marker
              key={index}
              anchor="bottom"
              latitude={latitude}
              longitude={longitude}
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                /*
                 *If there is Alert then set Data to popup else null
                 */
                setPopupInfo({ latitude, longitude, data });
              }}
            >
              {/*
               *If have alert then show red marker/pointer else green
               */}
              {data ? (
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "red",
                  }}
                ></div>
              ) : (
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "green",
                  }}
                ></div>
              )}
            </Marker>
          ))}

          {/*
           *Show pop up when Click on the marker/pointer that have alert
           */}
          {popupInfo && (
            <Popup
              anchor="top"
              longitude={popupInfo.longitude}
              latitude={popupInfo.latitude}
              onClose={() => setPopupInfo(null)}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "70px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ color: "#000" }}>{popupInfo.data}</p>
              </div>
            </Popup>
          )}
        </Source>
      </Map>

      {/*
       *Bottom Section
       */}
      <div className="section">
        <span>Section 1</span>
        <span>Section 2</span>
        <span>Section 3</span>
        <span>Section 4</span>
        <span>Section 5</span>
        <span>Section 6</span>
        <span>Section 7</span>
      </div>
    </div>
  );
}
