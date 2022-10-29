import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../config";
import GaugeChart from "react-gauge-chart";

function Info() {
  const id = useParams();
  const params = id.id.slice(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${params}?key=${API_KEY}`)
      .then((res) => res.json())
      .then((date) => setInfo(date));
  }, [info.rating]);
  console.log(id);

  return (
    <div className="info">
      <h1>{info.name}</h1>
      <div>
        <img src={info.background_image} alt="" width="100%" />
      </div>
      <div className="rater">
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={20}
          colors={["#FF5F6D", "#FFC371"]}
          arcWidth={0.2}
          percent={(info.rating * 20) / 100}
          textColor="black"
        />
      </div>
      <div>{info.description_raw}</div>
    </div>
  );
}

export default Info;
