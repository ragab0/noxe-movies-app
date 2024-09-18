import { useState, useEffect } from "react";
import globalFetcher from "../../utils/globalFetcher";

export default function useDataFetcher(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await globalFetcher(url);
        isMounted &&
          setData(response.data) &&
          console.log("NEW DATA has set: ", response.data);
      } catch (err) {
        isMounted && setError(err);
      } finally {
        isMounted && setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
