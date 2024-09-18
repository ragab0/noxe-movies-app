import React, { useState } from "react";
import { manyItemEdnpoint } from "../../utils/globalAPIEndpoints";
import OverviewCard from "../OverviewCard/OverviewCard";
import Loading from "../Loading/Loading";
import useDataFetcher from "../hooks/useDataFetcher";
import "./TabedSection.css";

export default function TabedSection({ apiTrendingCategory, hasRate }) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useDataFetcher(
    manyItemEdnpoint(apiTrendingCategory, currentPage)
  );

  return (
    <section className="tabed-section">
      <div className="container">
        <div className="cards">
          {loading ? (
            <Loading />
          ) : (
            data.results.map((card, i) => (
              <OverviewCard
                key={i}
                card={card}
                hasRate={hasRate}
                apiTrendingCategory={apiTrendingCategory}
              />
            ))
          )}
        </div>
        <div className="tabes">
          {[...new Array(20 < data.total_pages ? 20 : data.total_pages)].map(
            (e, i) => (
              <button key={i} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
