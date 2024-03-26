import { useEffect, useState } from 'react';
import './index.css';

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [scrollPercentages, setScrollPercentages] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  }

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const totalScrollled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const pecentageScrolled = (totalScrollled / height) * 100;

    setScrollPercentages(pecentageScrolled);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div>
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="scrolling-tracking-container">
          <div
            className="current-progress"
            style={{ width: `${scrollPercentages}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        <h2>This is random data feeds the scroll Indicator</h2>
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
