import { useCallback, useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [requestKey, setRequestKey] = useState(0);

  const retry = useCallback(() => {
    setRequestKey((currentKey) => currentKey + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `Gagal mengambil data. Status: ${response.status}`,
          );
        }

        const result = await response.json();
        setData(result);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message || "Terjadi kesalahan saat mengambil data.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, requestKey]);

  return {
    data,
    isLoading,
    error,
    retry,
  };
}

export default useFetch;