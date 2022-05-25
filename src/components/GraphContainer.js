import React, {useState} from "react";
import TotalConsumptionGraph from "./TotalConsumptionGraph";
import MonthlyConsuption from "./MonthlyConsuption";
/*
 *Carousel
 */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function GraphContainer() {

  const [intervalz, setIntervalz] = useState(30000)

  const onChange = (index, item) => {
    setIntervalz(item.props["data-interval"]);
  };

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
          <h6>Accumulated Saving</h6>
          <h1>RM 3733</h1>
        </div>
        <div className="statsWrapper">
          <h6>Accumulated Carbon Footprint</h6>
          <h1>974 KG</h1>
        </div>
      </div>

      <div className="graphWrapper sliderContainer">
        <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            showArrows={true}
            onChange={onChange}
            autoPlay
            interval={intervalz}
            infiniteLoop={true}
        >
          <div className="sliderContent" data-interval={30000}>
            <div>
              <h2>Section 9</h2>
              <p>⚡7,332.24 KWh</p>
              <p>💭5152.66 KG</p>
              <p>💵RM 1,452.12</p>
            </div>
          </div>
          <div className="sliderContent" data-interval={30000}>
            <div>
              <h2>Section 10</h2>
              <p>⚡3,445.24 KWh</p>
              <p>💭6552.66 KG</p>
              <p>💵RM 1,752.12</p>
            </div>
          </div>
          <div className="sliderContent" data-interval={30000}>
            <div>
              <h2>Section 10</h2>
              <p>⚡2,122.24 KWh</p>
              <p>💭9122.77 KG</p>
              <p>💵RM 1,000.12</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
