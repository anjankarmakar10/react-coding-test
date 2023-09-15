import { useCallback, useEffect, useState } from "react";

const useInfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadMore = useCallback(() => {
    if (!hasMore) return;
    setPage((page) => page + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://contact.mediusware.com/api/contacts/?page=${page}`,
          { signal: controller.signal }
        );
        const result = await response.json();

        if (result?.next === null) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
        setLoading(false);
        setData((prevData) => [...prevData, ...result.results]);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(error.message);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [page]);

  return { data, loadMore, hasMore, loading, error };
};
export default useInfiniteScroll;
