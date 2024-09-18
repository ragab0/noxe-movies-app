import React from "react";
import "./OverviewCard.css";
import { Link } from "react-router-dom";

export default function OverviewCard({ card, hasRate, apiTrendingCategory }) {
  return (
    <Link to={`/details/${card.id}?type=${apiTrendingCategory}`}>
      <figure className="overview-card">
        {hasRate && (
          <span className="rate">
            {Boolean(card.vote_average) && card.vote_average.toFixed(2)}
          </span>
        )}
        <div className="img-wrapper">
          <img
            src={
              card.poster_path || card.profile_path
                ? "https://image.tmdb.org/t/p/w500/" +
                  (card.poster_path || card.profile_path)
                : ""
            }
            alt="card-img"
          />
        </div>
        <figcaption>{card.name || card.title || "Un-named"}</figcaption>
      </figure>
    </Link>
  );
}
