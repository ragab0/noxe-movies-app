import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import fetchSingle from "../../utils/globalFetcher";
import useDataFetcher from "../../components/hooks/useDataFetcher";
import { singleItemEdnpoint } from "../../utils/globalAPIEndpoints";

export default function Details() {
  const [searchParams] = useSearchParams();
  const { type } = searchParams;
  const { id } = useParams();
  const { data, loading, error } = useDataFetcher(singleItemEdnpoint(type, id));

  return (
    <div className="details-page">
      <figure>
        <div className="img-wrapper">
          <img alt={`${type}-img`} src="" />
        </div>
        <figcaption>{data.name}</figcaption>
      </figure>
    </div>
  );
}
