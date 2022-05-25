import React from "react";

export default function AlertContainer() {
  return (
    <div className="alertContainer">
      {/*<h5 className="alert">Alert</h5>*/}

      <br />
      <br />
      <br />

      {/*
       *Black Out
       */}
      <div className="inner-wrapper">
        <h6 className="h6 balckout">Blackout</h6>
        <table className="table">
          <tr className="data back-blackout">
            <th>Cabinet</th>
            <th className="center-heading">Region</th>
            <th>Time</th>
          </tr>
          <tr className="data">
            <td>Lebuh Keluli</td>
            <td className="centered">7</td>
            <td>2022/05/25</td>
          </tr>
          <tr className="data back-blackout">
            <td>Jalan Ungu U9/28B</td>
            <td className="centered">U9</td>
            <td>2022/05/23</td>
          </tr>
        </table>
      </div>

      {/*
       *Phase Out
       */}
      <div className="inner-wrapper">
        <h6 className="h6 phaseout">Phaseout</h6>

        <table className="table">
          <tr className="data back-blackout">
            <th>Cabinet</th>
            <th className="center-heading">Region</th>
            <th>Time</th>
          </tr>
          <tr className="data">
            <td>Lebuh Keluli</td>
            <td className="centered">7</td>
            <td>2022/05/25</td>
          </tr>
          <tr className="data back-blackout">
            <td>Jalan Ungu U9/28B</td>
            <td className="centered">U9</td>
            <td>2022/05/23</td>
          </tr>
        </table>
      </div>

      {/*
       *Major Fault
       */}
      <div className="inner-wrapper">
        <h6 className="h6 majorFault">Major Fault</h6>

        <table className="table">
          <tr className="data back-blackout">
            <th>Cabinet</th>
            <th className="center-heading">Region</th>
            <th>Time</th>
          </tr>
          <br />
          <br />
        </table>
        {/* <div className="table">
          <div className="data back-majorFault">
            <span>Cabinet</span>
            <span className=" center-heading">Region</span>
            <span>Time</span>
          </div>
          <br />
          <br />
          {/*<div className="data">*/}
        {/*  <span>XXXXXXXXXX</span>*/}
        {/*  <span className="centered">U1</span>*/}
        {/*  <span>2020/05/10</span>*/}
        {/*</div>*/}
        {/*<div className="data back-majorFault">*/}
        {/*  <span>XXXXXXXXXX</span>*/}
        {/*  <span className="centered">U1</span>*/}
        {/*  <span>2020/05/10</span>*/}
        {/*</div>
        </div> */}
      </div>

      {/*
       *Minor Fault
       */}
      <div className="inner-wrapper">
        <h6 className="h6 minorFault">Minor Fault</h6>

        <table className="table">
          <tr className="data back-blackout">
            <th>Cabinet</th>
            <th className="center-heading">Region</th>
            <th>Time</th>
          </tr>
          <br />
          <br />
        </table>
        {/* <div className="table">
          <div className="data back-minorFault">
            <span>Cabinet</span>
            <span className="center-heading">Region</span>
            <span>Time</span>
          </div>
          <br />
          <br />
          {/*<div className="data">*/}
        {/*  <span>XXXXXXXXXX</span>*/}
        {/*  <span className="centered">U1</span>*/}
        {/*  <span>2020/05/10</span>*/}
        {/*</div>*/}
        {/*<div className="data back-minorFault">*/}
        {/*  <span>XXXXXXXXXX</span>*/}
        {/*  <span className="centered">U1</span>*/}
        {/*  <span>2020/05/10</span>*/}
        {/*</div>*
        </div> */}
      </div>

      {/*
       *Door Open
       */}
      <div className="inner-wrapper">
        <h6 className="h6 doorOpen">Door Open</h6>

        <table className="table">
          <tr className="data back-blackout">
            <th>Cabinet</th>
            <th className="center-heading">Region</th>
            <th>Time</th>
          </tr>
          <br />
          <br />
        </table>
        {/* <div className="table">
          <div className="data back-doorOpen">
            <span>Cabinet</span>
            <span className="center-heading">Region</span>
            <span>Time</span>
          </div>
          <br />
          <br />
          {/*<div className="data">*/}
        {/*  <span>XXXXXXXXXX</span>*/}
        {/*  <span className="centered">U1</span>*/}
        {/*  <span>2020/05/10</span>*/}
        {/*</div>*/}
        {/*<div className="data back-doorOpen">*/}
        {/*  <span>XXXXXXXXXX</span>*/}
        {/*  <span className="centered">U1</span>*/}
        {/*  <span>2020/05/10</span>*/}
        {/*</div>
        </div> */}
      </div>

      {/*
       *Door Open
       */}
      <div className="inner-wrapper">
        <h6 className="h6 daylightOn">Day Light On</h6>

        <table className="table">
          <tr className="data back-blackout">
            <th>Cabinet</th>
            <th className="center-heading">Region</th>
            <th>Time</th>
          </tr>
          <br />
          <br />
        </table>
        {/* <div className="table">
          <div className="data back-daylightOn">
            <span>Cabinet</span>
            <span className="center-heading">Region</span>
            <span>Time</span>
          </div>
          <br />
          <br />
          {/*<div className="data">*/}
        {/*  <span>XXXXXXXXXX</span>*/}
        {/*  <span className="centered">U1</span>*/}
        {/*  <span>2020/05/10</span>*/}
        {/*</div>*/}
        {/*<div className="data back-daylightOn">*/}
        {/*  <span>XXXXXXXXXX</span>*/}
        {/*  <span className="centered">U1</span>*/}
        {/*  <span>2020/05/10</span>*/}
        {/*</div>
        </div> */}
      </div>
    </div>
  );
}
