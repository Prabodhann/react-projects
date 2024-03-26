import useFetch from './useFetchHook';

export default function UseFetchHookTest() {
  const { data, error, loading } = useFetch(
    'https://dummyjson.com/products',
    {}
  );
  console.log(data, error, loading);
  return (
    <div>
      <h1>useFetchHook</h1>
    </div>
  );
}
