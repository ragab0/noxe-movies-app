import React from "react";
import "./OverviewCard.css";

export default function OverviewCard({ card, hasRate }) {
  return (
    <figure className="overview-card">
      {hasRate && <span className="rate">7.0</span>}
      <img src="/logo192.png" alt="card-img" />
      <figcaption>{card.name}</figcaption>
    </figure>
  );
}
