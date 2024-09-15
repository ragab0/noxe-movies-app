import React from "react";
import "./Home.css";
import TrendingSection from "../../components/TrendingSection/TrendingSection";

export default function HomePage() {
  return (
    <div className="home-page">
      <TrendingSection sectionName={"Movies"} hasRate={true} />
      <TrendingSection sectionName={"Tvs"} hasRate={true} />
      <TrendingSection sectionName={"People"} />
    </div>
  );
}
