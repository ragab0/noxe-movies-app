import React from "react";
import "./Tv.css";
import TabedSection from "../../components/TabedSection/TabedSection";

export default function TvPage() {
  return (
    <div className="tv-page">
      <TabedSection
        sectionName={"tv"}
        hasRate={true}
        apiTrendingCategory="tv"
      />
    </div>
  );
}
