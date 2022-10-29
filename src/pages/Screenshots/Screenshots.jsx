import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API_KEY } from "../../config";

function Screenshots() {
  const [screenshots, setScreenshots] = useState([]);
  const gameName = useLocation();
  const game = gameName.pathname.replace("/screenshots/:", "");

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${game}/screenshots?key=${API_KEY}`)
      .then((res) => res.json())
      .then((date) => setScreenshots(date.results));
  }, []);

  console.log(screenshots);

  return (
    <div>
      {screenshots.map(({ image, id }) => {
        return (
          <div>
            <img src={image} alt={id} />
          </div>
        );
      })}
    </div>
  );
}

export default Screenshots;
