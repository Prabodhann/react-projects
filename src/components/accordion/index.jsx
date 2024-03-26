//Single selection
//Multi selection

import { useState } from 'react';
import data from './data';
import './styles.css';

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiselection, setEnableMultiselection] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  function handleSingleSelection(getItemId) {
    setSelected(getItemId === selected ? null : getItemId);
  }

  function handleMultiSelection(getItemId) {
    let multiCopy = [...multiSelection];
    let findIndexOfCurrentId = multiCopy.indexOf(getItemId);

    findIndexOfCurrentId === -1
      ? multiCopy.push(getItemId)
      : multiCopy.splice(findIndexOfCurrentId, 1);

    setMultiSelection(multiCopy);
  }

  console.log(selected, multiSelection);

  return (
    <div className="wrapper">
      <h1>Project: This is the dynamic Accordion</h1>
      <button onClick={() => setEnableMultiselection(!enableMultiselection)}>
        {enableMultiselection ? 'Multi Selection' : 'Single Selection'}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiselection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3> {dataItem.question} </h3>
                {/* Conditionally render "+" or "-" based on selected state */}
                <span>
                  {selected === dataItem.id ||
                  multiSelection.indexOf(dataItem.id) !== -1
                    ? '-'
                    : '+'}
                </span>
              </div>
              {selected === dataItem.id ||
              multiSelection.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> NO DATA PRESENT! </div>
        )}
      </div>
    </div>
  );
}
