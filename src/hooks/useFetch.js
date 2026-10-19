import { useEffect, useState } from "react";

function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    loading: Boolean(url),
    error: null,
  });

  useEffect(() => {
    if (!url) {
      setState({ data: null, loading: false, error: null });
      return undefined;
    }

    const controller = new AbortController();

    async function fetchData() {
      try {
        setState({ data: null, loading: true, error: null });
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        if (error.name !== "AbortError") {
          setState({ data: null, loading: false, error });
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return state;
}

export default useFetch;