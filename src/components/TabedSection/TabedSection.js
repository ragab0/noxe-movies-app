import React from "react";
import cards from "../../data/dummyData";
import OverviewCard from "../OverviewCard/OverviewCard";
import "./TabedSection.css";

export default function TabedSection({ hasRate }) {
  return (
    <section className="tabed-section">
      <div className="container">
        <div className="cards">
          {cards.map((card, i) => (
            <OverviewCard key={i} card={card} hasRate={hasRate} />
          ))}
        </div>
        <div className="tabes">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </section>
  );
}
