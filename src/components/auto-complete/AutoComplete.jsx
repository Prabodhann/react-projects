import { useEffect, useState } from 'react';
import AutoItems from './AutoItems';
import './index.css';

export default function AutoComplete() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParam, setSearchParam] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [filterdUser, setFilteredUser] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage(e.messsage);
    }
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUser(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(event) {
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUser([]);
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(users, filterdUser);

  return (
    <div className="container">
      {loading ? (
        <div> Loading the data, please wait.....</div>
      ) : (
        <>
          <h2>Auto-Complete suggestions</h2>
          <input
            value={searchParam}
            type="text"
            placeholder="search username...."
            onChange={handleChange}
          />
        </>
      )}

      {showDropDown && (
        <AutoItems handleClick={handleClick} data={filterdUser} />
      )}
    </div>
  );
}
