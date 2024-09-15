import React, { useEffect } from "react";
import OverviewCard from "../OverviewCard/OverviewCard";
import cards from "../../data/dummyData";
import "./TrendingSection.css";

export default function TrendingSection({
  sectionName = "Movies",
  hasRate = false,
}) {
  return (
    <section className="trending-section">
      <div className="container cards">
        {/* fixed ui/card */}
        <header className="trending-card__header">
          <div className="trending-header-content">
            <h2>
              Trending <span style={{ display: "block" }}>{sectionName}</span>
              To Watch Right Now
            </h2>
            <p>Top Trending {sectionName} by Day</p>
          </div>
        </header>
        {cards.map((card, i) => (
          <OverviewCard key={i} card={card} hasRate={hasRate} />
        ))}
      </div>
    </section>
  );
}
