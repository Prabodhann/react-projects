import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

export default function StarRatings({ starNums = 5 }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  function handleMouseClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseMove(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="start-rating">
      <h1 className="h1">Project: Start Ratings</h1>
      {[...Array(starNums)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleMouseClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
