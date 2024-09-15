import React from "react";
import "./Movies.css";
import TabedSection from "../../components/TabedSection/TabedSection";

export default function MoviesPage() {
  return (
    <div className="movies-page">
      <TabedSection hasRate={true} />
    </div>
  );
}
