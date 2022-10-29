import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { API_KEY } from "../../config";
import SimpleImageSlider from "react-simple-image-slider";

import "./ContWithCard.scss";

function ContWithCard() {
  const [games, setGames] = useState([]);
  const [size, setSize] = useState(10);

  const [search, setSearch] = useState("");
  const handleMore = () => {
    setSize(size + 10);
  };
  const [page, setPage] = useState(1);

  const handlePage = (e) => {
    setPage(e.target.textContent);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=${size}&page=${page}&search=${search}`
    )
      .then((res) => res.json())
      .then((date) => setGames(date.results));
  }, [size, page, search]);

  const images = games.map((i) => i.background_image);

  return (
    <>
      {images.length > 0 && (
        <div>
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div>
      )}

      <div>
        <input onChange={handleSearch} />
      </div>
      <div className="cont-card">
        {games.map(({ id, name, background_image, rating, slug }) => {
          return (
            <Card
              key={id}
              name={name}
              alt={name}
              image={background_image}
              rate={rating}
              id={id}
              game={slug}
            />
          );
        })}
      </div>

      {size !== 40 ? (
        <div className="contMoreGames">
          <button onClick={handleMore}>More Games</button>
        </div>
      ) : null}
      <Pagination handlePage={handlePage} />
    </>
  );
}

export default ContWithCard;
