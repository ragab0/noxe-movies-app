import React from "react";
import { manyItemEdnpoint } from "../../utils/globalAPIEndpoints";
import OverviewCard from "../OverviewCard/OverviewCard";
import useDataFetcher from "../hooks/useDataFetcher";
import "./TrendingSection.css";
import Loading from "../Loading/Loading";

export default function TrendingSection({
  sectionName = "Movies",
  hasRate = false,
  apiTrendingCategory,
}) {
  const { data, loading, error } = useDataFetcher(
    manyItemEdnpoint(apiTrendingCategory)
  );

  console.log(data);

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
        {loading ? (
          <Loading />
        ) : (
          data?.results
            ?.slice(0, 10)
            .map((card, i) => (
              <OverviewCard
                key={i}
                card={card}
                hasRate={hasRate}
                apiTrendingCategory={apiTrendingCategory}
              />
            ))
        )}
      </div>
    </section>
  );
}
