import { useState, useEffect } from "react";
import "./App.css";
import GraphContainer from "./components/GraphContainer";
import Maps from "./components/Map";
import AlertContainer from "./components/AlertContainer";

function App() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div className="container">
      {/*
       *Header Container
       */}
      <div className="headerContainer">
        <div className="headerWrapper">
          <h1 className="header">TECH WON MAJU LED SDN. BHD.</h1>
        </div>
        <div className="siteWrapper">
          <h3 className="siteIntegrate">
            Site Integrated Monitoring System (SIMS)
          </h3>
          <h3 className="time">{dateState.toLocaleString()}</h3>
        </div>
      </div>
      {/*
       *Wrapper of Graph Map and Alert Container
       */}
      <div className="wrapper">
        <GraphContainer />
        <Maps />
        <AlertContainer />
      </div>
    </div>
  );
}

export default App;
