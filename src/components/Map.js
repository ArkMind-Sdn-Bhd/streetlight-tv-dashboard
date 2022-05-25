import React, { useEffect, useState } from "react";
import Map, { Marker, Popup, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

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
  });

  useEffect(() => {}, []);
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

  const clickHandle = (longitude, latitude, zoom) => {
    setViewState({
      latitude,
      longitude,
      zoom,
    });
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
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.502439, 3.07072, 15);
          }}
        >
          U1
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.497847, 3.073034, 15);
          }}
        >
          U2
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.496743, 3.101665, 15);
          }}
        >
          U3
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.515162, 3.064845, 15);
          }}
        >
          U4
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.484847, 3.017062, 15);
          }}
        >
          U5
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.454443, 3.023346, 15);
          }}
        >
          U6
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.438356, 3.032051, 15);
          }}
        >
          U7
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.436395, 3.044693, 15);
          }}
        >
          U8
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.44218, 3.056652, 15);
          }}
        >
          U9
        </span>
        <span
          className="mapBtns mapBtnsLg"
          onClick={() => {
            clickHandle(101.427206, 3.045428, 15);
          }}
        >
          U10
        </span>
        <span
          className="mapBtns mapBtnsLg"
          onClick={() => {
            clickHandle(101.421547, 3.040072, 15);
          }}
        >
          U11
        </span>
        <span
          className="mapBtns mapBtnsLg"
          onClick={() => {
            clickHandle(101.494498, 3.062946, 12);
          }}
        >
          ALL
        </span>
      </div>
    </div>
  );
}
