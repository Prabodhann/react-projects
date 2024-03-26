import { useState } from 'react';
import MenuList from './menu-list';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleDisplayChildren(getCurrentLabel) {
    setDisplayChildren({
      ...displayChildren,

      [getCurrentLabel]: !displayChildren[getCurrentLabel],
    });
  }

  console.log(displayChildren);

  return (
    <li>
      <div className="menu-items">
        <p> {item.label} </p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleDisplayChildren(item.label)}>
            {displayChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
