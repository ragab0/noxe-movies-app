import React, { useEffect } from "react";
import "./Home.css";
import TrendingSection from "../../components/TrendingSection/TrendingSection";

export default function HomePage() {
  return (
    <div className="home-page">
      <TrendingSection
        sectionName={"Movies"}
        hasRate={true}
        apiTrendingCategory="movie"
      />
      <TrendingSection
        sectionName={"Tvs"}
        hasRate={true}
        apiTrendingCategory="tv"
      />
      <TrendingSection sectionName={"People"} apiTrendingCategory="person" />
    </div>
  );
}
