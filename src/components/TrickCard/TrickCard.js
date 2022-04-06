import React from 'react';
import '../TrickCard/TrickCard.css'

const TrickCard = ({ stance, name, obstacle, tutorial}) => {

  const formatUppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)

  }
  return (
    <div className="trick-card">
      <p>{formatUppercase(stance)} {formatUppercase(name)}</p>
      <p>{`Obstacle: ${formatUppercase(obstacle)}`}</p>
      <p>Link to Tutorial:</p>
      <p>{tutorial}</p>
    </div>
  )

}




export default TrickCard;
