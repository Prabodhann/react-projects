export default function AutoItems({ data, handleClick }) {
  return (
    <>
      <h3>Below are the autocomplete suggestions...</h3>

      <ul>
        {data && data.length
          ? data.map((item, index) => (
              <li key={index} onClick={handleClick}>
                {item}
              </li>
            ))
          : null}
      </ul>
    </>
  );
}
