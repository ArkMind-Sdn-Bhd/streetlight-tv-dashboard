import React from "react";
import TotalConsumptionGraph from "./TotalConsumptionGraph";
import MonthlyConsuption from "./MonthlyConsuption";
/*
 *Carousel
 */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function GraphContainer() {
  return (
    <div className="graphContainer">
      <div className="graphWrapper">
        <TotalConsumptionGraph />
      </div>

      <div className="graphWrapper">
        <MonthlyConsuption />
      </div>

      <div className="graphWrapper stats">
        <div className="statsWrapper">
          <h2>total</h2>
          <h4>974kW</h4>
        </div>
        <div className="statsWrapper">
          <h2>Score</h2>
          <h4>974kW</h4>
        </div>
      </div>

      <div className="graphWrapper sliderContainer">
        <Carousel showIndicators={false} showStatus={false} showArrows={true}>
          <div className="sliderContent">
            {/* <img src={""} /> */}
            <p>Slide 1</p>
          </div>
          <div className="sliderContent">
            {/* <img src={""} /> */}
            <p>Slide 2</p>
          </div>
          <div className="sliderContent">
            {/* <img src={""} /> */}

            <p>Slide 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
