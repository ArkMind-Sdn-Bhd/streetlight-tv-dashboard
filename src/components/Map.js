import React, { useEffect, useState } from "react";
import Map, { Marker, Popup, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

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

// TODO: data, is the text u want to show in popup

const CITIES = [
  {
    latitude: 3.07044,
    longitude: 101.476307,
    line1: "Lebuh Keluli",
    line2: "Section 7",
    line3: "N/A"
  },
  {
    latitude: 3.134462,
    longitude: 101.506562,
    line1: "Jalan Hijau Alam U9/16",
    line2: "Section U9",
    line3: "Feeder Pillar 047"
  },
  {
    latitude: 3.064064833,
    longitude: 101.488354,
    line1: "Jalan Plumbum AC/7AC",
    line2: "Section 7",
    line3: "Feeder Pillar 011"
  },
  {
    latitude: 3.080462,
    longitude: 101.534238,
    line1: "9, Jalan Sultan Sir Samad",
    line2: "Section 9",
    line3: "Feeder Pillar 039"
  },
  {
    latitude: 3.074375495045542,
    longitude: 101.48848931439056,
    line1: "Blok 5 Pangsapuri ",
    line2: "Section 7",
    line3: "Feeder Pillar 003"
  },
  {
    latitude: 3.064858,
    longitude: 101.508583,
    line1: "Persiaran Raja Muda ",
    line2: "Section 2",
    line3: "Feeder Pillar 005"
  },
  {
    latitude: 3.079268,
    longitude: 101.506972,
    line1: "Bulatan Mestika ",
    line2: "Section 3",
    line3: "Feeder Pillar 050"
  },
  {
    latitude: 3.101359,
    longitude: 101.49174,
    line1: "Jalan Gunung Nuangu 11/26",
    line2: "Section 11",
    line3: "Feeder Pillar 027"
  },
  {
    latitude: 3.072797,
    longitude: 101.535234,
    line1: "Jalan Laksamana 12/1",
    line2: "Section 12",
    line3: "Feeder Pillar 021"
  },
  {
    latitude: 3.010877,
    longitude: 101.519333,
    line1: "Persiaran Sultan",
    line2: "Section 15",
    line3: "Feeder Pillar 018"
  },
  {
    latitude: 3.052805921,
    longitude: 101.4876557,
    line1: "Jalan Lengkuas 16/25",
    line2: "Section 16",
    line3: "Feeder Pillar 043"
  },
  {
    latitude: 3.133034,
    longitude: 101.489993,
    line1: "Jalan Pulau India U10/54",
    line2: "Section U10",
    line3: "Feeder Pillar 012"
  },
  {
    latitude: 3.069019545,
    longitude: 101.4795126,
    line1: "Jalan Keluli 1 ",
    line2: "Section 7",
    line3: "Feeder Pillar 025"
  },
  {
    latitude: 3.127971,
    longitude: 101.503802,
    line1: "Jalan Subang Impian U10",
    line2: "Section U10",
    line3: "Feeder Pillar 015"
  },
  {
    latitude: 3.082736,
    longitude: 101.491135,
    line1: "2, Jalan Platinum 7/53",
    line2: "Section 7",
    line3: "Feeder Pillar 030"
  },
  {
    latitude: 3.1221852,
    longitude: 101.506532,
    line1: "Jalan Pulau Kapas U10/84",
    line2: "Section U10",
    line3: "Feeder Pillar 033"
  },
  {
    latitude: 3.142192,
    longitude: 101.481872,
    line1: "Jalan Pulau Lumut U10/76",
    line2: "Section U10",
    line3: "Feeder Pillar 052"
  },
  {
    latitude: 3.094564,
    longitude: 101.487677,
    line1: "Jalan Gunung Nuang U11/3",
    line2: "Section U11",
    line3: "Feeder Pillar 009"
  },
  {
    latitude: 3.078018,
    longitude: 101.47862,
    line1: "Jalan Pegaga B U12/B",
    line2: "Section U12",
    line3: "Feeder Pillar 017"
  },
  {
    latitude: 3.096803,
    longitude: 101.4462445,
    line1: "Jalan Setia Impian U13/2D",
    line2: "Section U13",
    line3: "Feeder Pillar 019"
  },
  {
    latitude: 3.0991943,
    longitude: 101.4477774,
    line1: "Jalan Setia Damai U13/4A",
    line2: "Section U13",
    line3: "Feeder Pillar 038"
  },
  {
    latitude: 3.0961903,
    longitude: 101.4529279,
    line1: "Jalan Setial Impian U13/3C",
    line2: "Section U13",
    line3: "Feeder Pillar 041"
  },
  {
    latitude: 3.0978658,
    longitude: 101.4631922,
    line1: "Jalan Setia Damai U13/15D",
    line2: "Section U13",
    line3: "Feeder Pillar 049"
  },
  {
    latitude: 3.010877,
    longitude: 101.519333,
    line1: "Jalan Ungu U9/28B",
    line2: "Section U9",
    line3: "Feeder Pillar 007"
  },
];

/*
 *Cordinates to display Boundary
 */


// TODO: The purple box coords

const boundaryCordinates = [
    [101.439650, 3.103990],
  [101.452619, 3.107279],
  [101.454649, 3.128768],
  [101.477176, 3.127953],
  [101.475735, 3.154267],
  [101.504236, 3.142869],
  [101.532902, 3.140034],
  [101.534801, 3.116711],
  [101.527800, 3.116297],
  [101.528902, 3.083595],
  [101.546758, 3.077906],
  [101.545813, 3.058956],
  [101.522030, 3.055812],
  [101.522084, 3.043059],
  [101.479611, 3.045686],
  [101.469867, 3.055828],
  [101.467248, 3.084048],
  [101.444134, 3.084262],
  [101.439650, 3.103990],

];

export default function Maps() {
  /*
   *Intial Cordinates of Map
   */
  const [viewState, setViewState] = React.useState({
    longitude: 101.494498,
    latitude: 3.098020,
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
      <img className="mapLogo" src="https://streetlight-tv-dashboard.web.app/maplogo.png" alt="map-logo" />
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
              "line-width": 8,
            }}
          ></Layer>
          {/*
           *Render all the pointers/markers
           */}
          {CITIES.map(({ latitude, longitude, line1, line2, line3 }, index) => (
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
                setPopupInfo({ latitude, longitude, line1, line2, line3 });
              }}
            >
              {/*
               *If have alert then show red marker/pointer else green
               */}
              {line1 ? (
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "green",
                  }}
                ></div>
              ) : (
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "red",
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
                  width: "170px",
                  height: "150px",
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ color: "#000" }}>{popupInfo.line1}</p>
                <p style={{ color: "#000" }}>{popupInfo.line2}</p>
                <p style={{ color: "#000" }}>{popupInfo.line3}</p>
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
          S02
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.497847, 3.073034, 15);
          }}
        >
          S03
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.496743, 3.101665, 15);
          }}
        >
          S04
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.515162, 3.064845, 15);
          }}
        >
          S06
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.484847, 3.017062, 15);
          }}
        >
          S07
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.454443, 3.023346, 15);
          }}
        >
          S08
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.438356, 3.032051, 15);
          }}
        >
          S09
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.436395, 3.044693, 15);
          }}
        >
          S10
        </span>
        <span
          className="mapBtns"
          onClick={() => {
            clickHandle(101.44218, 3.056652, 15);
          }}
        >
          S11
        </span>
        <span
            className="mapBtns"
            onClick={() => {
              clickHandle(101.44218, 3.056652, 15);
            }}
        >
          S12
        </span>
        <span
            className="mapBtns"
            onClick={() => {
              clickHandle(101.44218, 3.056652, 15);
            }}
        >
          U09
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
            clickHandle(101.49174, 3.101359, 14);
          }}
        >
          U11
        </span>
        <span
          className="mapBtns mapBtnsLg"
          onClick={() => {
            clickHandle(101.49174, 3.101359, 15);
          }}
        >
          U12
        </span>
        <span
            className="mapBtns mapBtnsLg"
            onClick={() => {
              clickHandle(101.494498, 3.098020, 12);
            }}
        >
          ALL
        </span>
      </div>
    </div>
  );
}
