import { useState, useEffect } from "react";
import "./App.css";
import GraphContainer from "./components/GraphContainer";
import Maps from "./components/Map";
import AlertContainer from "./components/AlertContainer";

function App() {
  const [dateState, setDateState] = useState(new Date());

  const [alertList, setAlertList] = useState([]);

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  useEffect(() => {
    console.log("LII", alertList)
  }, [alertList]);

  return (
    <div className="container">
      {/*
       *Header Container
       */}
      <div className="headerContainer">
        <div className="headerWrapper">
          {/*TECH WON MAJU LED SDN. BHD.*/}
          <h1 className="header"></h1>
        </div>
        <div className="siteWrapper">
          {/*Site Integrated Monitoring System (SIMS)*/}
          <h3 className="siteIntegrate"></h3>

          <div style={{ marginTop: 40 }}>
            <h3 className="time">{dateState.toLocaleString()}</h3>
          </div>
        </div>
      </div>
      {/*
       *Wrapper of Graph Map and Alert Container
       */}
      <div className="wrapper">
        <GraphContainer />
        <Maps alertList={alertList} setAlertList={setAlertList} />
        <AlertContainer alertList={alertList} setAlertList={setAlertList} />
      </div>
    </div>
  );
}

export default App;
