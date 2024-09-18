import React from "react";
import "./People.css";
import TabedSection from "../../components/TabedSection/TabedSection";

export default function PeoplePage() {
  return (
    <div className="people-page">
      <TabedSection
        sectionName={"People"}
        hasRate={true}
        apiTrendingCategory="person"
      />
    </div>
  );
}
