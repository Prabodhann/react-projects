import { useRef, useState } from 'react';
import useOutSideClick from './outSideClick';
import './index.css';

export default function UseOneClickOuside() {
  const [showStuff, setShowStuff] = useState(false);
  const ref = useRef();
  useOutSideClick(ref, () => setShowStuff(false));
  return (
    <div className="show-container">
      {showStuff ? (
        <div ref={ref}>
          <h1>This is the stuff</h1>
          <p>
            This shows when button is clicked, and closes if clicked outside....
          </p>
        </div>
      ) : (
        <button className="button-56" onClick={() => setShowStuff(true)}>
          Show Stuff
        </button>
      )}
    </div>
  );
}
