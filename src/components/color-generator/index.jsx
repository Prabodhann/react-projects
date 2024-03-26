import { useEffect, useState } from 'react';
import './style.css';

/* hex #AS8DF8 #234234

rgb(255,255,255)*/

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomNumber(length) {
    return Math.floor(Math.random() * length);
  }

  function randomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber(hex.length)];
    }
    setColor(hexColor);
  }

  function randomRgbColor() {
    let r = randomNumber(256);
    let g = randomNumber(256);
    let b = randomNumber(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') randomRgbColor();
    else randomHexColor();
  }, [typeOfColor]);

  return (
    <div className="container" style={{ background: color }}>
      <div className="wrapper">
        <button class="button-35" onClick={() => setTypeOfColor('hex')}>
          Create Hex color
        </button>
        <button class="button-35" onClick={() => setTypeOfColor('rgb')}>
          Create RGB color
        </button>
        <button
          class="button-35"
          onClick={typeOfColor === 'hex' ? randomHexColor : randomRgbColor}
        >
          Generate Random color
        </button>
      </div>
      <div className="colorInfo">
        <h2> {typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'} </h2>
        <h3> {color} </h3>
      </div>
    </div>
  );
}
