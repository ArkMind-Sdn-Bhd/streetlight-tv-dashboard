import React from "react";

export default function AlertContainer() {
  return (
    <div className="alertContainer">
      <h5 className="alert">Alert</h5>
      {/*
       *Black Out
       */}
      <div className="inner-wrapper">
        <h6 className="h6 balckout">Blackout</h6>
        <div className="table">
          <div className="data back-blackout">
            <span>Cabinet</span>
            <span className="centered">Region</span>
            <span>Time</span>
          </div>
          <div className="data">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
          <div className="data back-blackout">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
        </div>
      </div>

      {/*
       *Phase Out
       */}
      <div className="inner-wrapper">
        <h6 className="h6 phaseout">Phaseout</h6>
        <div className="table">
          <div className="data back-phaseout">
            <span>Cabinet</span>
            <span className="centered">Region</span>
            <span>Time</span>
          </div>
          <div className="data">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
          <div className="data back-phaseout">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
        </div>
      </div>

      {/*
       *Major Fault
       */}
      <div className="inner-wrapper">
        <h6 className="h6 majorFault">Major Fault</h6>
        <div className="table">
          <div className="data back-majorFault">
            <span>Cabinet</span>
            <span className="centered">Region</span>
            <span>Time</span>
          </div>
          <div className="data">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
          <div className="data back-majorFault">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
        </div>
      </div>

      {/*
       *Minor Fault
       */}
      <div className="inner-wrapper">
        <h6 className="h6 minorFault">Minor Fault</h6>
        <div className="table">
          <div className="data back-minorFault">
            <span>Cabinet</span>
            <span className="centered">Region</span>
            <span>Time</span>
          </div>
          <div className="data">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
          <div className="data back-minorFault">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
        </div>
      </div>

      {/*
       *Door Open
       */}
      <div className="inner-wrapper">
        <h6 className="h6 doorOpen">Door Open</h6>
        <div className="table">
          <div className="data back-doorOpen">
            <span>Cabinet</span>
            <span className="centered">Region</span>
            <span>Time</span>
          </div>
          <div className="data">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
          <div className="data back-doorOpen">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
        </div>
      </div>

      {/*
       *Door Open
       */}
      <div className="inner-wrapper">
        <h6 className="h6 daylightOn">Day Light On</h6>
        <div className="table">
          <div className="data back-daylightOn">
            <span>Cabinet</span>
            <span className="centered">Region</span>
            <span>Time</span>
          </div>
          <div className="data">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
          <div className="data back-daylightOn">
            <span>XXXXXXXXXX</span>
            <span className="centered">U1</span>
            <span>2020/05/10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
