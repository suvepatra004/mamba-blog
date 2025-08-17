import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // npx json-server --watch data/ds.json --port 8010 => This command starts a JSON server to serve the data from ds.json file
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("!! Could not fetch the data from the server");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000); // Simulating a delay of 1 second before fetching data
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

/**
 * This is a custom hook 'useFetch' that fetches data from a given URL.
 * For a given URL this hook will:
 * 1. Fetch the data from the URL.
 * 2. Handle loading state.
 * 3. Handle any errors that may occur during the fetch operation.
 * 4. Return the fetched data, loading state, and error state.
 */
