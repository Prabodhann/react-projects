import { useEffect, useState } from 'react';

export default function useFetch(url, options = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (e) {
      setError(`${e} error occured`);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
}
