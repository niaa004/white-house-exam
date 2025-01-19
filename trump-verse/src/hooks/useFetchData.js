import { useState, useEffect } from "react";

/*Custom hook for å hente data fra URL -> State for lagring, laste, feilmelding*/
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effekt som henter data når URL endres -> loading (true) -> nullstilleer
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      // Henter data fra URL med sjekk fra respons
      try {
        const response = await fetch(url);

        if (response.ok === false) {
          throw new Error("Failed to fetch data");
        }

        // Sjekk -> JSON -> State -> feilmelding -> laste (false)
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // -> Repeat

  return { // -> data, laste, feilmelding
    data,
    loading,
    error,
  };
};

export default useFetchData;
